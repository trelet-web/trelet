import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@trelet.com",
    href: "mailto:hello@trelet.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Global Offices",
    href: "#",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="relative bg-trelet-gray-light/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-trelet-green">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-bold text-trelet-black sm:text-4xl lg:text-[2.75rem]">
            Let&apos;s Start a Conversation
          </h2>
          <p className="mt-4 text-lg text-trelet-gray">
            Have a project in mind? Tell us about it and we&apos;ll get back
            to you within 24 hours.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-5 lg:col-span-2"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="group flex items-start gap-4 rounded-2xl border border-trelet-gray-medium/50 bg-white p-5 transition-all hover:border-trelet-green/20 hover:shadow-lg hover:shadow-trelet-green/[0.04]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-trelet-green/10 text-trelet-green transition-colors group-hover:bg-trelet-green group-hover:text-white">
                  <info.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm text-trelet-gray">{info.label}</div>
                  <div className="mt-0.5 font-semibold text-trelet-black">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}

            <div className="rounded-2xl border border-trelet-gray-medium/50 bg-white p-5">
              <p className="text-sm leading-relaxed text-trelet-gray">
                <span className="font-semibold text-trelet-dark">
                  Average response time:
                </span>{" "}
                We typically respond within 2-4 hours during business days.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-5 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-trelet-dark"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-trelet-gray-medium/70 bg-white px-4 py-3.5 text-trelet-dark outline-none transition-all placeholder:text-trelet-gray/40 focus:border-trelet-green focus:ring-2 focus:ring-trelet-green/15"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-trelet-dark"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-trelet-gray-medium/70 bg-white px-4 py-3.5 text-trelet-dark outline-none transition-all placeholder:text-trelet-gray/40 focus:border-trelet-green focus:ring-2 focus:ring-trelet-green/15"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-1.5 block text-sm font-medium text-trelet-dark"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-xl border border-trelet-gray-medium/70 bg-white px-4 py-3.5 text-trelet-dark outline-none transition-all placeholder:text-trelet-gray/40 focus:border-trelet-green focus:ring-2 focus:ring-trelet-green/15"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-trelet-dark"
              >
                Tell Us About Your Project
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-trelet-gray-medium/70 bg-white px-4 py-3.5 text-trelet-dark outline-none transition-all placeholder:text-trelet-gray/40 focus:border-trelet-green focus:ring-2 focus:ring-trelet-green/15"
                placeholder="Describe your project goals, timeline, and any specific requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-trelet-green px-8 py-4 text-base font-semibold text-white shadow-lg shadow-trelet-green/20 transition-all hover:bg-trelet-green-dark hover:shadow-trelet-green/30 active:scale-[0.98] sm:w-auto"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
