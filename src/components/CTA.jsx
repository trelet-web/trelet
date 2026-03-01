import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiArrowRight } from "react-icons/hi";

export default function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="relative bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl bg-trelet-black px-8 py-16 sm:px-16 sm:py-20 lg:py-24"
                >
                    {/* Decorative */}
                    <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-trelet-green/10 blur-[80px]" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-trelet-green/5 blur-[80px]" />

                    <div className="relative mx-auto max-w-2xl text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
                        >
                            Ready to Transform{" "}
                            <span className="text-trelet-green">Your Business?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-5 text-lg text-white/50"
                        >
                            Let&apos;s discuss how Trelet can help you build the next
                            generation of your digital products. Free consultation, no
                            strings attached.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                        >
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-2 rounded-full bg-trelet-green px-8 py-4 text-base font-semibold text-white shadow-xl shadow-trelet-green/20 transition-all hover:bg-trelet-green-dark hover:shadow-trelet-green/30 active:scale-[0.97]"
                            >
                                Schedule a Free Call
                                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="mailto:hello@trelet.com"
                                className="inline-flex items-center rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white/80 transition-all hover:border-white/30 hover:text-white"
                            >
                                hello@trelet.com
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
