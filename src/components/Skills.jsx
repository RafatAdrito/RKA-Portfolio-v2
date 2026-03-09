import useInView from "../hooks/useInView.js";
import Reveal from "../wrappers/Reveal.jsx";

const SkillBar = ({ level }) => {
    const [ref, inView] = useInView();
    return (
        <div
            ref={ref}
            style={{
                height: "100%",
                width: inView ? `${level}%` : "0%",
                background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
                borderRadius: "9999px",
                transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
            }}
        />
    )
}



const Skills = ({dark}) => {
    const SKILLS = [
        { name: "React", level: 88 },
        { name: "Angular", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "TypeScript", level: 70 },
        { name: "Git & GitHub", level: 78 },
        { name: "ASP.NET", level: 65 },
        { name: "SQL", level: 95 },
    ];
    return (
        <section
            id="skills"
            className={`py-24 px-6 ${dark ? "bg-linear-to-br from-slate-950 to-slate-900" : "bg-linear-to-br from-blue-50 to-white"}`}
        >
            <div className="max-w-3xl mx-auto">
                <Reveal>
                    <p className={`text-sm font-semibold tracking-widest uppercase mb-2 ${dark ? "text-blue-400" : "text-blue-500"}`}>
                        What I Know
                    </p>
                    <h2 className={`text-4xl font-bold mb-12 ${dark ? "text-white" : "text-slate-900"}`}>
                        Skills
                    </h2>
                </Reveal>

                <div className="flex flex-col gap-7">
                    {SKILLS.map((skill, i) => (
                        <Reveal key={skill.name} delay={i * 0.07}>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className={`text-sm font-semibold ${dark ? "text-slate-200" : "text-slate-800"}`}>{skill.name}</span>
                                    <span className={`text-sm ${dark ? "text-blue-400" : "text-blue-500"}`}>{skill.level}%</span>
                                </div>
                                <div className={`w-full h-2.5 rounded-full overflow-hidden ${dark ? "bg-slate-800" : "bg-blue-100"}`}>
                                    <SkillBar level={skill.level} />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.4}>
                    <div className="mt-14">
                        <p className={`text-sm font-semibold mb-5 ${dark ? "text-slate-400" : "text-slate-500"}`}>
                            Also familiar with:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["REST APIs", "Docker", "Python", "Django", "FastAPI"].map((t) => (
                                <span
                                    key={t}
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                                        dark ? "border-slate-700 text-slate-400 bg-slate-800/50" : "border-blue-200 text-blue-700 bg-blue-50"
                                    }`}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
export default Skills
