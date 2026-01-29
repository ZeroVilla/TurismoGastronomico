"use client";

export default function ModalRestaurante({
  name,
  description,
  address,
  searchUrl,
  onClose,
}: {
  name: string;
  description: string;
  address: string;
  searchUrl: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0b0f1a] p-10 rounded-3xl max-w-lg w-full border border-white/10"
      >
        <h3 className="text-2xl font-bold text-amber-400 mb-4">
          {name}
        </h3>

        <p className="text-gray-300 mb-4">
          {description}
        </p>

        <p className="text-gray-400 mb-6">
          <strong className="text-emerald-400">Dirección:</strong><br />
          {address}
        </p>

        <div className="flex gap-4">
          {/* Link a búsqueda (NO MAPA) */}
          <a
            href={searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-emerald-400 transition"
          >
            🔎 Ver ubicación
          </a>

          <button
            onClick={onClose}
            className="bg-amber-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
