import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from './Home'
import Usluge from './Usluge'
import Cenovnik from './Cenovnik'
import Kontakt from './Kontakt'
import Login from './Login'
import Registracija from './Registracija'

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App(){
    const location = useLocation();
    const hideLayout = location.pathname === "/login" || location.pathname === "/registracija";
    

    return(<>

        {!hideLayout && <Nav />}
        

    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/usluge" element={<Usluge />} />
        <Route path="/cenovnik" element={<Cenovnik />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registracija" element={<Registracija />} />

    </Routes>

    {!hideLayout && <Footer />}
    

    </>)
}

export default App;