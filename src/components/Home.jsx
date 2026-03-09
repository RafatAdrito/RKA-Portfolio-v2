import React from 'react'

const Home = ({dark}) => {
    return (
        <section
            id="home"
            className={`min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden ${
                dark
                    ? "bg-linear-to-br from-slate-950 via-slate-900 to-blue-950"
                    : "bg-linear-to-br from-blue-50 via-white to-blue-100"
            }`}
        >
            <div
                className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
            />
            <div
                className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle, #60a5fa, transparent)" }}
            />
            <div className="relative z-10 max-w-2xl">
                <p
                    className={`text-sm font-semibold tracking-widest uppercase mb-4 ${dark ? "text-blue-400" : "text-blue-500"}`}
                    style={{ animation: "fadeUp 0.6s ease forwards", opacity: 0, animationDelay: "0.1s" }}
                >
                    Full-Stack Developer
                </p>
                <h1
                    className={`text-5xl md:text-7xl font-extrabold leading-tight mb-5 ${dark ? "text-white" : "text-slate-900"}`}
                    style={{ animation: "fadeUp 0.6s ease forwards", opacity: 0, animationDelay: "0.25s" }}
                >
                    Hi, I'm <span className="text-blue-500">Rafat</span>.
                </h1>
                <p
                    className={`text-lg md:text-xl leading-relaxed mb-10 ${dark ? "text-slate-400" : "text-slate-600"}`}
                    style={{ animation: "fadeUp 0.6s ease forwards", opacity: 0, animationDelay: "0.4s" }}
                >
                    Full-stack developer specializing in building scalable web applications.
                </p>
            </div>
            <div className="absolute bottom-10 flex flex-col items-center gap-1 animate-bounce">
                <span className={`text-xs ${dark ? "text-slate-600" : "text-slate-400"}`}>scroll</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3v10M3 9l5 5 5-5" stroke={dark ? "#475569" : "#94a3b8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <style>{`
                    @keyframes fadeUp {
                      from { opacity: 0; transform: translateY(24px); }
                      to   { opacity: 1; transform: translateY(0); }
                    }
            `}</style>
        </section>
    )
}
export default Home
