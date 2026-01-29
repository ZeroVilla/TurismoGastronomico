// app/components/GaleriaSection.tsx
export default function GaleriaSection() {
  const images = [
    "/galeria/hornado.jpg",
    "/galeria/fritada.jpg",
    "/galeria/locro.jpg",
    "/galeria/empanadas.jpg",
    "/galeria/cevichocho.jpg",
    "/galeria/mercado.jpg",
  ];

  return (
    <section id="galeria" className="py-24 bg-[#0b0f1a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-amber-400 mb-10">
          📸 Galería Gastronómica
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={src}
                alt="Gastronomía de Quito"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end">
                <p className="p-4 text-sm text-gray-200">
                  Sabores tradicionales de Quito
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
