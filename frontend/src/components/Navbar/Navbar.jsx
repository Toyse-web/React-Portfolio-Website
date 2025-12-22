import "./Navbar.css";
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-logo">Toyse</div>

            <div className={`nav-links ${open ? "open" : ""}`}>
                <a href="#home" onClick={() => setOpen(false)}>Home</a>
                <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                <a href="#about" onClick={() => setOpen(false)}>About</a>
                <a href="#contact" onClick={() => setOpen(false)}>contact</a>
            </div>

            <div className={`hamburger ${open && "open"}`}
                onClick={() => setOpen(!open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar;