import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const floatingCards = [
    {
        icon: "📈",
        title: "Revenue Growth",
        value: "+340%",
        delay: 0,
        position: "top-12 -right-4 lg:top-16 lg:-right-8",
        float: [-6, 6, -6],
    },
    {
        icon: "⚡",
        title: "Faster Delivery",
        value: "2× Speed",
        delay: 0.2,
        position: "-bottom-4 -left-4 lg:-bottom-6 lg:-left-8",
        float: [6, -6, 6],
    },
    {
        icon: "🛡️",
        title: "Uptime",
        value: "99.9%",
        delay: 0.4,
        position: "top-1/2 -left-4 lg:-left-10 -translate-y-1/2",
        float: [-4, 4, -4],
    },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-white"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 right-0 h-[700px] w-[700px] rounded-full bg-trelet-green/[0.04] blur-[100px]" />
                <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-trelet-green/[0.03] blur-[80px]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40 lg:pb-28">
                <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
                    {/* Left Content */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 inline-flex items-center gap-2 rounded-full border border-trelet-green/20 bg-trelet-green/5 px-4 py-1.5"
                        >
                            <span className="h-2 w-2 animate-pulse rounded-full bg-trelet-green" />
                            <span className="text-sm font-medium text-trelet-green">
                                Trusted by 50+ businesses worldwide
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-trelet-black sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
                        >
                            Technology That{" "}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-trelet-green to-trelet-green-dark bg-clip-text text-transparent">
                                    Transforms
                                </span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                    className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-trelet-green/30"
                                />
                            </span>{" "}
                            Your Business
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg leading-relaxed text-trelet-gray sm:text-xl"
                        >
                            We partner with ambitious companies to design, build, and scale
                            software solutions that solve real problems and unlock new
                            opportunities for growth.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
                        >
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-trelet-green px-8 py-4 text-base font-semibold text-white shadow-xl shadow-trelet-green/20 transition-all hover:bg-trelet-green-dark hover:shadow-trelet-green/30 active:scale-[0.97]"
                            >
                                Start Your Project
                                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="#portfolio"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-trelet-gray-medium px-8 py-4 text-base font-semibold text-trelet-dark transition-all hover:border-trelet-dark"
                            >
                                See Our Work
                            </a>
                        </motion.div>

                        {/* Stats row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-16 grid grid-cols-3 gap-6 border-t border-trelet-gray-medium/70 pt-8"
                        >
                            {[
                                { number: "150+", label: "Projects Delivered" },
                                { number: "8+", label: "Years of Excellence" },
                                { number: "99%", label: "Client Retention" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-2xl font-bold text-trelet-black sm:text-3xl">
                                        {stat.number}
                                    </div>
                                    <div className="mt-0.5 text-xs text-trelet-gray sm:text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right - Abstract visual (non-code, manager-friendly) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Abstract circles composition */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                                    className="absolute h-[90%] w-[90%] rounded-full border border-dashed border-trelet-green/15"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                                    className="absolute h-[70%] w-[70%] rounded-full border border-dashed border-trelet-gray-medium/40"
                                />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                                    className="absolute h-[50%] w-[50%] rounded-full border border-dashed border-trelet-green/10"
                                />

                                {/* Center logo */}
                                <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-2xl shadow-trelet-green/10 border border-trelet-gray-medium/30">
                                    <img
                                        src={`${import.meta.env.BASE_URL}trelet/trelet logo(withoutbar)-01.jpg`}
                                        alt="Trelet"
                                        className="h-16 w-16 rounded-lg object-contain"
                                    />
                                </div>
                            </div>

                            {/* Orbiting dots */}
                            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                <motion.div
                                    key={deg}
                                    animate={{ rotate: [deg, deg + 360] }}
                                    transition={{ repeat: Infinity, duration: 40 + i * 5, ease: "linear" }}
                                    className="absolute inset-0"
                                    style={{ transformOrigin: "center" }}
                                >
                                    <div
                                        className="absolute h-3 w-3 rounded-full bg-trelet-green/20"
                                        style={{ top: "5%", left: "50%", transform: "translateX(-50%)" }}
                                    />
                                </motion.div>
                            ))}

                            {/* Floating result cards */}
                            {floatingCards.map((card) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1, y: card.float }}
                                    transition={{
                                        opacity: { duration: 0.5, delay: 0.6 + card.delay },
                                        scale: { duration: 0.5, delay: 0.6 + card.delay },
                                        y: { repeat: Infinity, duration: 4 + card.delay * 2, ease: "easeInOut" },
                                    }}
                                    className={`absolute ${card.position} z-10 rounded-2xl border border-trelet-gray-medium/40 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-sm`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{card.icon}</span>
                                        <div>
                                            <div className="text-[11px] font-medium text-trelet-gray">
                                                {card.title}
                                            </div>
                                            <div className="text-sm font-bold text-trelet-black">
                                                {card.value}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
            >
                <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-trelet-gray-medium/60 p-1.5">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="h-1.5 w-1 rounded-full bg-trelet-green"
                    />
                </div>
            </motion.div>
        </section>
    );
}
