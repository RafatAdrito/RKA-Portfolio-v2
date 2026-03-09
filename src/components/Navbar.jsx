import {useEffect, useState} from 'react'

const Navbar = ({dark, toggleDark}) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({behavior: "smooth"});
        setMenuOpen(false);
    };

    const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];
    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? dark
                        ? "bg-slate-900/90 backdrop-blur shadow-md shadow-blue-900/20"
                        : "bg-white/90 backdrop-blur shadow-md shadow-blue-200/40"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <span
                    className={`text-xl font-bold tracking-tight cursor-pointer ${
                        dark ? "text-blue-400" : "text-blue-600"
                    }`}
                    onClick={() => scrollTo("home")}
                >
                    {"<Rafat />"}
                </span>

                <ul className="hidden md:flex gap-8">
                    {NAV_LINKS.map((n) => (
                        <li key={n}>
                            <button
                                onClick={() => scrollTo(n === "About" ? "about" : n.toLowerCase())}
                                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                                    dark ? "text-slate-300" : "text-slate-600"
                                }`}
                            >
                                {n}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleDark}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                            dark
                                ? "bg-slate-800 text-yellow-300 hover:bg-slate-700"
                                : "bg-blue-50 text-slate-600 hover:bg-blue-100"
                        }`}
                    >
                        {dark ? "☀️" : "🌙"}
                    </button>

                    <button
                        className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className={`block w-5 h-0.5 transition-all ${dark ? "bg-slate-300" : "bg-slate-700"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-5 h-0.5 transition-all ${dark ? "bg-slate-300" : "bg-slate-700"} ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-5 h-0.5 transition-all ${dark ? "bg-slate-300" : "bg-slate-700"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className={`md:hidden px-6 pb-4 flex flex-col gap-3 ${dark ? "bg-slate-900" : "bg-white"}`}>
                    {NAV_LINKS.map((n) => (
                        <button
                            key={n}
                            onClick={() => scrollTo(n === "About" ? "about" : n.toLowerCase())}
                            className={`text-left text-sm font-medium py-1 ${dark ? "text-slate-300" : "text-slate-600"}`}
                        >
                            {n}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    )
}
export default Navbar
