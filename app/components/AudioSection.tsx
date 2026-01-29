// app/components/AudioSection.tsx
export default function AudioSection() {
  return (
    <section id="audio" className="py-24 bg-[#0b0f1a]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-teal-600 mb-6">
          🎧 Audio Guía Gastronómica
        </h2>
        <p className="mb-4 text-white">
          Escucha una narración que te guiará por los sabores más representativos
          de la ciudad de Quito.
        </p>

        <audio controls className="w-full">
          <source src="/audio/narracion-quito.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </section>
  );
}
