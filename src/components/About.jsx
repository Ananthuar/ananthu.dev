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
            <div className="w-full md:w-1/3">
                <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-4">
                    <span className="w-8 h-px bg-zinc-700"></span>
                    The Narrative
                </h3>
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
