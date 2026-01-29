"use client";

import { useEffect } from "react";

export default function Lightbox({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  // Cerrar con tecla ESC (mejora de usabilidad)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Contenedor para evitar que el click en la imagen cierre */}
      <div
        className="relative max-w-5xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt="Imagen ampliada"
          className="w-full h-full max-h-[90vh] rounded-2xl shadow-2xl animate-fadeIn"
        />

        {/* Botón cerrar visible */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-amber-500 text-black w-10 h-10 rounded-full font-bold shadow hover:bg-amber-400 transition"
          aria-label="Cerrar imagen"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
