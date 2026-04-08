import { PERSONAL_DATA } from "../constants/data";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-32">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
                Experience
            </h3>

            <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 md:pl-12">
                {PERSONAL_DATA.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative mb-12 last:mb-0"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full border-2 border-background bg-zinc-700 shadow-[0_0_0_4px_#0a0a0a] group-hover:bg-accent transition-colors duration-500" />

                        <span className="text-sm font-mono tracking-widest text-accent-light mb-2 block">
                            {exp.duration}
                        </span>
                        <h4 className="text-2xl font-bold text-white mb-1">
                            {exp.role}
                        </h4>
                        <h5 className="text-lg text-zinc-400 font-medium mb-4">
                            {exp.company}
                        </h5>
                        <p className="text-zinc-400 leading-relaxed max-w-2xl font-light">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
