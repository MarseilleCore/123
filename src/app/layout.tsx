import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Модерн Решения - Инновации для вашего бизнеса",
  description: "Создаем современные цифровые решения для роста вашего бизнеса",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
