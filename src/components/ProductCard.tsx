import React, { useState } from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Intentar cargar imagen del producto
  const imagePath = `/assets/img/products/img${(product.id % 3) + 1}.jpeg`;
  const fallbackImage = `https://images.unsplash.com/photo-${[
    '1562690868-60bbe7293e94', // Rosas
    '1593642532842-98d0fd5ebc1a', // Girasoles
    '1544551763-46a013bb70d5', // Tulipanes
    '1560785496-3c9d27877182'  // Arreglos
  ][product.id % 4]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`;

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                    overflow-hidden card-hover animate-fade-in">
      {/* Imagen del producto */}
      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={imageError ? fallbackImage : imagePath}
          alt={product.name}
          className={`
            w-full h-full object-cover transition-all duration-500
            ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
            group-hover:scale-110
          `}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.featured && (
            <span className="bg-gradient-to-r from-red-500 to-pink-500 
                           text-white text-xs font-bold px-3 py-1 
                           rounded-full shadow-lg">
              ⭐ Destacado
            </span>
          )}
          {product.tags?.slice(0, 2).map((tag) => (
            <span key={tag} 
                  className="bg-white/90 dark:bg-gray-800/90 
                           text-gray-800 dark:text-gray-200 
                           text-xs font-medium px-2 py-1 
                           rounded-full backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Precio overlay */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 
                        text-white font-bold py-2 px-4 
                        rounded-xl shadow-xl 
                        transform group-hover:scale-105 
                        transition-transform">
            S/. {product.price.toFixed(2)}
          </div>
        </div>
        
        {/* Overlay de hover */}
        <div className="absolute inset-0 bg-gradient-to-t 
                       from-black/50 to-transparent 
                       opacity-0 group-hover:opacity-100 
                       transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white 
                       line-clamp-2 group-hover:text-red-500 
                       dark:group-hover:text-red-400 
                       transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Detalles rápidos */}
        <div className="mb-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span className="mr-2">📦</span>
            <span className="font-medium">Incluye:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.details.slice(0, 2).map((detail, index) => (
              <span key={index} 
                    className="text-xs bg-gray-100 dark:bg-gray-700 
                             text-gray-700 dark:text-gray-300 
                             px-2 py-1 rounded">
                {detail.split(' ')[0]}
              </span>
            ))}
            {product.details.length > 2 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                +{product.details.length - 2} más
              </span>
            )}
          </div>
        </div>
        
        {/* Botones */}
        <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 btn-secondary py-2 text-sm"
          >
            {showDetails ? 'Ver menos' : 'Más detalles'}
          </button>
          
          <a
            href={`https://wa.me/51989807482?text=Hola, me interesa: ${encodeURIComponent(product.name)} - S/. ${product.price}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary py-2 text-sm"
          >
            Consultar
          </a>
        </div>
        
        {/* Detalles expandidos */}
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 
                        animate-slide-up">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  📋 Incluye:
                </h4>
                <ul className="space-y-1">
                  {product.details.map((detail, index) => (
                    <li key={index} 
                        className="flex items-center text-sm 
                                 text-gray-600 dark:text-gray-400">
                      <span className="text-red-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 
                            rounded-lg p-3 border border-red-100 dark:border-red-800">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-red-500">💡 Nota:</span> 
                  Follaje según stock, colores de flores según disponibilidad. 
                  Se pueden realizar modificaciones personalizadas.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;