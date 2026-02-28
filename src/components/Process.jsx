import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We start by deeply understanding your business, goals, and challenges. Together we define the roadmap for success.",
    color: "bg-trelet-green",
  },
  {
    step: "02",
    title: "Design & Planning",
    desc: "Our team creates detailed designs and project plans, ensuring every stakeholder is aligned before development begins.",
    color: "bg-trelet-black",
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "We build iteratively with regular demos and feedback cycles, keeping you in control while we deliver fast.",
    color: "bg-trelet-green",
  },
  {
    step: "04",
    title: "Launch & Growth",
    desc: "We deploy, optimize, and provide ongoing support to ensure your solution performs flawlessly and scales smoothly.",
    color: "bg-trelet-black",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-trelet-gray-light/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-trelet-green">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl font-bold text-trelet-black sm:text-4xl lg:text-[2.75rem]">
            A Proven Path to Success
          </h2>
          <p className="mt-4 text-lg text-trelet-gray">
            Our streamlined, transparent process ensures quality delivery — every
            single time.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Connector line (desktop) */}
          <div className="absolute top-24 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-trelet-green/20 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="group relative text-center"
              >
                {/* Step number */}
                <div className="relative mx-auto mb-6">
                  <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${s.color} text-xl font-bold text-white shadow-lg transition-transform group-hover:scale-105`}>
                    {s.step}
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-bold text-trelet-black">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-trelet-gray">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
