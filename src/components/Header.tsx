import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="font-script text-3xl text-gray-800 dark:text-white">Marsihuri</h1>
              <p className="text-lg font-semibold text-red-500">FLORERÍA</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#inicio" className="text-gray-700 dark:text-gray-300 hover:text-red-500 font-medium transition-colors">
              Inicio
            </a>
            <a href="#catalogo" className="text-gray-700 dark:text-gray-300 hover:text-red-500 font-medium transition-colors">
              Catálogo
            </a>
            <a href="#como-comprar" className="text-gray-700 dark:text-gray-300 hover:text-red-500 font-medium transition-colors">
              Cómo Comprar
            </a>
            <a href="#contacto" className="text-gray-700 dark:text-gray-300 hover:text-red-500 font-medium transition-colors">
              Contacto
            </a>
            <ThemeToggle />
            <a
              href="https://wa.me/51989807482"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 dark:text-gray-300 hover:text-red-500 font-medium transition-colors py-2">
                Inicio
              </a>
              <a href="#catalogo" className="text-gray-700 dark:text-gray-300 hover:text-red-500 font-medium transition-colors py-2">
                Catálogo
              </a>
              <a href="#como-comprar" className="text-gray-700 dark:text-gray-300 hover:text-red-500 font-medium transition-colors py-2">
                Cómo Comprar
              </a>
              <a href="#contacto" className="text-gray-700 dark:text-gray-300 hover:text-red-500 font-medium transition-colors py-2">
                Contacto
              </a>
              <a
                href="https://wa.me/51989807482"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center shadow-md"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;