"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {
  locale: "fa" | "en";
};

const content = {
  fa: {
    description:
      "Radora استودیوی توسعه نرم‌افزار، طراحی وب‌سایت و راهکارهای هوش مصنوعی برای کسب‌وکارهای مدرن.",
    links: "دسترسی سریع",
    contact: "ارتباط",
    rights: "تمامی حقوق محفوظ است.",
  },
  en: {
    description:
      "Radora is a software engineering and AI studio building modern websites, digital products and intelligent automation solutions.",
    links: "Quick links",
    contact: "Contact",
    rights: "All rights reserved.",
  },
};

export default function Footer({ locale }: Props) {
  const t = content[locale];

  return (
    <footer className="relative border-t border-white/10 bg-[#070D18]">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <Image
              src="/logo-horizontal.png"
              alt="Radora"
              width={256}
              height={82}
              className="w-auto h-auto"
            />

            <p className="mt-5 max-w-sm leading-7 text-gray-400">
              {t.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">{t.links}</h3>

            <div className="mt-5 flex flex-col gap-3 text-gray-400">
              <a href="#services" className="transition hover:text-white">
                {locale === "fa" ? "خدمات" : "Services"}
              </a>

              <a href="#portfolio" className="transition hover:text-white">
                {locale === "fa" ? "نمونه‌کارها" : "Portfolio"}
              </a>

              <a href="#contact" className="transition hover:text-white">
                {locale === "fa" ? "تماس" : "Contact"}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">{t.contact}</h3>

            <div className="mt-5 flex flex-col gap-4 text-gray-400">
              <a
                href="mailto:hello@radora.dev"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail size={18} />
                hello@radora.dev
              </a>

              <a
                href="https://github.com/RadoraHQ"
                target="_blank"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <FaGithub className="h-[18px] w-[18px]" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/company/radora"
                target="_blank"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <FaLinkedin className="h-[18px] w-[18px]" />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Radora. {t.rights}</p>

          <p>Designed & Developed with Next.js + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
