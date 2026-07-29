type Props = {
  locale: "fa" | "en";
};

export default function Footer({ locale }: Props) {
  return (
    <footer className="border-t border-white/10 bg-[#08101C]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-gray-400 md:flex-row">
        <div>© 2026 Radora. All rights reserved.</div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            GitHub
          </a>
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
