import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import './Footer.css';
import Logo from "../../assets/images/logo.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">            
                <div className="footer-brand">
                    <a href="/" className="logo-vracanje"> 
                    <div className="logo-text">
                    <img src= {Logo} className="footer-logo-img" />
                    <div className="logo-text-content">
                    <h3 className="footer-logo">ROYAL CUTS</h3>
                    <p className="footer-tagline">BARBER SHOP</p>
                    </div>
                    </div>
                    </a>
                    <p className="footer-desc">
                        Royal Cuts je više od frizerskog salona. Ovde stvaramo stil, samopouzdanje i iskustvo koje se pamti.
                    </p>
                </div>
                
                <div className="footer-links">
                    <h4>BRZI LINKOVI</h4>
                    <Link to="/">Početna</Link>
                    <Link to="/usluge">Usluge</Link>
                    <Link to="/cenovnik">Cenovnik</Link>
                    <Link to="/rezervacije">Rezervacije</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </div>

                <div className="footer-hours">
                    <h4>RADNO VREME</h4>
                    <div className="footer-hours-row">
                        <Clock size={15} />
                        <div>
                            <p>Ponedeljak - Petak</p>
                            <p className="footer-hours-time">09:00 - 20:00</p>
                        </div>
                    </div>
                    <div className="footer-hours-row">
                        <Clock size={15} />
                        <div>
                            <p>Subota</p>
                            <p className="footer-hours-time">09:00 - 18:00</p>
                        </div>
                    </div>
                    <div className="footer-hours-row">
                        <Clock size={15} />
                        <div>
                            <p>Nedelja</p>
                            <p className="footer-hours-time">Zatvoreno</p>
                        </div>
                    </div>
                </div>

                <div className="footer-contact">
                    <h4>KONTAKT</h4>
                    <div className="footer-contact-row">
                        <Phone size={15} />
                        <span>+381 60 123 45 67</span>
                    </div>
                    <div className="footer-contact-row">
                        <Mail size={15} />
                        <span>info@royalcuts.rs</span>
                    </div>
                    <div className="footer-contact-row">
                        <MapPin size={15} />
                        <span>Kralja Milana 12, 11000 Beograd, Srbija</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Royal Cuts Barber Shop. Sva prava zadržana.</p>
            </div>
        </footer>
    );
}

export default Footer;