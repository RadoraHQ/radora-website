import Link from "next/link";

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
    cta: "Get in Touch",
  },
};

export default function Navbar({ locale }: Props) {
  const t = content[locale];
  const switchLocale = locale === "fa" ? "en" : "fa";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0B1220]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
            <span className="font-bold text-white">R</span>
          </div>
          <span className="text-xl font-bold tracking-wide text-white">
            Radora
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#" className="transition hover:text-white">
            {t.home}
          </a>
          <a href="#" className="transition hover:text-white">
            {t.services}
          </a>
          <a href="#" className="transition hover:text-white">
            {t.portfolio}
          </a>
          <a href="#" className="transition hover:text-white">
            {t.contact}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${switchLocale}`}
            className="rounded-lg border border-gray-600 px-3 py-2 text-sm text-gray-300 transition hover:border-blue-400 hover:text-blue-400"
          >
            {locale === "fa" ? "EN" : "FA"}
          </Link>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
            {t.cta}
          </button>
        </div>
      </div>
    </header>
  );
}
