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

export default function Portfolio({ locale }: Props) {
  const t = content[locale];

  return (
    <section className="bg-[#0B1220] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-400">{t.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {t.projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="mt-6 flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300">
                  {t.view}
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
