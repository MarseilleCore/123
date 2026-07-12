"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Возможности", href: "#features" },
  { label: "Как работает", href: "#how" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Отзывы", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center animate-pulse-glow">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="font-bold text-xl tracking-tight">
            Launch<span className="gradient-text">Kit</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            className="text-sm text-slate-400 hover:text-white transition-colors px-4 py-2"
          >
            Войти
          </a>
          <a
            href="#pricing"
            className="btn-primary text-sm font-semibold px-5 py-2 rounded-lg text-white"
          >
            Начать бесплатно
          </a>
        </div>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-300 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-lg text-white text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Начать бесплатно
          </a>
        </div>
      )}
    </nav>
  );
}
