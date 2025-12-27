import "./Skills.css";

function Skills() {
    const  skills = [
        { name: "React", icon: "⚛️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "Node.js", icon: "🟩" },
        { name: "Express", icon: "🚀" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "Axios / REST APIs", icon: "🔗" },
        { name: "Git & GitHub", icon: "📁" },
    ];

    return (
        <section id="skills" className="skills-section">
            <h1 className="skills-title">Skills & Technologies</h1>
            <p className="skills-subtitle">
                These are the tools technologies I use to build fast, modern and scalable applications.
            </p>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-icon">{skill.icon}</div>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;