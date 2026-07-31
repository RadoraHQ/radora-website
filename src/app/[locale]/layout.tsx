import { Inter, Vazirmatn } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      className={locale === "fa" ? vazirmatn.className : inter.className}
    >
      {children}
    </div>
  );
}
