import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
    "Acme Corp",
    "TechVista",
    "Horizon Health",
    "NovaPay",
    "CloudFirst",
    "Zenith Retail",
    "Atlas Logistics",
    "Pinnacle Finance",
];

export default function TrustedBy() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="border-y border-trelet-gray-medium/50 bg-trelet-gray-light/50 py-14 lg:py-16" ref={ref}>
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-trelet-gray"
                >
                    Trusted by innovative companies worldwide
                </motion.p>

                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:gap-x-16">
                    {clients.map((client, i) => (
                        <motion.div
                            key={client}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                            className="text-base font-bold tracking-tight text-trelet-dark/20 transition-colors hover:text-trelet-dark/40 sm:text-lg"
                        >
                            {client}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
