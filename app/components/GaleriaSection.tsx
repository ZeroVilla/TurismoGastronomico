"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

export default function GaleriaSection() {
  const images = [
    "/restaurantes/restaurante1.jpg",
    "/restaurantes/restaurante2.jpg",
    "/restaurantes/restaurante3.jpg",
    "/restaurantes/restaurante4.jpg",
    "/restaurantes/restaurante5.jpg",
    "/restaurantes/restaurante6.jpg"
  ];

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="restaurantes" className="py-24 bg-[#0b0f1a]">
      <Reveal>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-amber-400 mb-10">
          📸 Galería Gastronómica
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src) => (
            <div
              key={src}
              className="group relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer"
              onClick={() => setSelected(src)}
            >
              <img
                src={src}
                alt="Gastronomía de Quito"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end">
                <p className="p-4 text-sm text-gray-200">
                  Click para ampliar
                </p>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <Lightbox src={selected} onClose={() => setSelected(null)} />
        )}
      </div>
      </Reveal>
    </section>
  );
}
