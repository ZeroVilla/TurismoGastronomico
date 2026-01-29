"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

const platosData = [
  { name: "Hornado", img: "/galeria/hornado.jpg" },
  { name: "Fritada", img: "/galeria/fritada.jpg" },
  { name: "Locro de Papa", img: "/galeria/locro.jpg" },
  { name: "Empanadas de Viento", img: "/galeria/empanadas.jpg" },
  { name: "Cevichocho", img: "/galeria/cevichocho.jpg" },
  { name: "Chugchucaras", img: "/galeria/chugchucaras.jpg" },
];

export default function PlatosSection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="platos" className="py-24 bg-[#111827]">
      <Reveal>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-amber-400 mb-10">
          🥘 Platos Típicos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {platosData.map((plato) => (
            <div
              key={plato.name}
              onClick={() => setSelected(plato.img)}
              className="p-6 bg-[#0b0f1a] rounded-2xl border border-white/10 cursor-pointer hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-emerald-400">
                {plato.name}
              </h3>
              <p className="text-gray-400 mt-2">
                Click para ver imagen del plato
              </p>
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

