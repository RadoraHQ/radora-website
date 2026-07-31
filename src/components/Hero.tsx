"use client";

import { motion } from "framer-motion";

type Props = {
  locale: "fa" | "en";
};

const content = {
  fa: {
    badge: "استودیو نرم‌افزار و هوش مصنوعی",
    title: "ساخت نرم‌افزارهای مدرن، وب‌سایت‌های حرفه‌ای و راهکارهای AI",
    subtitle:
      "Radora به کسب‌وکارها کمک می‌کند با طراحی، توسعه نرم‌افزار، اتوماسیون و هوش مصنوعی سریع‌تر رشد کنند.",
    primary: "مشاهده خدمات",
    secondary: "نمونه‌کارها",
  },
  en: {
    badge: "Software & AI Studio",
    title: "Building modern software, websites and AI solutions",
    subtitle:
      "Radora helps businesses grow through software engineering, automation, web development and artificial intelligence.",
    primary: "Explore services",
    secondary: "View portfolio",
  },
};

export default function Hero({ locale }: Props) {
  const t = content[locale];

  return (
    <section className="relative overflow-hidden bg-[#0B1220] px-6 pb-28 pt-36">
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-blue-500/25 blur-[150px]" />
        <div className="absolute bottom-10 right-10 h-[360px] w-[360px] rounded-full bg-cyan-400/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300 backdrop-blur"
        >
          {t.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-5xl text-5xl font-extrabold leading-[1.08] tracking-tight text-white md:text-7xl"
        >
          {t.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400 md:text-xl"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#services"
            className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-[0_0_35px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_45px_rgba(59,130,246,0.45)]"
          >
            {t.primary}
          </a>

          <a
            href="#portfolio"
            className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-gray-200 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-white/10 hover:text-white"
          >
            {t.secondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
