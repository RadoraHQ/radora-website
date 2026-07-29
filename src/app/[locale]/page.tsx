import Navbar from "@/components/Navbar";

type Props = {
  params: Promise<{ locale: "fa" | "en" }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  const content = {
    fa: {
      subtitle: "ساخت اعتماد، خلق نوآوری",
      description:
        "طراحی سایت، توسعه نرم‌افزار، اتوماسیون و راهکارهای هوش مصنوعی برای کسب‌وکارها.",
    },
    en: {
      subtitle: "Building trust. Creating innovation.",
      description:
        "Modern websites, software, automation, and AI-powered digital solutions for businesses worldwide.",
    },
  };

  const t = content[locale];

  return (
    <main className="min-h-screen bg-[#0B1220] text-white pt-16">
      <Navbar locale={locale} />

      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-500/20">
              <span className="text-3xl font-bold">R</span>
            </div>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            Radora
          </h1>

          <p className="mt-6 text-xl text-gray-300 md:text-2xl">{t.subtitle}</p>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            {t.description}
          </p>
        </div>
      </section>
    </main>
  );
}
