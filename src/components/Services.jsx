import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor,
  Smartphone,
  Cloud,
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  Settings,
  Globe,
} from "lucide-react";
import { HiArrowUpRight } from "react-icons/hi2";

const services = [
  {
    icon: Monitor,
    title: "Custom Software",
    desc: "Bespoke applications built around your workflow — designed to automate processes, reduce costs, and scale with your business.",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    desc: "Intuitive mobile apps that keep your customers engaged and your teams connected, across every device.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    desc: "Reliable, scalable cloud architecture that grows with you. From migration to optimization, we keep your systems running at peak.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    desc: "Intelligent solutions that turn your data into decisions. Automate repetitive tasks and unlock insights that drive revenue.",
  },
  {
    icon: Globe,
    title: "Web Platforms",
    desc: "High-performance web applications and portals that deliver seamless experiences — fast, secure, and built to convert.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    desc: "Turn raw data into strategic advantage with dashboards, reporting tools, and business intelligence solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Protect your digital assets and customer data with comprehensive security assessments, monitoring, and compliance solutions.",
  },
  {
    icon: Settings,
    title: "IT Consulting",
    desc: "Strategic technology guidance to align your IT investments with business goals — maximizing ROI and competitive advantage.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative bg-trelet-gray-light/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-trelet-green">
            What We Deliver
          </span>
          <h2 className="mt-4 text-3xl font-bold text-trelet-black sm:text-4xl lg:text-[2.75rem]">
            Solutions That Drive Real Results
          </h2>
          <p className="mt-4 text-lg text-trelet-gray">
            We don&apos;t just write code — we solve business problems. Every solution
            we build is designed to create tangible impact on your bottom line.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-trelet-gray-medium/50 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-trelet-green/20 hover:shadow-xl hover:shadow-trelet-green/[0.04]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-trelet-green/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-trelet-green/10 text-trelet-green transition-all duration-300 group-hover:bg-trelet-green group-hover:text-white group-hover:shadow-lg group-hover:shadow-trelet-green/20">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-[17px] font-bold text-trelet-black">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-trelet-gray">
                  {service.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-trelet-green opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more <HiArrowUpRight size={13} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
