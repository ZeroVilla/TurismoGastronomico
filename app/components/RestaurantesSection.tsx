// app/components/RestaurantesSection.tsx
export default function RestaurantesSection() {
  return (
    <section id="restaurantes" className="py-24 bg-[#0b0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-teal-600 mb-10">
          🏨 Restaurantes Recomendados
        </h2>

        <ul className="space-y-4 text-lg text-white">
          <li>⭐ Hasta la Vuelta, Señor</li>
          <li>⭐ El Ventanal</li>
          <li>⭐ Casa Gangotena</li>
          <li>⭐ La Ronda - Restaurantes Típicos</li>
          <li>⭐ Mercado Central de Quito</li>
        </ul>
      </div>
    </section>
  );
}
