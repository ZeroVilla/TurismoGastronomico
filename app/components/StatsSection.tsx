"use client";

import { useEffect, useState } from "react";

export default function StatsSection() {
  const [platos, setPlatos] = useState(0);
  const [restaurantes, setRestaurantes] = useState(0);
  const [mercados, setMercados] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlatos((p) => (p < 25 ? p + 1 : p));
      setRestaurantes((r) => (r < 40 ? r + 1 : r));
      setMercados((m) => (m < 12 ? m + 1 : m));
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-amber-400 mb-12">
          📊 Quito Gastronómico en Números
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 bg-[#0b0f1a] rounded-2xl border border-white/10">
            <p className="text-5xl font-extrabold text-emerald-400">
              {platos}+
            </p>
            <p className="text-gray-400 mt-2">Platos típicos</p>
          </div>

          <div className="p-8 bg-[#0b0f1a] rounded-2xl border border-white/10">
            <p className="text-5xl font-extrabold text-emerald-400">
              {restaurantes}+
            </p>
            <p className="text-gray-400 mt-2">Restaurantes tradicionales</p>
          </div>

          <div className="p-8 bg-[#0b0f1a] rounded-2xl border border-white/10">
            <p className="text-5xl font-extrabold text-emerald-400">
              {mercados}+
            </p>
            <p className="text-gray-400 mt-2">Mercados gastronómicos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
