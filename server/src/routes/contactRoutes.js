const express = require("express");
const router = express.Router();
const {body, validationResult} = require("express-validator");
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

// contact form submission
router.post("/", [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid wmail required"),
    body("subject").notEmpty().withMessage("Subject is required"),
    body("message").notEmpty().withMessage("Message is required")
], async (req, res) => {
    try {
        // validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const {name, email, subject, message} = req.body;

        // save to db
        const contact = new Contact({name, email, subject, message});
        await contact.save();

        // send email notification
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `New Portfolio Contact: ${subject}`,
                html: `<h3>New Contact Form Submission</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>`
            });
        }
        res.status(201).json({
            success: true,
            message: "Message sent successfully!"
        });
    } catch (err) {
        console.error("Contact form error:", err);
        res.status(500).json({
            success: false,
            message: "Failed to send message. Please try again."
        });
    }
});

module.exports = router;