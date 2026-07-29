export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0B1220]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
            <span className="font-bold text-white">R</span>
          </div>
          <span className="text-xl font-bold tracking-wide text-white">
            Radora
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Portfolio</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </nav>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
          Get in Touch
        </button>
      </div>
    </header>
  );
}