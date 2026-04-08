import { PERSONAL_DATA } from "../constants/data";
import { motion } from "framer-motion";
import { Mail, Code2, Briefcase, MessageCircle, ArrowUpRight } from "lucide-react";

const links = [
    { label: "Email", icon: Mail, description: "Professional enquiries", getHref: () => `mailto:${PERSONAL_DATA.contact.email}`, getValue: () => PERSONAL_DATA.contact.email },
    { label: "GitHub", icon: Code2, description: "Browse my open-source work", getHref: () => PERSONAL_DATA.contact.github, getValue: () => "github.com/Ananthuar" },
    { label: "LinkedIn", icon: Briefcase, description: "Professional profile", getHref: () => PERSONAL_DATA.contact.linkedin, getValue: () => "linkedin.com/in/ananthuar03" },
    { label: "WhatsApp", icon: MessageCircle, description: "Quick responses guaranteed", getHref: () => PERSONAL_DATA.contact.whatsapp, getValue: () => "Message me directly" },
];

export default function Contact() {
    return (
        <section className="relative py-32 overflow-hidden border-t border-white/5">
            {/* Background soft glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[500px] bg-accent/20 rounded-[100%] blur-[120px] opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-4">
                        <span className="w-8 h-px bg-zinc-700" />
                        Get In Touch
                    </h3>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                        Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">impactful</span>
                    </h2>
                    <p className="text-xl text-zinc-400 font-light max-w-xl">
                        Open to collaborations, internships, research discussions, and interesting conversations.
                    </p>
                </motion.div>

                {/* Contact cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                    {links.map((link, i) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={i}
                                href={link.getHref()}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                className="group flex items-start gap-5 p-6 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300 cursor-pointer"
                            >
                                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                                    <Icon size={20} className="text-zinc-400 group-hover:text-accent transition-colors duration-300" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                        <span className="text-xs uppercase tracking-widest text-zinc-500">{link.label}</span>
                                        <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-accent transition-colors duration-300 flex-shrink-0" />
                                    </div>
                                    <p className="text-white font-medium truncate">{link.getValue()}</p>
                                    <p className="text-sm text-zinc-500 mt-0.5">{link.description}</p>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                {/* Footer line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-center text-sm text-zinc-600 tracking-wide"
                >
                    © {new Date().getFullYear()} {PERSONAL_DATA.name} · Built with React & Framer Motion
                </motion.p>
            </div>
        </section>
    );
}
