type Props = {
  locale: "fa" | "en";
};

const content = {
  fa: {
    badge: "استودیو فناوری و هوش مصنوعی",
    title: "راهکارهای دیجیتال برای کسب‌وکارهای مدرن",
    subtitle:
      "Radora با تمرکز بر طراحی سایت، توسعه نرم‌افزار، اتوماسیون و هوش مصنوعی، به کسب‌وکارها کمک می‌کند سریع‌تر رشد کنند.",
    primary: "مشاهده نمونه‌کارها",
    secondary: "شروع همکاری",
    projects: "پروژه‌های انجام‌شده",
    clients: "مشتریان",
    support: "پشتیبانی",
  },
  en: {
    badge: "Technology & AI Studio",
    title: "Digital solutions for modern businesses",
    subtitle:
      "Radora builds modern websites, software, automation systems, and AI-powered digital products for ambitious businesses worldwide.",
    primary: "View portfolio",
    secondary: "Get in touch",
    projects: "Projects",
    clients: "Clients",
    support: "Support",
  },
};

export default function Hero({ locale }: Props) {
  const t = content[locale];

  return (
    <section className="relative overflow-hidden bg-[#0B1220]">
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              {t.badge}
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              {t.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300 md:text-xl">
              {t.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-500">
                {t.primary}
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:border-blue-400/50 hover:bg-white/10">
                {t.secondary}
              </button>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-3xl font-bold text-white">12+</div>
                <div className="mt-1 text-sm text-gray-400">{t.projects}</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-3xl font-bold text-white">8+</div>
                <div className="mt-1 text-sm text-gray-400">{t.clients}</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="mt-1 text-sm text-gray-400">{t.support}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-sm text-gray-400">Radora Dashboard</div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl bg-white/5 p-5">
                  <div className="text-sm text-gray-400">Active Projects</div>
                  <div className="mt-2 text-3xl font-bold text-white">12</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-blue-500/10 p-5">
                    <div className="text-sm text-blue-300">Web</div>
                    <div className="mt-2 text-2xl font-bold text-white">8</div>
                  </div>

                  <div className="rounded-xl bg-purple-500/10 p-5">
                    <div className="text-sm text-purple-300">AI</div>
                    <div className="mt-2 text-2xl font-bold text-white">4</div>
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 p-5">
                  <div className="mb-3 text-sm text-gray-400">Growth</div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
