import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 
      transition-all duration-300
      ${scrolled 
        ? 'glass-effect shadow-xl py-3' 
        : 'bg-white dark:bg-gray-900 py-4'
      }
    `}>
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 
                          rounded-full flex items-center justify-center 
                          shadow-lg group-hover:shadow-xl 
                          transition-all duration-300 
                          group-hover:scale-105">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="font-script text-2xl md:text-3xl 
                           text-gray-800 dark:text-white 
                           group-hover:text-gradient 
                           transition-all duration-300">
                Marsihuvi
              </h1>
              <p className="text-sm font-semibold text-red-500 dark:text-red-400 
                          tracking-wider">
                FLORERÍA
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {['Inicio', 'Catálogo', 'Cómo Comprar', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-2 rounded-lg font-medium 
                         text-gray-700 dark:text-gray-300 
                         hover:text-red-500 dark:hover:text-red-400 
                         hover:bg-red-50 dark:hover:bg-gray-800 
                         transition-all duration-200"
              >
                {item}
              </a>
            ))}
            
            <div className="mx-2">
              <ThemeToggle />
            </div>
            
            <a
              href="https://wa.me/51989807482"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ml-2"
            >
              <span className="flex items-center space-x-2">
                <span>💬</span>
                <span>WhatsApp</span>
              </span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <a
              href="https://wa.me/51989807482"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-sm"
            >
              💬
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                       text-gray-700 dark:text-gray-300 
                       hover:bg-gray-200 dark:hover:bg-gray-700 
                       transition-colors"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-slide-up">
            <div className="flex flex-col space-y-2 bg-white dark:bg-gray-800 
                          rounded-xl p-4 shadow-lg">
              {['Inicio', 'Catálogo', 'Cómo Comprar', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-3 rounded-lg font-medium 
                           text-gray-700 dark:text-gray-300 
                           hover:text-red-500 dark:hover:text-red-400 
                           hover:bg-red-50 dark:hover:bg-gray-700 
                           transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;