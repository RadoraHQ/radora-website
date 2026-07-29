import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

type Props = {
  params: Promise<{ locale: "fa" | "en" }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <Navbar locale={locale} />
      <Hero locale={locale} />
    </main>
  );
}
