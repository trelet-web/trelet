import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const footerLinks = {
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  Services: [
    { name: "Custom Software", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
    { name: "AI & Automation", href: "#services" },
    { name: "IT Consulting", href: "#services" },
  ],
  Resources: [
    { name: "Case Studies", href: "#portfolio" },
    { name: "Support", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaGithub, href: "https://github.com/Trelet", label: "GitHub" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-trelet-black" ref={ref}>
      <div className="h-px bg-gradient-to-r from-transparent via-trelet-green/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-5"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block">
              <img
                src={`${import.meta.env.BASE_URL}trelet/trelet logo-01.svg`}
                alt="Trelet"
                className="h-14 w-auto brightness-0 invert"
              />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
              Empowering businesses with technology that makes a real
              difference. From startups to enterprises, we build solutions
              that drive growth and lasting success.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] text-white/40 transition-all hover:border-trelet-green/30 hover:text-trelet-green"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 transition-colors hover:text-trelet-green"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Trelet. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/40 transition-all hover:border-trelet-green/30 hover:text-trelet-green"
            aria-label="Back to top"
          >
            <HiOutlineArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
