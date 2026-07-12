'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold">
              <span className={`gradient-primary text-gradient ${!isScrolled && 'text-white'}`}>
                ModernSite
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className={`hover:text-purple-600 transition ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Возможности
            </a>
            <a
              href="#showcase"
              className={`hover:text-purple-600 transition ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Портфолио
            </a>
            <a
              href="#testimonials"
              className={`hover:text-purple-600 transition ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Отзывы
            </a>
            <a
              href="#pricing"
              className={`hover:text-purple-600 transition ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Цены
            </a>
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2 gradient-primary text-white rounded-full hover:shadow-lg transition transform hover:scale-105"
            >
              Связаться
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className={`hover:text-purple-600 transition ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Возможности
              </a>
              <a
                href="#showcase"
                className={`hover:text-purple-600 transition ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Портфолио
              </a>
              <a
                href="#testimonials"
                className={`hover:text-purple-600 transition ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Отзывы
              </a>
              <a
                href="#pricing"
                className={`hover:text-purple-600 transition ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Цены
              </a>
              <a
                href="#contact"
                className="px-6 py-2 gradient-primary text-white rounded-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Связаться
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
