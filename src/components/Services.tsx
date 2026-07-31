"use client";

import { motion } from "framer-motion";
import { Globe, Bot, Smartphone, Shield } from "lucide-react";

type Props = {
  locale: "fa" | "en";
};

const content = {
  fa: {
    sectionTitle: "خدمات Radora",
    sectionSubtitle:
      "از طراحی وب‌سایت تا اتوماسیون هوشمند، راهکارهایی می‌سازیم که به رشد واقعی کسب‌وکار کمک می‌کنند.",
    items: [
      {
        icon: Globe,
        title: "طراحی و توسعه وب",
        description:
          "وب‌سایت‌های مدرن، سریع، سئو محور و مقیاس‌پذیر با Next.js و React.",
      },
      {
        icon: Bot,
        title: "اتوماسیون و هوش مصنوعی",
        description:
          "طراحی گردش‌کارهای هوشمند، ابزارهای AI و اتوماسیون برای کاهش هزینه و افزایش بهره‌وری.",
      },
      {
        icon: Smartphone,
        title: "محصولات دیجیتال",
        description:
          "داشبوردها، نرم‌افزارهای اختصاصی، ابزارهای داخلی و توسعه محصولات دیجیتال.",
      },
      {
        icon: Shield,
        title: "مشاوره فنی",
        description:
          "بررسی معماری، بهینه‌سازی عملکرد، رفع مشکلات فنی و برنامه‌ریزی توسعه.",
      },
    ],
  },
  en: {
    sectionTitle: "Radora services",
    sectionSubtitle:
      "From modern websites to intelligent automation, we build digital solutions that help businesses grow with confidence.",
    items: [
      {
        icon: Globe,
        title: "Web development",
        description:
          "Modern, fast, SEO-focused websites built with Next.js and React.",
      },
      {
        icon: Bot,
        title: "AI automation",
        description:
          "Intelligent workflows, AI tools, and automation systems that improve efficiency and reduce manual work.",
      },
      {
        icon: Smartphone,
        title: "Digital products",
        description:
          "Custom dashboards, internal software, and scalable digital product development.",
      },
      {
        icon: Shield,
        title: "Technical consulting",
        description:
          "Architecture reviews, performance optimization, troubleshooting, and long-term technical guidance.",
      },
    ],
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Services({ locale }: Props) {
  const t = content[locale];

  return (
    <section id="services" className="relative bg-[#0B1220] py-20">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
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
            {t.sectionTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-400">
            {t.sectionSubtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {t.items.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={card}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:border-blue-400/40 hover:bg-white/8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="text-sm font-medium">
                    {locale === "fa" ? "اطلاعات بیشتر" : "Learn more"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
