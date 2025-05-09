import { useState, useEffect } from "react";

export default function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparecer después de pasar la sección del header (ajustar valor según sea necesario)
      const scrollPosition = window.scrollY;
      const headerHeight = 150; // Ajustar según la altura real del header

      if (scrollPosition > headerHeight) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
        // Cerrar el menú si está abierto y volvemos arriba
        if (isMenuOpen) setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm transition-all duration-500 ${isNavVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <span className="text-primary font-bold text-xl">Jaime Digital Studio</span>
            </a>
          </div>

          {/* Hamburger button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary focus:outline-none" aria-expanded={isMenuOpen} aria-label="Toggle navigation menu">
            {isMenuOpen ? (
              // X icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} transition-all duration-300 ease-in-out overflow-hidden bg-black bg-opacity-90`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-primary hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </a>
          <a href="/projects" className="text-primary hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>
            Proyectos
          </a>
          <a href="/#about" className="text-primary hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>
            Sobre Mi
          </a>
          <a href="/#contact" className="text-primary hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
