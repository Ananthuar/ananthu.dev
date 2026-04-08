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
                    <h4 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {project.title}
                    </h4>
                    <p className="text-xl text-zinc-400 font-light mb-8 max-w-md leading-relaxed">
                        {project.subtitle}
                    </p>

                    <div className="flex gap-3 flex-wrap">
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
                </div>

                {/* Abstract Visual representation instead of mockups/placeholders */}
                <div className={cn(
                    "hidden md:flex h-[300px] w-full rounded-2xl border bg-black/50 backdrop-blur-md items-center justify-center relative overflow-hidden transition-all duration-700 group-hover:scale-[1.02]",
                    project.border,
                    !isEven && "md:col-start-1 md:row-start-1"
                )}>
                    <div className={cn(
                        "absolute w-[200%] h-[200%] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-spin-slow",
                        project.color,
                        "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"
                    )} />
                    <div className="z-10 group-hover:scale-110 transition-transform duration-700 font-bold text-8xl text-white/10 select-none">
                        {project.title.substring(0, 2).toUpperCase()}
                    </div>
                </div>

            </div>
        </motion.div>
    );
}
