import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard.jsx";
import ToyseLoan from "../../assets/ProjectsImg/ToyseLoan.png";
import Ecormmerce from "../../assets/ProjectsImg/perfumeShop.png"

function Projects() {
    const projectList = [
        {
            title: "News App",
            desc: "A global news platform built with React, Node.js, PostgreSQL, and external APIs.",
            image: "",
            live: "https://your-demo-link.com",
            code: "https://github.com/your-repo"
        },
        {
            title: "Loan App",
            desc: "Full loan application workflow featuring coupons, interest calculations, and auth.",
            image: ToyseLoan,
            live: "https://toyse-loan.onrender.com",
            code: "https://github.com/Toyse-web/Toyse-Loan.git"
        },
        {
            title: "E-Commerce Website",
            desc: "An e-commerce website using Ejs + Node.js + PostgreSQL.",
            image: Ecormmerce,
            live: "https://anuoluwa-perfume-and-care-8z7z.onrender.com",
            code: "https://github.com/Toyse-web/Anuoluwa-perfume-and-care.git"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h1 className="projects-title">Projects</h1>
            <p className="projects-subtitle">
                Here are some of the projects I've worked on using modern full-stack technologies.
            </p>

            <div className="projects-grid">
                {projectList.map((list, index) => (
                    <ProjectCard key={index} {...list} />
                ))}
            </div>
        </section>
    );
}

export default Projects;