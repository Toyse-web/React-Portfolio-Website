import "./Contact.css";

function Contact() {
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
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="6" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;