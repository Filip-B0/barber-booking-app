
import { Link } from "react-router-dom";
import Karticaprijava from "./components/Karticaprijava";
import "./components/Karticaprijava.css";


function Login() {

    return (

        <Karticaprijava>

            <h1 className="naslov">Prijava</h1>

            <div className="linija" />

            <div className="tekst">
                <p>Dobrodosli nazad!</p>
                <p>Prijavite se na svoj nalog.</p>
            </div>

            <form className="login_forma">

                <div className="login_klasa">
                    <label htmlFor="email" className="t">
                        e-mail adresa
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

                    <Link
                        to="/zaboravljena-lozinka"
                        className="login-zabor"
                    >
                        Zaboravili ste lozinku?
                    </Link>

                </div>

                <button
                    type="submit"
                    className="login_button"
                >
                    Prijavi se
                </button>

            </form>

            <div className="login-odvajanje">

                <div className="poravnanje">

                    <span className="siva_linija" />

                    <p>ILI</p>

                    <span className="siva_linija" />

                </div>

                <p className="login-registracija">

                    Nemate nalog?

                    <Link
                        to="/registracija"
                        className="reg"
                    >
                        Registrujte se
                    </Link>

                </p>

            </div>

        </Karticaprijava>
    );
}

export default Login;