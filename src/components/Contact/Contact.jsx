import { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [status, setStatus] = useState(null);

    const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/contact`, form);
            setStatus("success");
            setForm({name: "", email: "", message: ""});
        } catch (err) {
            console.error(err);
            setStatus("Error");
        }
    }

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

                {/* Right side form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows="6" required />
                    <button type="submit">Send Message</button>
                    {status === "loading" && <p>Sending...</p>}
                    {status === "success" && <p className="success">Thanks - I'll get back to you soon!</p>}
                    {status === "error" && <p className="error">Oops - something went wrong. Try Again!!</p>}
                </form>
            </div>
        </section>
    );
}

export default Contact;