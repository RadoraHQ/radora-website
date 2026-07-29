import { Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {
  locale: "fa" | "en";
};

const content = {
  fa: {
    title: "آماده شروع پروژه هستید؟",
    subtitle:
      "اگر به یک وب‌سایت حرفه‌ای، سیستم نرم‌افزاری یا راهکار هوش مصنوعی نیاز دارید، با Radora در تماس باشید.",
    name: "نام",
    email: "ایمیل",
    message: "پیام شما",
    send: "ارسال پیام",
    contact: "اطلاعات تماس",
    GitHub: "GitHub",
    Linkedin: "Linkedin",
  },
  en: {
    title: "Ready to build your next project?",
    subtitle:
      "Whether you need a modern website, a software platform, or an AI-powered solution, let’s build it together.",
    name: "Name",
    email: "Email",
    message: "Your message",
    send: "Send message",
    contact: "Contact information",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};

export default function Contact({ locale }: Props) {
  const t = content[locale];

  return (
    <section className="bg-[#0B1220] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/3 p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                {t.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-400">
                {t.subtitle}
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="text-blue-400" />
                  <span>hello@radora.dev</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <FaGithub className="text-blue-400 text-xl" />
                  <span>GitHub.com/RadoraHQ</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <FaLinkedin className="text-blue-400 text-xl" />
                  <span>Linkedin.com/company/radora</span>
                </div>
              </div>
            </div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder={t.name}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-blue-400 focus:outline-none"
              />

              <input
                type="email"
                placeholder={t.email}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-blue-400 focus:outline-none"
              />

              <textarea
                rows={5}
                placeholder={t.message}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-blue-400 focus:outline-none"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
              >
                {t.send}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
