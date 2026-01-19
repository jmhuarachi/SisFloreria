import React from 'react';
import { 
  Flower2, 
  Sparkles, 
  Leaf, 
  Gift, 
  Check, 
  Home,
  Package,
  Star,
  Heart,
  Balloon,
  Palette
} from 'lucide-react';
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
    const iconMap: Record<string, React.ReactNode> = {
      'Todos': <Home className="w-5 h-5" />,
      'Ramos': <Flower2 className="w-5 h-5" />,
      'Ramos Buchón': <Star className="w-5 h-5" />,
      'Arreglos Florales': <Package className="w-5 h-5" />,
      'Arreglos': <Package className="w-5 h-5" />,
      'Plantas': <Leaf className="w-5 h-5" />,
      'Adornos': <Gift className="w-5 h-5" />,
      'Ramos Artificiales': <Palette className="w-5 h-5" />,
      'Globos y Peluches': <Balloon className="w-5 h-5" />,
    };
    
    return iconMap[category.name] || <Sparkles className="w-5 h-5" />;
  };

  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200 ${
        isActive 
          ? `bg-gradient-to-br ${category.color} text-white shadow-lg ring-2 ring-white/50` 
          : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-md'
      }`}
      aria-label={`Filtrar por ${category.name}`}
    >
      {/* Icono con indicador activo */}
      <div className={`relative mb-2 transition-transform duration-200 ${
        isActive ? 'scale-110' : 'group-hover:scale-105'
      }`}>
        <div className={`p-2 rounded-lg ${
          isActive 
            ? 'bg-white/20 backdrop-blur-sm' 
            : 'bg-gray-100 group-hover:bg-gray-200'
        }`}>
          {getIcon()}
        </div>
        
        {/* Indicador de selección */}
        {isActive && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-fade-in">
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          </div>
        )}
      </div>

      {/* Nombre de la categoría */}
      <h3 className={`font-semibold text-sm mb-1 text-center ${
        isActive ? 'text-white' : 'text-gray-800'
      }`}>
        {category.name}
      </h3>
      
      {/* Descripción (solo visible en hover o activo) */}
      <div className={`text-xs text-center transition-all duration-200 ${
        isActive 
          ? 'opacity-90 max-h-8' 
          : 'opacity-0 max-h-0 group-hover:opacity-70 group-hover:max-h-8'
      } overflow-hidden`}>
        {category.description}
      </div>
    </button>
  );
};

export default ProductCategory;