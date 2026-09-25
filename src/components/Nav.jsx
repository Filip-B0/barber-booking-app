import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/images/logo.png"; 
import './Nav.css';

function Nav() {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const handleClick = (e, id) => {
        e.preventDefault();
        setOpen(false);

        if (location.pathname === "/") {
            scrollToSection(id);
        } else {
            navigate("/", { state: { scrollTo: id } });
        }
    };

    return (
        <nav className="n">
            <div className="n-top">
                <div className="n-left">
                    <a href="#hero" onClick={(e) => handleClick(e, "hero")}>Početna</a>
                    <a href="#usluge" onClick={(e) => handleClick(e, "usluge")}>Usluge</a>
                    <a href="#cenovnik" onClick={(e) => handleClick(e, "cenovnik")}>Cenovnik</a>
                </div>

                <Link to="/" className="n-logo" onClick={() => setOpen(false)}>
                    <img src= {Logo} className="n-logo-img" />
                </Link>

                <div className="n-right">
                    <Link to="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>
                    <Link to="/login" className="n-btn" onClick={() => setOpen(false)}>Zakaži termin</Link>
                </div>

                <button className="n-toggle" onClick={() => setOpen(!open)} aria-label="Meni">
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className={`n-mobile-links ${open ? "n-mobile-links-open" : ""}`}>
                <a href="#hero" onClick={(e) => handleClick(e, "hero")}>Početna</a>
                <a href="#usluge" onClick={(e) => handleClick(e, "usluge")}>Usluge</a>
                <a href="#cenovnik" onClick={(e) => handleClick(e, "cenovnik")}>Cenovnik</a>
                <Link to="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>
                <Link to="/login" onClick={() => setOpen(false)}>Zakaži termin</Link>
            </div>
        </nav>
    );
}

export default Nav;