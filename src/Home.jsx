
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./components/Hero";
import Usluge from "./components/usluge";
import Cenovnik from "./components/Cenovnik";
import Galerija from "./components/Galerija";
import Rezervisi from "./components/Rezervisi";

function Home() {
    const location = useLocation();

    useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;

    let attempts = 0;
    const maxAttempts = 50;

   const tryScroll = () => {
    const el = document.getElementById(id);
    const nav = document.querySelector(".n");

    if (el && nav) {
        const elRect = el.getBoundingClientRect();
        const elPosition = elRect.top + window.scrollY;

        const navHeight = nav.getBoundingClientRect().height; // STVARNA visina, ne 64
        const isMobile = window.innerWidth <= 768;

        let targetPosition;

        if (isMobile) {
            targetPosition = elPosition - navHeight - 10; // +10px razmak radi sigurnosti
        } else {
            const elHeight = elRect.height;
            const viewportHeight = window.innerHeight;
            targetPosition = elPosition - (viewportHeight - elHeight) / 2;
        }

        window.scrollTo({ top: targetPosition, behavior: "auto" });
        window.history.replaceState({}, document.title);
    } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 20);
    }
};

    tryScroll();
}, [location.state]);

    return (
        <>
        <Hero />
        <Usluge />
        <Cenovnik />
        <Galerija />
        <Rezervisi />

            
        </>
    );
}

export default Home;