// app/components/VideoSection.tsx
export default function VideoSection() {
  return (
    <section id="video" className="py-24 bg-[#0b0f1a]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-teal-600 mb-6">
          🎬 Ruta Gastronómica de Quito
        </h2>
        <p className="mb-4 text-white">
          Disfruta de un recorrido audiovisual por mercados, restaurantes y
          platos tradicionales de la capital.
        </p>

        <video controls className="w-full rounded-2xl shadow-lg">
          <source src="/video/quito-gastronomia.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
