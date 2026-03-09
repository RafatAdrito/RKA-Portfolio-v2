import Reveal from "../wrappers/Reveal.jsx";

import React from 'react'

const LinkedInIcon = () => {
    return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#0a66c2" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 0 1-1.98-1.98 1.98 1.98 0 0 1 1.98-1.98 1.98 1.98 0 0 1 1.98 1.98 1.98 1.98 0 0 1-1.98 1.98zm1.957 13.019H3.379V9h3.915v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    )
}

const GitHubIcon = ({dark}) => {
    return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill={dark ? "#ffffff" : "#24292e"} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
    )
}


const Contact = ({dark}) => {
    const SOCIAL_LINKS = [
        {
            label: "LinkedIn",
            handle: "@rkadreto",
            description: "Let's connect professionally",
            href: "https://www.linkedin.com/in/rkadreto",
            color: "#0a66c2",
            hoverBg: "hover:bg-blue-600",
        },
        {
            label: "GitHub",
            handle: "@RafatAdrito",
            description: "See what I've been building",
            href: "https://github.com/RafatAdrito",
            color: "#6e40c9",
            hoverBg: "hover:bg-violet-600",
        },
    ];
    return (
        <section
            id="contact"
            className={`py-24 px-6 ${dark ? "bg-linear-to-br from-slate-950 to-blue-950" : "bg-linear-to-br from-blue-50 to-white"}`}
        >
            <div className="max-w-xl mx-auto">
                <Reveal>
                    <p className={`text-sm font-semibold tracking-widest uppercase mb-2 ${dark ? "text-blue-400" : "text-blue-500"}`}>
                        Let's Talk
                    </p>
                    <h2 className={`text-4xl font-bold mb-3 ${dark ? "text-white" : "text-slate-900"}`}>
                        Contact Me
                    </h2>
                    <p className={`mb-10 text-base ${dark ? "text-slate-400" : "text-slate-600"}`}>
                        Pick your preferred way to reach out — I'm always happy to chat.
                    </p>
                </Reveal>

                <div className="flex flex-col gap-4">
                    {SOCIAL_LINKS.map((s, i) => (
                        <Reveal key={s.label} delay={i * 0.12}>
                            <a
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                                    dark
                                        ? "bg-slate-800/50 border-slate-700 hover:border-slate-500 hover:shadow-black/30"
                                        : "bg-blue-50 border-slate-200 hover:border-slate-300 hover:shadow-slate-200"
                                }`}
                            >
                                {/* Icon circle */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                                    style={{ background: `${s.color}20`, border: `1.5px solid ${s.color}40` }}
                                >
                                    {s.label === "LinkedIn" && <LinkedInIcon />}
                                    {s.label === "GitHub" && <GitHubIcon dark={dark} />}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p className={`text-sm font-bold ${dark ? "text-white" : "text-slate-900"}`}>
                                        {s.label}
                                    </p>
                                    <p className={`text-xs mt-0.5 truncate ${dark ? "text-slate-400" : "text-slate-500"}`}>
                                        {s.handle}
                                    </p>
                                    <p className={`text-xs mt-1 ${dark ? "text-slate-500" : "text-slate-900"}`}>
                                        {s.description}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <span
                                    className="text-sm font-bold transition-all duration-300 group-hover:translate-x-1 shrink-0"
                                    style={{ color: s.color }}
                                >
                                    →
                                </span>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Contact
