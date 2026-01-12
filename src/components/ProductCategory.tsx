import React from 'react';
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
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl p-6
        transition-all duration-300
        ${isActive 
          ? 'shadow-xl transform scale-[1.02]' 
          : 'shadow-md hover:shadow-lg'
        }
        group
      `}
    >
      {/* Fondo con gradiente */}
      <div className={`
        absolute inset-0 bg-gradient-to-br ${category.color} 
        transition-opacity duration-300
        ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-20'}
      `} />
      
      {/* Fondo base */}
      <div className={`
        absolute inset-0 bg-white dark:bg-gray-800 
        transition-all duration-300
        ${isActive ? 'opacity-0' : 'opacity-100'}
      `} />
      
      {/* Contenido */}
      <div className="relative z-10">
        <div className={`
          w-16 h-16 rounded-full mx-auto mb-4
          flex items-center justify-center
          transition-all duration-300
          ${isActive 
            ? 'bg-white/20 text-white text-3xl' 
            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-2xl'
          }
          group-hover:scale-110
        `}>
          {category.icon}
        </div>
        
        <h3 className={`
          font-bold text-lg mb-2 text-center
          transition-colors duration-300
          ${isActive 
            ? 'text-white' 
            : 'text-gray-800 dark:text-white'
          }
        `}>
          {category.name}
        </h3>
        
        <p className={`
          text-sm text-center
          transition-colors duration-300
          ${isActive 
            ? 'text-white/90' 
            : 'text-gray-600 dark:text-gray-400'
          }
        `}>
          {category.description}
        </p>
      </div>
      
      {/* Indicador activo */}
      {isActive && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                      w-1/2 h-1 bg-white/50 rounded-full" />
      )}
    </button>
  );
};

export default ProductCategory;