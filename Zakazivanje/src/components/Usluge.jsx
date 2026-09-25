
import { Gem } from "lucide-react";

import beard from "../../assets/icons/beard.svg";
import hair from "../../assets/icons/hair.svg";
import razor from "../../assets/icons/razor.svg";
import scissors from "../../assets/icons/scissors.svg";

import "./Usluge.css";

function Usluge() {
    return (
             
            <section id="usluge" className="usluge">
                <h2 className="usluge-title">USLUGE</h2>

                <div className="usluge-grid">
                    <div className="usluga-card">
                        <img src={scissors} className="usluga-icon" alt="Šišanje" />
                        <h3>ŠIŠANJE</h3>
                        <p>Klasično i moderno šišanje po želji klijenta.</p>
                        <a href="/usluge" className="usluga-link">SAZNAJ VIŠE →</a>
                    </div>

                    <div className="usluga-card">
                        <img src={beard} className="usluga-icon" alt="Uređivanje brade" />
                        <h3>UREĐIVANJE BRADE</h3>
                        <p>Oblikovanje i stilizovanje brade uz tople peškire.</p>
                        <a href="/usluge" className="usluga-link">SAZNAJ VIŠE →</a>
                    </div>

                    <div className="usluga-card">
                        <img src={razor} className="usluga-icon" alt="Brijanje" />
                        <h3>BRIJANJE</h3>
                        <p>Klasično brijanje brijačem uz premium negu.</p>
                        <a href="/usluge" className="usluga-link">SAZNAJ VIŠE →</a>
                    </div>

                    <div className="usluga-card">
                        <img src={hair} className="usluga-icon" alt="Nega kose" />
                        <h3>NEGA KOSE</h3>
                        <p>Tretmani i nega za zdravu i jaku kosu.</p>
                        <a href="/usluge" className="usluga-link">SAZNAJ VIŠE →</a>
                    </div>

                    <div className="usluga-card">
                        <Gem className="usluga-icon" />
                        <h3>PAKETI</h3>
                        <p>Kombinuj usluge i uštedi uz naše pakete.</p>
                        <a href="/usluge" className="usluga-link">SAZNAJ VIŠE →</a>
                    </div>
                </div>
            </section>

  
    );
}

export default Usluge;