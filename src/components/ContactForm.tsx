"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1.5">Имя</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Иван Иванов"
            className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 border border-white/10 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1.5">Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="ivan@example.com"
            className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 border border-white/10 transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Сообщение</label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Расскажите о вашем проекте..."
          className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 border border-white/10 transition-colors resize-none"
        />
      </div>

      {status === "success" && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400 text-sm">
          ✓ Сообщение отправлено! Мы свяжемся с вами в течение 24 часов.
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
          ✗ Ошибка отправки. Попробуйте позже или напишите напрямую.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full py-3.5 rounded-xl font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Отправляем..." : "Отправить сообщение"}
      </button>
    </form>
  );
}
