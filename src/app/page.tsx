import Navbar from "@/components/Navbar";
import CounterCard from "@/components/CounterCard";
import PricingSection from "@/components/PricingCard";
import ContactForm from "@/components/ContactForm";

/* ─── Static data (server-side, no "use client" needed) ─────────────── */

const features = [
  {
    icon: "⚡",
    title: "Молниеносный деплой",
    description:
      "Разворачивайте приложение в один клик. Автоматический CI/CD, preview-ветки и мгновенные rollback'и.",
  },
  {
    icon: "🔒",
    title: "Безопасность из коробки",
    description:
      "SSL-сертификаты, WAF, DDoS-защита и автоматическое сканирование уязвимостей уже включены.",
  },
  {
    icon: "📊",
    title: "Аналитика в реальном времени",
    description:
      "Мониторинг метрик, логи и трейсы в одном дашборде. Алерты по любому условию.",
  },
  {
    icon: "🌍",
    title: "Глобальный CDN",
    description:
      "Edge-ноды в 40+ странах. Ваши пользователи получают ответ за < 50 мс откуда угодно.",
  },
  {
    icon: "🔧",
    title: "Гибкая конфигурация",
    description:
      "Инфраструктура как код. Поддержка Terraform, Pulumi и собственного CLI.",
  },
  {
    icon: "🤝",
    title: "Командная работа",
    description:
      "Роли и разрешения, review-процессы, аудит-лог. Всё, что нужно для продуктивной команды.",
  },
];

const steps = [
  {
    num: "01",
    title: "Создайте аккаунт",
    description: "Регистрация занимает 30 секунд. Кредитная карта не нужна.",
  },
  {
    num: "02",
    title: "Подключите репозиторий",
    description: "GitHub, GitLab или Bitbucket — просто авторизуйте доступ.",
  },
  {
    num: "03",
    title: "Настройте окружение",
    description:
      "Укажите переменные окружения, домен и выберите регион. Готово.",
  },
  {
    num: "04",
    title: "Деплойте и масштабируйте",
    description:
      "Каждый push — это деплой. Авто-масштабирование при росте нагрузки.",
  },
];

const testimonials = [
  {
    name: "Алина Морозова",
    role: "CTO, FinTech Startup",
    avatar: "AM",
    color: "from-violet-500 to-purple-600",
    text: "LaunchKit сократил время деплоя с 2 часов до 4 минут. Мы запустили MVP за неделю вместо месяца.",
    rating: 5,
  },
  {
    name: "Дмитрий Козлов",
    role: "CEO, SaaS Platform",
    avatar: "ДК",
    color: "from-blue-500 to-cyan-600",
    text: "Лучший DevOps-инструмент, который я видел. Команда перестала тратить время на инфраструктуру.",
    rating: 5,
  },
  {
    name: "Сара Джонсон",
    role: "Lead Developer, E-commerce",
    avatar: "SJ",
    color: "from-emerald-500 to-teal-600",
    text: "Global CDN — это просто магия. Конверсия выросла на 18% после переезда на LaunchKit.",
    rating: 5,
  },
  {
    name: "Михаил Петров",
    role: "Founder, EdTech",
    avatar: "МП",
    color: "from-orange-500 to-rose-600",
    text: "Поддержка отвечает за минуты, не за дни. Чувствуешь, что тебе реально помогают.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Нужна ли кредитная карта для бесплатного тарифа?",
    a: "Нет. Бесплатный тариф доступен без карты, без ограничений по времени.",
  },
  {
    q: "Какие технологии поддерживаются?",
    a: "Node.js, Python, Go, Rust, PHP, Ruby, Java и любые Docker-контейнеры. Если оно запускается — мы его задеплоим.",
  },
  {
    q: "Как работает масштабирование?",
    a: "Автоматически. Система отслеживает нагрузку и поднимает нужное количество инстансов без вашего участия.",
  },
  {
    q: "Где хранятся данные?",
    a: "Вы выбираете регион при создании проекта. Поддерживаем EU, US, APAC. Данные никогда не покидают выбранный регион.",
  },
  {
    q: "Можно ли перенести существующий проект?",
    a: "Да, и это займёт около 15 минут. У нас есть migration-wizard и бесплатная помощь с переездом.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-700/20 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-700/20 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-emerald-700/10 blur-[80px]" />

          {/* Animated grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating circles */}
          <div className="animate-float delay-100 absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-violet-400/60" />
          <div className="animate-float delay-300 absolute top-1/3 right-[15%] w-2 h-2 rounded-full bg-blue-400/60" />
          <div className="animate-float delay-500 absolute bottom-1/3 left-[20%] w-4 h-4 rounded-full bg-emerald-400/40" />
          <div className="animate-float delay-200 absolute bottom-1/4 right-[10%] w-2 h-2 rounded-full bg-pink-400/50" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-violet-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Теперь с поддержкой Edge Runtime
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight">
            Запустите продукт
            <br />
            <span className="gradient-text animate-gradient-x">
              в 10 раз быстрее
            </span>
          </h1>

          <p className="animate-fade-in-up delay-200 mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            LaunchKit — современная платформа для деплоя и масштабирования
            веб-приложений. Меньше DevOps, больше продукта.
          </p>

          <div className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="btn-primary px-8 py-4 rounded-2xl font-bold text-white text-base"
            >
              Начать бесплатно →
            </a>
            <a
              href="#how"
              className="glass px-8 py-4 rounded-2xl font-semibold text-slate-300 hover:text-white transition-colors text-base"
            >
              Как это работает
            </a>
          </div>

          <div className="animate-fade-in-up delay-400 mt-12 flex flex-wrap justify-center gap-8 text-slate-500 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Бесплатный тариф навсегда
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Карта не нужна
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Деплой за 2 минуты
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs">Скролл</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          <CounterCard end={12000} suffix="+" label="Активных проектов" />
          <CounterCard end={99} suffix=".9%" label="Uptime SLA" />
          <CounterCard end={40} suffix="+" label="Edge-локаций" />
          <CounterCard end={850} suffix="+" label="Довольных команд" />
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────── */}
      <section id="features" className="py-28 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-700/10 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
              Возможности
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
              Всё, что нужно для{" "}
              <span className="gradient-text">запуска</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Не тратьте время на настройку инфраструктуры. Сосредоточьтесь на
              продукте — мы позаботимся об остальном.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`glass rounded-2xl p-8 card-hover animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section id="how" className="py-28 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-700/10 blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
              Как это работает
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
              Запуск за{" "}
              <span className="gradient-text">4 шага</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-violet-500 via-blue-500 to-transparent" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-8 items-start">
                  <div className="relative shrink-0">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm animate-pulse-glow z-10 relative ${
                        i === 0
                          ? "bg-gradient-to-br from-violet-600 to-violet-800"
                          : "glass"
                      }`}
                    >
                      {step.num}
                    </div>
                  </div>
                  <div className="glass rounded-2xl p-6 flex-1 card-hover">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <PricingSection />

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section id="testimonials" className="py-28 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-[300px] h-[300px] rounded-full bg-emerald-700/10 blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
              Отзывы
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
              Нам{" "}
              <span className="gradient-text">доверяют</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Тысячи команд уже используют LaunchKit для своих продуктов.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-6 card-hover">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
              Частые <span className="gradient-text">вопросы</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-3 flex items-start gap-3">
                  <span className="text-violet-400 shrink-0 mt-0.5">?</span>
                  {faq.q}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-700/15 blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
              Контакт
            </span>
            <h2 className="mt-4 text-4xl font-extrabold">
              Остались <span className="gradient-text">вопросы?</span>
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Напишите нам — ответим в течение нескольких часов. Или
              забронируйте демо-звонок с нашим специалистом.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: "📧", label: "Email", value: "hello@launchkit.io" },
                { icon: "💬", label: "Telegram", value: "@launchkit_support" },
                { icon: "🕐", label: "Время ответа", value: "< 4 часов" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="glass w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">
                      {c.label}
                    </div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-violet-600/20 blur-[80px]" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-600/20 blur-[80px]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Готовы запустить
              <br />
              <span className="gradient-text">свой продукт?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Присоединяйтесь к 850+ командам, которые уже строят будущее с
              LaunchKit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="btn-primary px-10 py-4 rounded-2xl font-bold text-white text-base"
              >
                Начать бесплатно →
              </a>
              <a
                href="#contact"
                className="glass px-10 py-4 rounded-2xl font-semibold text-slate-300 hover:text-white transition-colors text-base"
              >
                Запросить демо
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="font-bold text-xl">
                  Launch<span className="gradient-text">Kit</span>
                </span>
              </a>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Платформа для деплоя нового поколения. Быстро, надёжно,
                масштабируемо.
              </p>
            </div>

            {/* Links */}
            {[
              {
                title: "Продукт",
                links: ["Возможности", "Тарифы", "Changelog", "Roadmap"],
              },
              {
                title: "Компания",
                links: ["О нас", "Блог", "Карьера", "Пресс-кит"],
              },
              {
                title: "Поддержка",
                links: ["Документация", "API", "Статус", "Контакт"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold text-sm mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-slate-500 text-sm hover:text-slate-300 transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
            <span>© 2025 LaunchKit. Все права защищены.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-slate-400 transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
