// app/components/ContactoSection.tsx
export default function ContactoSection() {
  return (
    <section id="contacto" className="py-24 bg-[#0b0f1a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-amber-400 mb-6">
          📩 Contáctanos
        </h2>
        <p className="mb-6 text-white">
          ¿Deseas más información sobre rutas gastronómicas y experiencias culinarias en Quito?
        </p>

        <form className="grid md:grid-cols-2 gap-6 ">
          <input
            type="text"
            placeholder="Nombre"
            className="border p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border p-3 rounded-lg"
          />
          <textarea
            placeholder="Mensaje"
            className="border p-3 rounded-lg md:col-span-2 "
            rows={4}
          ></textarea>
          <button className="bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition md:col-span-2">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
