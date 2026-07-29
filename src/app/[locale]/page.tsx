import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyRadora from "@/components/WhyRadora";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: "fa" | "en" }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <Services locale={locale} />
      <Portfolio locale={locale} />
      <WhyRadora locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
