import { motion } from "framer-motion";

export default function Identity() {
    return (
        <section className="min-h-[70vh] flex items-center justify-center py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl"
            >
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6">
                    I design and build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-purple-500">AI-powered solutions</span>{" "}
                    that solve real-world problems.
                </h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-px bg-gradient-to-r from-zinc-800 via-zinc-500 to-transparent w-3/4 mt-12 origin-left"
                />
            </motion.div>
        </section>
    );
}
