const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const nodemailer = require("nodemailer");
const {body, validationResult} = require("express-validator");

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
        const saved = await Message.create({name, email, message});

        let emailSent = true;
        let emailError = null;

        // Send notification email
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            try {
                const transporter = nodemailer.createTransport({
                    host: process.env.EMAIL_HOST || "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS,
                    },
                });

                const mailOptions = {
                    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
                    to: process.env.EMAIL_USER,
                    subject: `New message from ${name}`,
                    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
                    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
                };

                if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
                    try {
                        await transporter.sendMail(mailOptions);
                        emailSent = true
                    } catch (err) {
                        console.error("Failed to send email notification:", err);
                        emailSent = false;
                    }
                }
            } catch (err) {
                console.error("Email failed:", err.message);
                emailError = err.message;
            }
        }

        res.status(201).json({
            success: true,
            emailSent,
            message: emailSent
                ? "Message received successfully!"
                : "Message not sent",
            emailError,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Server error"});
    }
});

module.exports = router;