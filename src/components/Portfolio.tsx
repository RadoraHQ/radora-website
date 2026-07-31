"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Props = {
  locale: "fa" | "en";
};

const content = {
  fa: {
    title: "نمونه‌کارهای منتخب",
    subtitle:
      "چند نمونه از پروژه‌هایی که با تمرکز بر طراحی مدرن، عملکرد بالا و تجربه کاربری حرفه‌ای توسعه داده‌ایم.",
    view: "مشاهده پروژه",
    projects: [
      {
        title: "وب‌سایت مدرن صنعت",
        description:
          "وب‌سایت شرکتی دو زبانه با تمرکز بر سئو، سرعت و طراحی مدرن.",
        image: "/projects/project-1.webp",
        tags: ["Next.js", "React", "Tailwind"],
      },
      {
        title: "پلتفرم تعمیرات لوازم خانگی",
        description: "سیستم خدمات، ثبت سفارش و مدیریت درخواست‌های مشتریان.",
        image: "/projects/project-2.webp",
        tags: ["Next.js", "UI/UX", "SEO"],
      },
      {
        title: "داشبورد اتوماسیون هوش مصنوعی",
        description:
          "داشبورد مدیریت پروژه، گزارش‌گیری و اتوماسیون مبتنی بر AI.",
        image: "/projects/project-3.webp",
        tags: ["AI", "Automation", "Dashboard"],
      },
    ],
  },
  en: {
    title: "Featured projects",
    subtitle:
      "A selection of projects focused on modern design, performance, scalability, and user experience.",
    view: "View project",
    projects: [
      {
        title: "Modern Industry Website",
        description:
          "A bilingual corporate website focused on SEO, speed, and modern UI.",
        image: "/projects/project-1.webp",
        tags: ["Next.js", "React", "Tailwind"],
      },
      {
        title: "Appliance Repair Platform",
        description:
          "Service booking and customer request management platform.",
        image: "/projects/project-2.webp",
        tags: ["Next.js", "UI/UX", "SEO"],
      },
      {
        title: "AI Automation Dashboard",
        description:
          "Project management dashboard with automation and AI-powered workflows.",
        image: "/projects/project-3.webp",
        tags: ["AI", "Automation", "Dashboard"],
      },
    ],
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Portfolio({ locale }: Props) {
  const t = content[locale];

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#0B1220] py-24"
    >
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-10 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-lg leading-9 text-gray-400">{t.subtitle}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {t.projects.map((project) => (
            <motion.div
              key={project.title}
              variants={card}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.35 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:border-blue-400/40 hover:bg-white/[0.06] hover:shadow-[0_25px_80px_rgba(37,99,235,0.18)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/85 via-[#0B1220]/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  Radora
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300 backdrop-blur transition-colors duration-300 group-hover:border-blue-400/20 group-hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 pt-5 border-t border-white/10">
                  <button className="inline-flex items-center gap-2 text-blue-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-300">
                    <span className="font-medium">{t.view}</span>
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
