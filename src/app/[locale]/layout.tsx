import {Inter} from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"]
});

const vazirmatn = localFont({
  src: "../../../node_modules/vazirmatn/fonts/webfonts/Vazirmatn-Regular.woff2",
  display: "swap"
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body className={locale === "fa" ? vazirmatn.className : inter.className}>
        {children}
      </body>
    </html>
  );
}