import Reveal from "../wrappers/Reveal.jsx";

const Projects = ({dark}) => {
    const PROJECTS = [
        {
            title: "Farmpro: Farming Assistant Application",
            desc: "An IOT-based AI-driven Android app which recommends crop, fertilizer for specific nitrogen, phosphorus, and potassium values\n" +
                "in a field, along with potato plant disease detection and fertilizer amount calculation.",
            tags: ["Android App", "Flutter"]
        },
        {
            title: "TCB Goods Distribution System",
            desc: "A DBMS project which is implemented with Oracle and PHP.",
            tags: ["SQL", "Oracle", "PHP"]
        }
    ];

    return (
        <section id="projects" className={`py-24 px-6 ${dark ? "bg-slate-900" : "bg-white"}`}>
            <div className="max-w-5xl mx-auto">
                <Reveal>
                    <p className={`text-sm font-semibold tracking-widest uppercase mb-2 ${dark ? "text-blue-400" : "text-blue-500"}`}>
                        What I've Built
                    </p>
                    <h2 className={`text-4xl font-bold mb-12 ${dark ? "text-white" : "text-slate-900"}`}>
                        Projects
                    </h2>
                </Reveal>

                <div className="grid sm:grid-cols-2 gap-6">
                    {
                        PROJECTS.map((p, i) =>(
                            <Reveal key={p.title} delay={i * 0.1}>
                                <div
                                    className={`group rounded-2xl p-6 border h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                                        dark
                                            ? "bg-slate-800/50 border-slate-700 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-900/20"
                                            : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
                                    }`}
                                >
                                    <h3 className={`text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors ${dark ? "text-white" : "text-slate-900"}`}>
                                        {p.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed mb-5 flex-1 ${dark ? "text-slate-400" : "text-slate-600"}`}>
                                        {p.desc}
                                    </p>
                                    <div className="flex items-center justify-between flex-wrap gap-3">
                                        <div className="flex flex-wrap gap-2">
                                            {p.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                                                        dark ? "bg-blue-900/40 text-blue-300" : "bg-blue-100 text-blue-700"
                                                    }`}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Projects
