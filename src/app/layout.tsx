import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaunchKit — Запустите продукт быстрее",
  description:
    "Современная платформа для стартапов. Разрабатывайте, деплойте и масштабируйте свой продукт с лёгкостью.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="bg-[#0a0a0f] text-white antialiased">{children}</body>
    </html>
  );
}
