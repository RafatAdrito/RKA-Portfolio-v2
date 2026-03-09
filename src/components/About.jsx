import Reveal from "../wrappers/Reveal.jsx";

const About = ({dark}) => {
    const highlights = [
        { icon: "🎓", label: "B.Sc. in Computer Science, 2023" },
        { icon: "💼", label: "1.5+ years shipping production React apps" },
        { icon: "🌏", label: "Based in Dhaka, Bangladesh" },
        { icon: "🎯", label: "Currently exploring Next.js & TypeScript" },
    ];
    return (
        <section id="about" className={`py-24 px-6 ${dark ? "bg-slate-900" : "bg-white"}`}>
            <div className="max-w-5xl mx-auto">
                <Reveal>
                    <p className={`text-sm font-semibold tracking-widest uppercase mb-2 ${dark ? "text-blue-400" : "text-blue-500"}`}>
                        Who I Am
                    </p>
                    <h2 className={`text-4xl font-bold mb-12 ${dark ? "text-white" : "text-slate-900"}`}>
                        About Me
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Reveal delay={0.1}>
                        <div className="flex justify-center md:justify-start">
                            <div
                                className="w-60 h-60 rounded-3xl flex items-center justify-center text-7xl relative"
                                style={{
                                    background: dark
                                        ? "linear-gradient(135deg, #1e3a5f, #1d4ed8)"
                                        : "linear-gradient(135deg, #bfdbfe, #3b82f6)",
                                    boxShadow: "0 20px 60px rgba(59,130,246,0.25)",
                                }}
                            >
                                👨‍💻
                                <div
                                    className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                                    style={{ background: dark ? "#1d4ed8" : "#3b82f6" }}
                                >
                                    ✨
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <div>
                        <Reveal delay={0.15}>
                            <p className={`text-base leading-relaxed mb-4 ${dark ? "text-slate-400" : "text-slate-600"}`}>
                                With 1+ years of hands-on experience in managing and optimizing ERP systems to improve business processes and efficiency, skilled in JavaScript, AngularJS, C#, .NET, and SQL, I bridge the gap between technical solutions and operational needs. I enjoy solving complex problems, developing user-friendly features. With a solid foundation in both front-end and back-end technologies, I strive to deliver solutions that are reliable, scalable, and aligned with organizational goals. Always eager to learn and adapt to new technologies, I bring a proactive and collaborative approach to every project.
                            </p>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 gap-3">
                            {highlights.map((h, i) => (
                                <Reveal key={i} delay={0.2 + i * 0.08}>
                                    <div className={`rounded-2xl p-4 flex items-start gap-3 ${dark ? "bg-slate-800/60" : "bg-blue-50"}`}>
                                        <span className="text-lg">{h.icon}</span>
                                        <span className={`text-sm leading-snug ${dark ? "text-slate-300" : "text-slate-700"}`}>{h.label}</span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
