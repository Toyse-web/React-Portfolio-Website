import "./ProjectCard.css";

function ProjectCard({title, desc, image, live, code}) {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-img" />

            <div className="project-overlay">
                <h3>{title}</h3>
                <p>{desc}</p>

                <div className="project-buttons">
                    <a href={live} target="_blank" rel="noreferrer">Live Demo</a>
                    <a href={code} target="_blank" rel="noreferrer" className="code-btn">Source Code</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;