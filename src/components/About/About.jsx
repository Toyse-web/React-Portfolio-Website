import "./About.css";
import profilePic from "../../assets/profile.png"

function About() {
    return (
        <section id="about" className="about-section">
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">Who I am and what I do</p>

            <div className="about-container">
                {/* Left side image */}
                <div className="about-image">
                    <img src={profilePic} alt="Profile" />
                </div>

                {/* Right side text */}
                <div className="about-text">
                    <h2 className="about-heading">
                        I'm a <span>Full-Stack Developer</span>
                    </h2>
                </div>

                <p>
                    I build fast, scalable, and modern applications using technologies 
                    like React, Node.js, Express, PostgreSQL, MongoDB, and REST APIs.  
                </p>

                <p>
                    I focus on clean UI, optimized backend architectures, and smooth 
                    user experiences. Whether I'm building full-stack applications, 
                    dashboards, APIs, or dynamic UIs — I bring ideas to life with code.
                </p>

                <p>
                    I'm passionate about problem-solving, continuous learning, and 
                    building real-world projects that make an impact.
                </p>

                <a href="#contact" className="about-btn">Let's work Together</a>
            </div>
        </section>
    );
}

export default About;