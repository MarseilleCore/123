"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;
  suffix?: string;
  label: string;
}

export default function CounterCard({ end, suffix = "", label }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const step = Math.ceil(end / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, end);
            setCount(current);
            if (current >= end) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold gradient-text">
        {count.toLocaleString("ru-RU")}
        {suffix}
      </div>
      <div className="mt-2 text-slate-400 text-sm">{label}</div>
    </div>
  );
}
