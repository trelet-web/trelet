import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";

const values = [
  {
    title: "Client-Centric Approach",
    desc: "Your goals drive every decision we make. We listen, strategize, and execute with your success at the center.",
  },
  {
    title: "Innovation at Core",
    desc: "We stay ahead of industry trends to bring you solutions that are future-ready and competitively superior.",
  },
  {
    title: "End-to-End Delivery",
    desc: "From discovery to deployment and beyond, we own the entire lifecycle so you can focus on running your business.",
  },
  {
    title: "Transparent Partnership",
    desc: "Regular updates, clear timelines, and honest communication — you always know where your project stands.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-trelet-green">
              About Trelet
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-trelet-black sm:text-4xl lg:text-[2.75rem]">
              We Help Businesses{" "}
              <span className="text-trelet-green">Succeed</span> Through
              Technology
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-trelet-gray">
              Trelet is a full-service IT solutions company that partners with
              businesses of all sizes — from fast-growing startups to established
              enterprises. We don&apos;t just build software; we build
              long-term partnerships that drive measurable business outcomes.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-trelet-gray">
              With a team of 50+ skilled professionals across engineering,
              design, and strategy, we bring together the right expertise to
              tackle your toughest challenges.
            </p>

            {/* Key metrics */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { val: "150+", label: "Projects" },
                { val: "12+", label: "Countries" },
                { val: "50+", label: "Team Members" },
              ].map((m) => (
                <div key={m.label} className="border-l-2 border-trelet-green/30 pl-4">
                  <div className="text-2xl font-bold text-trelet-black">{m.val}</div>
                  <div className="text-sm text-trelet-gray">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="group rounded-2xl border border-trelet-gray-medium/50 bg-white p-6 transition-all hover:border-trelet-green/20 hover:shadow-lg hover:shadow-trelet-green/[0.04]"
              >
                <div className="flex gap-4">
                  <HiOutlineCheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-trelet-green" />
                  <div>
                    <h3 className="text-lg font-bold text-trelet-black">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-trelet-gray">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
