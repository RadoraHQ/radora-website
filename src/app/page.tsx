export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
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

          <p className="mt-6 text-xl text-gray-300 md:text-2xl">
            Building trust. Creating innovation.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            We build modern websites, software, automation tools, and AI-powered
            digital solutions for businesses worldwide.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">
              View Portfolio
            </button>

            <button className="rounded-xl border border-gray-600 px-8 py-4 text-lg font-semibold transition hover:border-blue-400 hover:text-blue-400">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
