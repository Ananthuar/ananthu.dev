import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Hide loader after 1.8s
        const t = setTimeout(() => setShow(false), 1800);
        return () => clearTimeout(t);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950"
                >
                    {/* Monogram */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center gap-6"
                    >
                        {/* A monogram circle */}
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center"
                            style={{
                                background: "linear-gradient(135deg, rgba(167,139,250,0.4), rgba(255,255,255,0.04), rgba(167,139,250,0.2))",
                                border: "1.5px solid rgba(167,139,250,0.35)"
                            }}
                        >
                            <span className="text-3xl font-bold text-white/90 select-none">A</span>
                        </div>

                        {/* Animated loading bar */}
                        <div className="w-32 h-px bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
                                className="w-full h-full bg-gradient-to-r from-transparent via-accent to-transparent"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
