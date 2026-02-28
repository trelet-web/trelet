import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Results-Driven",
    desc: "We measure success by your business outcomes — not lines of code. Every project is anchored to clear KPIs and measurable goals.",
    stat: "150+",
    statLabel: "Successful Projects",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    desc: "Our solutions are architected to grow with your business. From MVP to enterprise scale, we build for the long term.",
    stat: "40%",
    statLabel: "Avg. Cost Reduction",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Agile methodology, transparent timelines, and disciplined execution. We hit deadlines consistently without compromising quality.",
    stat: "98%",
    statLabel: "On-Time Rate",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    desc: "We've delivered across healthcare, fintech, logistics, retail, and more — bringing proven domain knowledge to every engagement.",
    stat: "12+",
    statLabel: "Industries Served",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-trelet-green">
            Why Trelet
          </span>
          <h2 className="mt-4 text-3xl font-bold text-trelet-black sm:text-4xl lg:text-[2.75rem]">
            Why Leading Companies Choose Us
          </h2>
          <p className="mt-4 text-lg text-trelet-gray">
            We don&apos;t just deliver projects — we deliver competitive advantage.
            Here&apos;s what sets us apart.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-trelet-gray-medium/50 bg-white p-8 transition-all hover:border-trelet-green/20 hover:shadow-xl hover:shadow-trelet-green/[0.04]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-trelet-green/10 text-trelet-green transition-all group-hover:bg-trelet-green group-hover:text-white group-hover:shadow-lg group-hover:shadow-trelet-green/20">
                  <r.icon size={26} strokeWidth={1.5} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-trelet-black">{r.stat}</div>
                  <div className="text-xs text-trelet-gray">{r.statLabel}</div>
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-trelet-black">
                {r.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-trelet-gray">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
