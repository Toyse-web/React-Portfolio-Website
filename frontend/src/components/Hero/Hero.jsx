import "./Hero.css";
import profilePic from "../../assets/profile.png";

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-text">
                <h1>Hello, I'm <span className="highlight">Toyib Ayomide</span></h1>
                <h2 className="typewriter">A Full-Stack Developer & A Software Engineer</h2>

                <p className="hero-subtext">I build fast, modern, responsive web applications using Ejs or React, Node.js and PostgreSQL.</p>

                <a href="#projects" className="hero-btn">View My Work</a>
            </div>

            <div className="hero-img">
                <img src={profilePic} alt="Profile" />
            </div>
        </section>
    );
}

export default Hero;