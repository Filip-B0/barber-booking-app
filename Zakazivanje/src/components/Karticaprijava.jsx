import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

function Karticaprijava({ children }) {

    return (
        <section className="rezervacije">

            <Link to="/" className="Logo_wrapper">
                <img src={Logo} className="Logo" />
            </Link>

            <div className="login_page">
                <div className="login_card">

                    {children}

                </div>
            </div>

        </section>
    );
}

export default Karticaprijava;