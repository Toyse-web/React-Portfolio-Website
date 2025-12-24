import { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [status, setStatus] = useState(null);

    const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: "loading", text: "Sending message..."});

        try {
            const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
            const res = await axios.post(`${API_URL}/api/contact`,form);

            console.log("API URL:", process.env.REACT_APP_API_URL);

            if (res.data.success && res.data.message) {
                setStatus({
                    type: res.data.emailError ? "warning" : "success",
                    text: res.data.emailError
                            ? `Message saved, but email failed: ${res.data.emailError}`
                            : "Message sent successfully! I'll get back to you soon",
                });
            }

            setForm({name: "", email: "", message: ""});

        } catch (err) {
            setStatus({
                type: "error",
                text: err.response?.data?.error?.[0]?.msg ||
                    err.response?.data?.message ||
                    "Message must be 10 characters and above."
            });
        }
        setTimeout(() => setStatus(null), 5000);
    };

    return (
        <section id="contact" className="contact-section">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-subtitle">
                Have a project or an idea? Let's work together.
            </p>

            <div className="contact-container">
                {/* Left side info */}
                <div className="contact-info">
                    <h2>Let's Talk</h2>
                    <p>
                        I'm open to freelance projects, collaborations, or just a friendly chat.
                        Send me a message and I'll get back to you as soon as possible.
                    </p>

                    <div className="contact-details">
                        <p><strong>Email:</strong> olayonwatoyib05@gmail.com</p>
                        <p><strong>Location:</strong> West Africa</p>
                    </div>
                </div>

                {status && (
                    <div className={`toast ${status.type}`}>
                        {status.text}
                    </div>
                )}

                {/* Right side form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows="6" required />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;