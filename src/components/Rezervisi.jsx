import calendar from "../../assets/icons/calendar.svg";
import './Rezervisi.css';

function RezervisiCTA() {
    return (
        <section className="rezervisi-cta">
            <div className="rezervisi-cta-left">
                <img src={calendar} className="rezervisi-cta-icon" alt="Calendar" />
                <div>
                    <h3>Tvoj stil. Tvoje vreme. Naš prioritet.</h3>
                    <p>Izaberi datum i vreme koje ti odgovara i prepusti se profesionalcima.</p>
                </div>
            </div>

            <a href="/rezervacije" className="rezervisi-cta-btn">
                REZERVIŠI TERMIN →
            </a>
        </section>
    );
}

export default RezervisiCTA;