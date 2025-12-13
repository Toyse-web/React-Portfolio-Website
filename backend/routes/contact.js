const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
    try {
        const {name, email, message} = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({error: "All fields are required"});
        }

        const saved = await Message.create({name, email, message});

        // Send notification email
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
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

            transporter.sendMail(mailOptions).catch(err => {
                console.error("Failed to send email notification:", err);
            });
        }

        res.status(201).json({message: "Message received", data: saved});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Server error"});
    }
});

module.exports = router;