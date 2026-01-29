// app/components/Hero.tsx
"use client";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-[url('/quito.png')] bg-cover bg-center"
    >
      <div className="bg-black/70 p-14 rounded-3xl text-center max-w-3xl shadow-2xl border border-white/10">
        <h1 className="text-5xl font-extrabold text-amber-400 mb-6">
          Turismo Gastronómico en Quito
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Una experiencia gourmet entre historia, tradición y sabores andinos.
        </p>
        <button
        onClick={() => {
          document
            .getElementById("contacto")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="bg-amber-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition"
        >
        Descubrir Experiencia
        </button>
      </div>
    </section>
  );
}
