import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verificar preferencia del sistema
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setIsDarkMode(systemPrefersDark);
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 
                 hover:bg-gray-200 dark:hover:bg-gray-700 
                 transition-all duration-300 
                 shadow-md hover:shadow-lg
                 group"
      aria-label="Cambiar tema"
      title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sol - Modo Claro */}
        <div className={`
          absolute transition-all duration-500 transform
          ${isDarkMode 
            ? 'opacity-0 rotate-90 scale-0' 
            : 'opacity-100 rotate-0 scale-100'
          }
        `}>
          <span className="text-amber-500 text-xl">☀️</span>
        </div>
        
        {/* Luna - Modo Oscuro */}
        <div className={`
          absolute transition-all duration-500 transform
          ${isDarkMode 
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 -rotate-90 scale-0'
          }
        `}>
          <span className="text-indigo-300 text-xl">🌙</span>
        </div>
      </div>
      
      {/* Efecto de anillo */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent 
                      group-hover:border-red-300 dark:group-hover:border-red-500 
                      transition-all duration-300" />
    </button>
  );
};

export default ThemeToggle;