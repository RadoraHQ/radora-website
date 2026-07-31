"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

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
    sending: "در حال ارسال...",
    success: "پیام شما با موفقیت ارسال شد.",
    error: "ارسال پیام با خطا مواجه شد.",
    contact: "اطلاعات تماس",
  },
  en: {
    title: "Ready to build your next project?",
    subtitle:
      "Whether you need a modern website, a software platform, or an AI-powered solution, let’s build it together.",
    name: "Name",
    email: "Email",
    message: "Your message",
    send: "Send message",
    sending: "Sending...",
    success: "Your message was sent successfully.",
    error: "Failed to send your message.",
    contact: "Contact information",
  },
};

export default function Contact({ locale }: Props) {
  const t = content[locale];

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: t.success,
        });

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: t.error,
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: t.error,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0B1220] py-24">
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
                  <FaGithub className="text-xl text-blue-400" />
                  <span>github.com/RadoraHQ</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <FaLinkedin className="text-xl text-blue-400" />
                  <span>linkedin.com/company/radora</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder={t.name}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-blue-400 focus:outline-none"
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.email}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-blue-400 focus:outline-none"
              />

              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={t.message}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-blue-400 focus:outline-none"
              />

              {status && (
                <div
                  className={`rounded-xl px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? t.sending : t.send}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
