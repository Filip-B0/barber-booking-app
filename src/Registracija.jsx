import { Link } from "react-router-dom";
import Karticaprijava from "./components/Karticaprijava";

function Registracija() {

    return (

        <Karticaprijava>

            <h1 className="naslov">Registracija</h1>

            <div className="linija" />

            <div className="tekst">
                <p>Kreirajte svoj nalog!</p>
                <p>Popunite podatke za registraciju.</p>
            </div>

            <form className="login_forma">

                <div className="login_klasa">
                    <label htmlFor="ime" className="t">
                        Ime i prezime
                    </label>

                    <input
                        type="text"
                        id="ime"
                        name="ime"
                        placeholder="Unesite svoje ime i prezime"
                        required
                    />
                </div>

                <div className="login_klasa">
                    <label htmlFor="email" className="t">
                        e-mail 
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Unesite svoju e-mail adresu"
                        required
                    />
                </div>

                <div className="login_klasa">
                    <label htmlFor="telefon" className="t">
                        Broj telefona
                    </label>

                    <input
                        type="number"
                        id="telefon"
                        name="telefon"
                        placeholder="Unesite broj telefona"
                        required
                    />
                </div>

                <div className="login_klasa">
                    <label htmlFor="password" className="t">
                        Lozinka
                    </label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Unesite svoju lozinku"
                        required
                    />
                </div>

                <div className="login_klasa">
                    <label htmlFor="password2" className="t">
                        Potvrdite lozinku
                    </label>

                    <input
                        type="password"
                        id="password2"
                        name="password2"
                        placeholder="Ponovite svoju lozinku"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="login_button"
                >
                    Registruj se
                </button>

            </form>

            <div className="login-odvajanje">
            
                            <div className="poravnanje">
            
                                <span className="siva_linija" />
            
                                <p>ILI</p>
            
                                <span className="siva_linija" />
            
                            </div>
            
                            <p className="login-registracija">
            
                                Imate nalog?
            
                                <Link
                                    to="/login"
                                    className="reg"
                                >
                                    Ulogujte se
                                </Link>
            
                            </p>
            
                        </div>

        </Karticaprijava>
    );
}

export default Registracija;