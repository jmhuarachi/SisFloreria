import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Home, Flower2, ShoppingCart, Phone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { FaWhatsapp } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', icon: Home, href: '#inicio' },
    { name: 'Catálogo', icon: Flower2, href: '#catalogo' },
    { name: 'Cómo Comprar', icon: ShoppingCart, href: '#como-comprar' },
    { name: 'Contacto', icon: Phone, href: '#contacto' }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/51989807482', '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Solo imagen */}
          <a href="#inicio" className="flex items-center group">
            <div className="relative w-16 h-16 sm:w-50 sm:h-50">
              <img
                src="/logo1.png"
                alt="Florería Marsihuri"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=200&h=200&fit=crop';
                }}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 font-medium"
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {/* WhatsApp Button - Desktop */}
            <button
              onClick={handleWhatsApp}
              className="hidden sm:flex items-center gap-2 btn-primary"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Menú"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800 animate-slide-up">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 font-medium"
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </a>
                );
              })}
              
              {/* WhatsApp Button - Mobile */}
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 btn-primary mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;