import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in border border-gray-100 dark:border-gray-700">
      <div className="p-6">
        {product.featured && (
          <div className="inline-block mb-3">
            <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Destacado
            </span>
          </div>
        )}
        
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{product.name}</h3>
          <span className="text-2xl font-bold text-red-500">S/. {product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Incluye:</h4>
          <ul className="space-y-1">
            {product.details.map((detail, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="text-red-500 mr-2">•</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-red-500 hover:text-red-600 font-medium text-sm transition-colors"
          >
            {showDetails ? 'Ver menos' : 'Más detalles'}
          </button>
          
          <a
            href={`https://wa.me/51 || '989807482'}?text=Hola, estoy interesado en: ${product.name} - S/. ${product.price}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Consultar
          </a>
        </div>
        
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-slide-up">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Nota:</span> Follaje según stock, color de rosa según stock y papel coreano según stock.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Se pueden realizar modificaciones de colores de flores y agregar productos adicionales.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;