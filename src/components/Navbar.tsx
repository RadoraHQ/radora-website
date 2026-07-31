"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
type Props = {
  locale: "fa" | "en";
};

const content = {
  fa: {
    home: "خانه",
    services: "خدمات",
    portfolio: "نمونه‌کارها",
    contact: "تماس",
    cta: "شروع همکاری",
  },
  en: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    cta: "Get in touch",
  },
};

export default function Navbar({ locale }: Props) {
  const t = content[locale];
  const switchLocale = locale === "fa" ? "en" : "fa";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = ["services", "portfolio", "contact"];
      let current = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = section;
        }
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "home", label: t.home, href: `/${locale}` },
    { id: "services", label: t.services, href: "#services" },
    { id: "portfolio", label: t.portfolio, href: "#portfolio" },
    { id: "contact", label: t.contact, href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div
        className={`mx-auto mt-4 max-w-7xl px-4 transition-all duration-300 ${
          scrolled ? "max-w-6xl" : "max-w-7xl"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-[#0B1220]/80 px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "border-transparent bg-transparent px-2 py-2"
          }`}
        >
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="/logo-horizontal.png"
              alt="Radora"
              width={256}
              height={82}
              priority
              className="h-6 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`relative text-sm font-medium transition ${
                  active === item.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-blue-400"
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href={`/${switchLocale}`}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-gray-300 backdrop-blur transition-all duration-300 hover:border-blue-400/40 hover:text-blue-300"
            >
              {locale === "fa" ? "EN" : "FA"}
            </Link>

            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]"
            >
              {t.cta}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white md:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl px-4 md:hidden"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0B1220]/90 p-6 backdrop-blur-xl">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="mt-4 flex items-center gap-3">
                  <Link
                    href={`/${switchLocale}`}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300"
                  >
                    {locale === "fa" ? "EN" : "FA"}
                  </Link>

                  <a
                    href="#contact"
                    className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
                  >
                    {t.cta}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
