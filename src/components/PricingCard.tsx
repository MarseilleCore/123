"use client";

import { useState } from "react";

interface Plan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Старт",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Для экспериментов и пет-проектов",
    features: [
      "1 проект",
      "5 GB хранилища",
      "1 000 запросов/день",
      "Базовая аналитика",
      "Email поддержка",
    ],
    highlighted: false,
    cta: "Начать бесплатно",
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    yearlyPrice: 19,
    description: "Для растущих продуктов и команд",
    features: [
      "10 проектов",
      "50 GB хранилища",
      "Безлимитные запросы",
      "Расширенная аналитика",
      "Приоритетная поддержка 24/7",
      "CI/CD интеграция",
      "Кастомные домены",
    ],
    highlighted: true,
    cta: "Попробовать Pro",
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: "Для крупного бизнеса и enterprise",
    features: [
      "Неограниченные проекты",
      "500 GB хранилища",
      "SLA 99.99%",
      "Выделенный менеджер",
      "SSO / SAML",
      "On-premise деплой",
      "Индивидуальные условия",
    ],
    highlighted: false,
    cta: "Связаться с нами",
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
            Тарифы
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Прозрачное <span className="gradient-text">ценообразование</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Начните бесплатно. Платите только за то, что используете. Без
            скрытых комиссий.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 glass rounded-full px-4 py-2">
            <span
              className={`text-sm transition-colors ${!yearly ? "text-white font-semibold" : "text-slate-400"}`}
            >
              Ежемесячно
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                yearly ? "bg-violet-600" : "bg-slate-700"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                  yearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm transition-colors ${yearly ? "text-white font-semibold" : "text-slate-400"}`}
            >
              Ежегодно
            </span>
            {yearly && (
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-medium">
                −35%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 card-hover ${
                plan.highlighted
                  ? "animate-pulse-glow border-2 border-violet-500 bg-violet-950/30"
                  : "glass"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Популярный
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-slate-400 text-sm mt-1">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-extrabold">
                  {yearly ? plan.yearlyPrice : plan.monthlyPrice === 0
                    ? "0"
                    : plan.yearlyPrice}
                  {plan.monthlyPrice === 0 && plan.yearlyPrice === 0
                    ? ""
                    : ""}
                </span>
                {plan.monthlyPrice === 0 ? (
                  <span className="text-2xl font-extrabold">Бесплатно</span>
                ) : (
                  <>
                    <span className="text-5xl font-extrabold">
                      {yearly ? plan.yearlyPrice : plan.monthlyPrice}€
                    </span>
                    <span className="text-slate-400 text-sm ml-1">/мес</span>
                  </>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 text-violet-400 shrink-0">✓</span>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "btn-primary text-white"
                    : "border border-white/20 text-white hover:border-violet-500 hover:bg-violet-500/10"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
