import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const categories = ["All", "Software", "Mobile", "Cloud", "AI"];

const projects = [
  {
    title: "FinEdge Banking Platform",
    category: "Software",
    desc: "Modernized digital banking for 500K+ users with real-time analytics, reducing operational costs by 35%.",
    impact: "35% cost reduction",
    industry: "Financial Services",
    color: "from-blue-50 to-indigo-50",
  },
  {
    title: "MediTrack Health App",
    category: "Mobile",
    desc: "Cross-platform health monitoring app serving 50K+ daily active users with HIPAA-compliant data handling.",
    impact: "50K+ daily users",
    industry: "Healthcare",
    color: "from-rose-50 to-pink-50",
  },
  {
    title: "CloudSync Enterprise",
    category: "Cloud",
    desc: "Multi-cloud orchestration platform that reduced infrastructure costs by 40% while improving uptime to 99.99%.",
    impact: "40% infra savings",
    industry: "Technology",
    color: "from-cyan-50 to-teal-50",
  },
  {
    title: "SmartPredict Analytics",
    category: "AI",
    desc: "AI-powered supply chain optimization engine that improved forecasting accuracy by 60%, saving $2M annually.",
    impact: "$2M annual savings",
    industry: "Logistics",
    color: "from-violet-50 to-purple-50",
  },
  {
    title: "RetailPulse Commerce",
    category: "Software",
    desc: "Headless e-commerce platform handling 1M+ monthly transactions with 99.9% uptime and 2s page loads.",
    impact: "1M+ transactions/mo",
    industry: "Retail",
    color: "from-amber-50 to-orange-50",
  },
  {
    title: "FleetAI Route Optimizer",
    category: "AI",
    desc: "ML-based logistics optimization that cut delivery times by 35% and fuel costs by 20% across 500+ vehicles.",
    impact: "35% faster delivery",
    industry: "Transportation",
    color: "from-emerald-50 to-green-50",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-trelet-green">
            Our Work
          </span>
          <h2 className="mt-4 text-3xl font-bold text-trelet-black sm:text-4xl lg:text-[2.75rem]">
            Case Studies That Prove Results
          </h2>
          <p className="mt-4 text-lg text-trelet-gray">
            Real projects. Real impact. See how we&apos;ve helped businesses
            across industries achieve their goals.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "bg-trelet-black text-white"
                  : "bg-trelet-gray-light text-trelet-gray hover:text-trelet-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-trelet-gray-medium/50 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.04]"
            >
              <div
                className={`relative flex h-44 items-end bg-gradient-to-br ${project.color} p-6`}
              >
                <div className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-trelet-dark opacity-0 backdrop-blur transition-all group-hover:opacity-100">
                  <HiArrowUpRight size={16} />
                </div>
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-trelet-dark backdrop-blur-sm">
                  {project.industry}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-trelet-black">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-trelet-gray">
                  {project.desc}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-trelet-green" />
                  <span className="text-sm font-semibold text-trelet-green">
                    {project.impact}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
