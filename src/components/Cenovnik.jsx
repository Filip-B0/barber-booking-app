

import { Gem } from "lucide-react";

import beard from "../../assets/icons/beard.svg";
import hair from "../../assets/icons/hair.svg";
import razor from "../../assets/icons/razor.svg";
import scissors from "../../assets/icons/scissors.svg";

import "./Cenovnik.css";

function Home() {
    return (
            
            <section id="cenovnik" className="cenovnik">
                <h2 className="cenovnik-title">CENOVNIK</h2>

                <div className="cenovnik-grid">
                    <div className="cenovnik-card">
                        <img src={scissors} className="usluga-icon" alt="Šišanje" />
                        <h3>ŠIŠANJE</h3>
                        <p className="cena">1.200 RSD</p>
                    </div>

                    <div className="cenovnik-card">
                        <img src={beard} className="usluga-icon" alt="Brada" />
                        <h3>BRADA</h3>
                        <p className="cena">800 RSD</p>
                    </div>

                    <div className="cenovnik-card">
                        <img src={razor} className="usluga-icon" alt="Brijanje" />
                        <h3>BRIJANJE</h3>
                        <p className="cena">1.000 RSD</p>
                    </div>

                    <div className="cenovnik-card">
                        <Gem className="usluga-icon" />
                        <h3>KOMPLETNA USLUGA</h3>
                        <p className="cena">2.500 RSD</p>
                        <p className="cena-desc">Šišanje + Brada + Brijanje</p>
                    </div>
                </div>

                <a href="/cenovnik" className="cenovnik-btn">POGLEDAJ CEO CENOVNIK →</a>
            </section>
    );
}

export default Home;