import { useState } from 'react'
import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    const [dark, setDark] = useState(true);
    return (
        <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <Navbar dark={dark} toggleDark={() => setDark(!dark)} />
            <Home dark={dark} />
            <About dark={dark} />
            <Skills dark={dark} />
            <Projects dark={dark} />
            <Contact dark={dark} />
            <Footer dark={dark} />
        </div>
    )
}
export default App
