import { PERSONAL_DATA } from "../constants/data";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Background soft glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

            <motion.div
                style={{ y: y1, opacity }}
                className="z-10 flex flex-col items-center text-center px-6"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6 relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[2px]"
                    style={{
                        background: "linear-gradient(135deg, rgba(167,139,250,0.5), rgba(255,255,255,0.05), rgba(167,139,250,0.3))"
                    }}
                >
                    {/* Floating profile photo */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full rounded-full bg-zinc-900 overflow-hidden"
                    >
                        {PERSONAL_DATA.profilePhoto ? (
                            <img
                                src={PERSONAL_DATA.profilePhoto}
                                alt={PERSONAL_DATA.name}
                                className="w-full h-full object-cover object-center"
                                onError={(e) => {
                                    e.target.style.display = "none";
                                    e.target.nextSibling.style.display = "flex";
                                }}
                            />
                        ) : null}
                        {/* Fallback initial */}
                        <div
                            className="w-full h-full bg-gradient-to-tr from-accent/40 to-zinc-800 items-center justify-center"
                            style={{ display: PERSONAL_DATA.profilePhoto ? "none" : "flex" }}
                        >
                            <span className="text-4xl text-white/60">
                                {PERSONAL_DATA.name?.charAt(0) ?? "A"}
                            </span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4"
                >
                    {PERSONAL_DATA.name}
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl text-zinc-400 font-medium tracking-wide mb-8"
                >
                    {PERSONAL_DATA.title}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="glass px-6 py-3 rounded-full text-sm md:text-base text-zinc-300 font-light tracking-wide"
                >
                    {PERSONAL_DATA.tagline}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent"
                />
            </motion.div>
        </section>
    );
}
