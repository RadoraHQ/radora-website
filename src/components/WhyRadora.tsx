import { ShieldCheck, Gauge, Bot, Layers } from "lucide-react";

type Props = {
  locale: "fa" | "en";
};

const content = {
  fa: {
    title: "چرا Radora؟",
    subtitle:
      "ما فقط وب‌سایت طراحی نمی‌کنیم؛ سیستم‌های دیجیتال می‌سازیم که به رشد واقعی کسب‌وکار کمک می‌کنند.",
    items: [
      {
        icon: ShieldCheck,
        title: "طراحی مدرن",
        description:
          "رابط کاربری حرفه‌ای، تجربه کاربری روان و طراحی در سطح استانداردهای بین‌المللی.",
      },
      {
        icon: Gauge,
        title: "سرعت و سئو",
        description:
          "بهینه‌سازی برای سرعت بارگذاری، Core Web Vitals و دیده شدن بهتر در موتورهای جستجو.",
      },
      {
        icon: Bot,
        title: "هوش مصنوعی و اتوماسیون",
        description:
          "یکپارچه‌سازی ابزارهای AI و اتوماسیون برای کاهش هزینه، صرفه‌جویی در زمان و افزایش بهره‌وری.",
      },
      {
        icon: Layers,
        title: "پشتیبانی و توسعه",
        description:
          "همراهی بلندمدت، نگهداری، توسعه قابلیت‌های جدید و بهبود مستمر پروژه.",
      },
    ],
  },
  en: {
    title: "Why Radora?",
    subtitle:
      "We don’t just build websites. We create digital systems that help businesses grow with confidence and scale efficiently.",
    items: [
      {
        icon: ShieldCheck,
        title: "Modern design",
        description:
          "Professional UI, thoughtful UX, and design that meets international standards.",
      },
      {
        icon: Gauge,
        title: "Performance & SEO",
        description:
          "Optimized for speed, Core Web Vitals, and better visibility in search engines.",
      },
      {
        icon: Bot,
        title: "AI & automation",
        description:
          "AI-powered workflows and automation systems that save time and reduce operational costs.",
      },
      {
        icon: Layers,
        title: "Support & growth",
        description:
          "Long-term support, maintenance, new features, and continuous improvement.",
      },
    ],
  },
};

export default function WhyRadora({ locale }: Props) {
  const t = content[locale];

  return (
    <section className="bg-[#0B1220] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-400">{t.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {t.items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:border-blue-400/40 hover:bg-white/8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
