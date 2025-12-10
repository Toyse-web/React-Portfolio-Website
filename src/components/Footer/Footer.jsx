import react from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h2 className="footer-logo">Toyse</h2>
                    <p className="footer-desc">
                        Building clean and scalable digital solutions.
                        Let's work together to bring your idea to life.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h3>Follow Me</h3>
                    <div className="social-icons">
                        <a href="#" target="_blank">🌐</a>
                        <a href="#" target="_blank">🐙</a>
                        <a href="#" target="_blank">🐦</a>
                        <a href="#" target="_blank">💼</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} BigToyse. All Right reserver.</p>
            </div>
        </footer>
    );
};

export default Footer;