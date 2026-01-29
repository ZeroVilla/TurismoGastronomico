// app/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b0f1a]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-extrabold text-2xl text-amber-400">
          Quito Gastronómico
        </span>
        <div className="space-x-6 font-medium">
          <a href="#inicio" className="hover:text-amber-400">Inicio</a>
          <a href="#audio" className="hover:text-emerald-400">Audio</a>
          <a href="#galeria" className="hover:text-amber-400">Galería</a>
          <a href="#platos" className="hover:text-rose-400">Platos</a>
          <a href="#video" className="hover:text-amber-400">Video</a>
          <a href="#restaurantes" className="hover:text-emerald-400">Restaurantes</a>
          <a href="#contacto" className="hover:text-amber-400">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
