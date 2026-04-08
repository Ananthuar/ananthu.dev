import { PERSONAL_DATA } from "../constants/data";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export default function Projects() {
    return (
        <section className="py-32 bg-zinc-950/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
                <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                    Selected Works
                </h3>
                <p className="text-xl text-zinc-400 font-light">
                    A showcase of intelligent systems and engineering.
                </p>
            </div>

            <div className="flex flex-col gap-8 md:gap-16">
                {PERSONAL_DATA.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project, index }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-full h-auto min-h-[400px] md:min-h-[500px] border-y border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-700 overflow-hidden flex items-center"
        >
            {/* Background Soft Gradient */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 bg-gradient-to-br",
                project.color
            )} />

            <div className={cn(
                "max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                !isEven && "md:flex-row-reverse"
            )}>

                {/* Content Container */}
                <div className={cn(
                    "flex flex-col z-10 py-16",
                    !isEven && "md:col-start-2",
                    isEven && "md:col-start-1"
                )}>
                    <span className="text-sm font-mono tracking-widest text-zinc-500 mb-6">
                        0{index + 1}
                    </span>
                    <div className="flex items-center gap-4 mb-6">
                        <h4 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            {project.title}
                        </h4>
                        {project.status && (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-zinc-300 border border-white/10 backdrop-blur-md">
                                {project.status}
                            </span>
                        )}
                    </div>
                    <p className="text-xl text-zinc-400 font-light mb-8 max-w-md leading-relaxed">
                        {project.subtitle}
                    </p>

                    <div className="flex gap-3 flex-wrap mb-8">
                        {project.techStack.map((tech, i) => (
                            <span
                                key={i}
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-xs font-medium border bg-white/5 backdrop-blur-sm transition-colors",
                                    "group-hover:border-white/20 border-white/5 text-zinc-300"
                                )}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Project links */}
                    {(project.github || project.liveUrl) && (
                        <div className="flex gap-3 flex-wrap">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs text-zinc-400 hover:text-white hover:border-white/25 bg-white/5 hover:bg-white/10 transition-all duration-300"
                                >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                                    GitHub
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs text-zinc-400 hover:text-white hover:border-white/25 bg-white/5 hover:bg-white/10 transition-all duration-300"
                                >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                    Live Site
                                </a>
                            )}
                        </div>
                    )}
                </div>

                {/* Visual Panel: Phone mockup for mobile, wide image for web, abstract for no image */}
                <div className={cn(
                    "hidden md:flex h-[340px] w-full rounded-2xl border bg-black/50 backdrop-blur-md items-center justify-center relative overflow-hidden transition-all duration-700 group-hover:scale-[1.02]",
                    project.border,
                    !isEven && "md:col-start-1 md:row-start-1"
                )}>
                    {/* Subtle background glow always present */}
                    <div className={cn(
                        "absolute w-[200%] h-[200%] opacity-10 group-hover:opacity-20 transition-opacity duration-1000",
                        project.color,
                        "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"
                    )} />

                    {project.type === "mobile" ? (
                        /* Phone mockup frame */
                        <div className="relative z-10 flex items-end justify-center gap-4 h-full pb-2 pt-6">
                            {/* Main centered phone */}
                            <div className="relative h-[290px] w-[135px] rounded-[2rem] border-2 border-white/20 bg-zinc-900 shadow-2xl overflow-hidden flex-shrink-0 group-hover:scale-[1.03] transition-transform duration-700">
                                {/* Top notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-b-xl z-20" />
                                {/* Screen */}
                                <div className="absolute inset-[3px] rounded-[1.6rem] overflow-hidden bg-zinc-950">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div className={cn("w-full h-full items-center justify-center", project.image ? "hidden" : "flex")}>
                                        <span className="text-2xl font-bold text-white/10">{project.title.substring(0, 2).toUpperCase()}</span>
                                    </div>
                                </div>
                                {/* Home indicator */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/30 rounded-full z-20" />
                            </div>

                            {/* Second phone, slightly behind and offset */}
                            <div className="relative h-[250px] w-[115px] rounded-[1.8rem] border-2 border-white/10 bg-zinc-900/70 shadow-xl overflow-hidden flex-shrink-0 opacity-50 group-hover:opacity-75 transition-all duration-700 -translate-y-2">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-b-xl z-20" />
                                <div className="absolute inset-[3px] rounded-[1.4rem] overflow-hidden bg-zinc-950/80">
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-center scale-110 blur-[1px]"
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                    )}
                                </div>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/20 rounded-full z-20" />
                            </div>
                        </div>
                    ) : project.image ? (
                        /* Wide landscape image for web/desktop apps */
                        <div className="absolute inset-0 w-full h-full p-2 z-10">
                            <div className="relative w-full h-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center hidden">
                                    <span className="text-zinc-600 font-mono text-sm">Add image: {project.image}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Abstract fallback */
                        <div className="z-10 group-hover:scale-110 transition-transform duration-700 font-bold text-8xl text-white/10 select-none">
                            {project.title.substring(0, 2).toUpperCase()}
                        </div>
                    )}
                </div>

            </div>
        </motion.div>
    );
}
