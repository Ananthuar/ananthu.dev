import { PERSONAL_DATA } from "../constants/data";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Briefcase, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section className="relative py-32 overflow-hidden border-t border-white/5">
            {/* Background soft glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[500px] bg-accent/20 rounded-[100%] blur-[120px] opacity-30 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        Let’s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">impactful</span> together.
                    </h2>
                    <p className="text-xl text-zinc-400 font-light mb-12 max-w-xl mx-auto">
                        Currently open for collaborations and engineering roles.
                    </p>

                    <a
                        href={`mailto:${PERSONAL_DATA.contact.email}`}
                        className="group relative inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-medium text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10">Get in touch</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-24 flex items-center justify-center gap-8"
                >
                    <a href={`https://${PERSONAL_DATA.contact.github}`} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors p-2 flex items-center gap-2">
                        <Code2 className="w-6 h-6" />
                    </a>
                    <a href={`https://${PERSONAL_DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors p-2 flex items-center gap-2">
                        <Briefcase className="w-6 h-6" />
                    </a>
                    <a href={`mailto:${PERSONAL_DATA.contact.email}`} className="text-zinc-500 hover:text-white transition-colors p-2 flex items-center gap-2">
                        <Mail className="w-6 h-6" />
                    </a>
                </motion.div>

                <div className="mt-12 text-sm text-zinc-600 tracking-wide">
                    © {new Date().getFullYear()} {PERSONAL_DATA.name}. All rights reserved.
                </div>
            </div>
        </section>
    );
}
