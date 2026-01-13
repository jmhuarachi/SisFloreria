import React from 'react';
import { Flower2, Sparkles, Leaf, Gift, Check } from 'lucide-react';
import type { ProductCategoryType } from '../types';

interface ProductCategoryProps {
  category: ProductCategoryType;
  isActive: boolean;
  onClick: () => void;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ 
  category, 
  isActive, 
  onClick 
}) => {
  // Mapear iconos según el nombre de la categoría
  const getIcon = () => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Todos': <Sparkles className="w-6 h-6" />,
      'Ramos': <Flower2 className="w-6 h-6" />,
      'Arreglos': <Sparkles className="w-6 h-6" />,
      'Plantas': <Leaf className="w-6 h-6" />,
      'Adornos': <Gift className="w-6 h-6" />
    };
    
    return iconMap[category.name] || <Flower2 className="w-6 h-6" />;
  };

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 ${
        isActive 
          ? 'shadow-xl ring-2 ring-red-500 dark:ring-red-400' 
          : 'shadow-md hover:shadow-lg'
      }`}
    >
      {/* Fondo con gradiente */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-80 group-hover:opacity-90'
      }`} />
      
      {/* Fondo base para modo claro/oscuro */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${
        isActive 
          ? 'bg-white/10 dark:bg-black/20' 
          : 'bg-white/20 dark:bg-black/30'
      }`} />

      {/* Patrón decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full -translate-y-10 translate-x-10" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full translate-y-8 -translate-x-8" />
      </div>

      {/* Contenido */}
      <div className="relative p-6 text-white">
        <div className="flex items-start justify-between mb-3">
          <div className={`p-3 rounded-xl bg-white/20 backdrop-blur-sm transition-transform duration-300 ${
            isActive ? 'scale-110' : 'group-hover:scale-105'
          }`}>
            {getIcon()}
          </div>
          
          {/* Indicador de selección */}
          {isActive && (
            <div className="p-1 rounded-full bg-white/30 backdrop-blur-sm animate-fade-in">
              <Check className="w-5 h-5" strokeWidth={3} />
            </div>
          )}
        </div>

        <h3 className={`font-bold text-lg mb-1 transition-all duration-300 ${
          isActive ? 'text-white' : 'text-white/95'
        }`}>
          {category.name}
        </h3>
        
        <p className={`text-sm transition-all duration-300 ${
          isActive ? 'text-white/90' : 'text-white/80'
        }`}>
          {category.description}
        </p>
      </div>

      {/* Indicador activo inferior */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white shadow-lg animate-slide-up" />
      )}

      {/* Efecto de brillo al hover */}
      <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isActive ? 'opacity-50' : ''
      }`} />
    </button>
  );
};

export default ProductCategory;