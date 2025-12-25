const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const {Resend} = require("resend");
const {body, validationResult} = require("express-validator");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/",
    [
        body("name").trim().notEmpty().withMessage("name is required"),
        body("email").isEmail().notEmpty().withMessage("Valid email is required"),
        body("message").trim().notEmpty().withMessage("Message is required").isLength({min: 10})
        .withMessage("Message must be at least 10 characters"),
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {name, email, message} = req.body;

        // Save to DB
        await Message.create({name, email, message});

        let emailSent = true;
        let emailError = null;

        try {
            await resend.emails.send({
                from: "Portfolio Contact <onboarding@resend.dev>",
                to: ["olayonwatoyib05@gmail.com"],
                subject: `New message from ${name}`,
                html: `<h3>New Portfolio Message<h3>
                        <p<strong>Name:</strong>${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p>${message}</p>`,
            });
        } catch (err) {
            console.error("Resend email failed:", err);
            emailSent = false;
            emailError = err.message;
        }

        return res.status(201).json({
            success: true,
            emailSent,
            message: emailSent
                ? "Message received successfully!"
                : "Message not sent",
            emailError,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({error: "Server error"});
    }
});

module.exports = router;