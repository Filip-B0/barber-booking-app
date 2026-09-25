
import hero from "../../assets/images/hero.webp";
import "./Hero.css";

function Hero() {
    return (

            <section id="hero" className="hero">
                <div className="hero-text">
                    <p className="hero-tag">PREMIUM BARBER EXPERIENCE</p>
                    <h1>STIL NIJE LUKSUZ</h1>
                    <h1 className="hero-tag">TO JE NAVIKA</h1>
                    <p className="hero-desc">Royal Cuts nije samo frizerski salon. Ovo je mesto gde se stil, kvalitet i tradicija spajaju.</p>
                    <div className="hero-buttons">
                        <button className="btn-primary">REZERVIŠI TERMIN</button>
                        <button className="btn-outline">POGLEDAJ USLUGE</button>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <img src={hero} alt="Barbershop" className="hero-img" />
                    <div className="fade-overlay"></div>
                </div>
            </section>

    );
}

export default Hero;