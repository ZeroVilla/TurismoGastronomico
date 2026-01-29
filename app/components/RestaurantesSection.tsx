"use client";

import { useState } from "react";
import ModalRestaurante from "./ModalRestaurante";
import Reveal from "./Reveal";

const restaurantes = [
  {
    name: "Hasta la Vuelta, Señor",
    desc: "Restaurante tradicional quiteño reconocido por hornado y fritada.",
    address: "Calle Chile Oe3-05 y Benalcázar, Centro Histórico, Quito",
    searchUrl:
      "https://www.google.com/search?q=Hasta+la+Vuelta+Se%C3%B1or+Quito+direcci%C3%B3n",
  },
  {
    name: "El Ventanal",
    desc: "Restaurante con vista panorámica y gastronomía ecuatoriana.",
    address: "Carchi &, Quito 170402",
    searchUrl:
      "https://www.google.com/search?q=El+Ventanal+Quito+direcci%C3%B3n",
  },
  {
    name: "Casa Gangotena",
    desc: "Alta cocina ecuatoriana con enfoque gourmet.",
    address: "Bolívar Oe6-41 y Cuenca, Centro Histórico, Quito",
    searchUrl:
      "https://www.google.com/search?q=Casa+Gangotena+Quito+direcci%C3%B3n",
  },
  {
    name: "La Ronda",
    desc: "Zona tradicional con múltiples restaurantes y comida típica.",
    address: "Calle La Ronda, Centro Histórico, Quito",
    searchUrl:
      "https://www.google.com/search?q=La+Ronda+Quito+direcci%C3%B3n",
  },
];

export default function RestaurantesSection() {
  const [selected, setSelected] = useState<
    {
      name: string;
      desc: string;
      address: string;
      searchUrl: string;
    } | null
  >(null);

  return (
    <section id="restaurantes" className="py-24 bg-[#0b0f1a]">
      <Reveal>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-amber-400 mb-10">
          🏨 Restaurantes Recomendados
        </h2>

        <ul className="space-y-4">
          {restaurantes.map((r) => (
            <li key={r.name}>
              <button
                onClick={() => setSelected(r)}
                className="text-emerald-400 hover:underline text-lg"
              >
                📍 {r.name}
              </button>
            </li>
          ))}
        </ul>

        {selected && (
          <ModalRestaurante
            name={selected.name}
            description={selected.desc}
            address={selected.address}
            searchUrl={selected.searchUrl}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </Reveal>
    </section>
  );
}
