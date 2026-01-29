// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Quito Gastronómico",
  description: "Descubre la gastronomía de Quito",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#0b0f1a] text-gray-200">
        {children}
      </body>
    </html>
  );
}
