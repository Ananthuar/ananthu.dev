import { PERSONAL_DATA } from "../constants/data";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-16">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    Core Proficiencies
                </h3>
                <p className="text-xl text-zinc-400 font-light">
                    The structural backbones of my algorithmic solutions.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {PERSONAL_DATA.skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.05,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative flex items-center gap-4 p-4 md:p-6 rounded-2xl glass-card overflow-hidden cursor-default transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-accent/20 transition-all duration-300">
                                <Icon size={20} strokeWidth={1.5} />
                            </div>

                            <span className="relative z-10 text-zinc-300 font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                                {skill.name}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
