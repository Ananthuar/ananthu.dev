import { PERSONAL_DATA } from "../constants/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

    return (
        <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3 flex flex-col gap-8">
                <h3 className="text-sm uppercase tracking-widest text-zinc-500 flex items-center gap-4">
                    <span className="w-8 h-px bg-zinc-700"></span>
                    The Narrative
                </h3>

                {PERSONAL_DATA.profilePhoto && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-white/10 p-2 shadow-2xl"
                    >
                        <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 border border-white/5 relative">
                            <img
                                src={PERSONAL_DATA.profilePhoto}
                                alt={PERSONAL_DATA.name}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                            {/* Inner soft glow */}
                            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none" />
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="w-full md:w-2/3">
                <motion.p
                    style={{ opacity, y }}
                    className="text-2xl md:text-4xl font-normal leading-relaxed tracking-tight text-zinc-300"
                >
                    {PERSONAL_DATA.about}
                </motion.p>
            </div>
        </section>
    );
}
