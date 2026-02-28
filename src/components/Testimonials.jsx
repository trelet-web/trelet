import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, FinEdge Solutions",
    content:
      "Trelet transformed our legacy systems into a modern, scalable platform. Their team didn't just deliver software — they understood our business deeply and delivered a solution that directly impacted our bottom line. Project was on time, on budget, and exceeded expectations.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "James Cooper",
    role: "Founder & CEO, RetailPulse",
    content:
      "Working with Trelet was a game-changer for our e-commerce business. They built a platform that handles millions of transactions seamlessly. What impressed me most was their proactive communication and genuine care for our success.",
    rating: 5,
    avatar: "JC",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Director of Innovation, MediTrack Health",
    content:
      "The health monitoring app Trelet developed has over 50,000 daily active users. Their understanding of healthcare compliance, user experience, and scalability made them the perfect partner. I recommend them without hesitation.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Mark Rodriguez",
    role: "VP Operations, FleetAI Logistics",
    content:
      "Trelet built an optimization system that reduced our delivery times by 35%. They took the time to understand our operational challenges and delivered a solution that our entire team adopted seamlessly. Truly exceptional partner.",
    rating: 5,
    avatar: "MR",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="relative bg-trelet-black py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle decorative orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-trelet-green/[0.04] blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-trelet-green/[0.03] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-trelet-green">
            Client Stories
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.04] px-8 py-10 backdrop-blur-sm sm:px-12 sm:py-14">
            {/* Quote */}
            <div className="absolute -top-5 left-8 text-6xl font-serif text-trelet-green/20 select-none">
              &ldquo;
            </div>

            {/* Stars */}
            <div className="mb-6 flex gap-0.5">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, i) => (
                  <HiStar key={i} className="h-5 w-5 text-yellow-400" />
                )
              )}
            </div>

            <motion.p
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-lg leading-relaxed text-white/75 sm:text-xl sm:leading-relaxed"
            >
              {testimonials[current].content}
            </motion.p>

            <motion.div
              key={`author-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-trelet-green text-sm font-bold text-white">
                {testimonials[current].avatar}
              </div>
              <div>
                <div className="font-semibold text-white">
                  {testimonials[current].name}
                </div>
                <div className="text-sm text-white/40">
                  {testimonials[current].role}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Nav */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-trelet-green/40 hover:text-white"
              aria-label="Previous"
            >
              <HiChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-trelet-green"
                      : "w-2 bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-trelet-green/40 hover:text-white"
              aria-label="Next"
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
