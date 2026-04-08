import { PERSONAL_DATA } from "../constants/data";
import { motion } from "framer-motion";
import { Trophy, ExternalLink } from "lucide-react";

export default function Recognition() {
    if (!PERSONAL_DATA.recognition?.length) return null;

    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-12"
            >
                <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-4">
                    <span className="w-8 h-px bg-zinc-700" />
                    Recognition
                </h3>
            </motion.div>

            <div className="flex flex-col gap-4">
                {PERSONAL_DATA.recognition.map((item, i) => (
                    <motion.a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="group flex items-start gap-5 p-6 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-300"
                    >
                        <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Trophy size={18} className="text-amber-400" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between gap-2 mb-1">
                                <h4 className="text-white font-semibold group-hover:text-amber-200 transition-colors duration-300">{item.title}</h4>
                                <ExternalLink size={14} className="text-zinc-600 group-hover:text-amber-400 transition-colors duration-300 flex-shrink-0" />
                            </div>
                            <p className="text-zinc-400 font-light text-sm leading-relaxed">{item.subtitle}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
