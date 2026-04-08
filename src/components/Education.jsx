import { PERSONAL_DATA } from "../constants/data";
import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

export default function Education() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-12"
            >
                <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-4">
                    <span className="w-8 h-px bg-zinc-700" />
                    Education
                </h3>
            </motion.div>

            <div className="flex flex-col gap-6">
                {PERSONAL_DATA.education.map((edu, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="group p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-500"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <GraduationCap size={20} className="text-zinc-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white leading-tight">{edu.degree}</h4>
                                    <p className="text-zinc-400 mt-1">{edu.institution}</p>
                                    <p className="text-zinc-600 text-sm mt-1 flex items-center gap-1">
                                        <MapPin size={12} />
                                        {edu.location}
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-mono tracking-widest text-zinc-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 h-fit whitespace-nowrap">
                                {edu.duration}
                            </span>
                        </div>
                        <p className="text-zinc-400 font-light leading-relaxed md:pl-15 pl-0 md:ml-15">
                            {edu.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
