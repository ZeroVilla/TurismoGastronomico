// app/components/PlatosSection.tsx
export default function PlatosSection() {
  const platos = [
    "Hornado",
    "Fritada",
    "Locro de Papa",
    "Cevichocho",
    "Empanadas de Viento",
    "Yahuarlocro",
  ];

  return (
    <section id="platos" className="py-24 bg-[#0b0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-amber-400 mb-10">
          🥘 Platos Típicos de Quito
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {platos.map((plato) => (
            <div
              key={plato}
              className="p-8 bg-orange-400 rounded-2xl shadow hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-white">
                {plato}
              </h3>
              <p className="text-white mt-2">
                Plato tradicional quiteño reconocido por su sabor y herencia cultural.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
