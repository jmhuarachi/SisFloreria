import React, { useState } from 'react';
import { Star, Package, ChevronUp, Info } from 'lucide-react';
import type { Product } from '../types';
import { FaWhatsapp } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imagePath = `/img/${product.image}`;
  const fallbackImage = `https://images.unsplash.com/photo-${[
    '1562690868-60bbe7293e94',
    '1593642532842-98d0fd5ebc1a',
    '1544551763-46a013bb70d5',
    '1560785496-3c9d27877182'
  ][product.id % 4]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`;

  const handleConsult = () => {
    const message = `Hola! Me interesa el producto: ${product.name} - S/. ${product.price.toFixed(2)}`;
    const whatsappUrl = `https://wa.me/51989807482?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
      {/* Imagen del producto */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={imageError ? fallbackImage : imagePath}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
        />

        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.featured && (
            <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg">
              <Star className="w-3 h-3 fill-current" />
              Destacado
            </span>
          )}
          {product.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Precio overlay */}
        <div className="absolute bottom-3 right-3">
          <div className="bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded-full shadow-lg font-bold">
            S/. {product.price.toFixed(2)}
          </div>
        </div>

        {/* Overlay de hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-1 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Detalles rápidos */}
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 space-y-2">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <Package className="w-4 h-4 text-red-500" />
            <span className="text-xs font-semibold">Incluye:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.details.slice(0, 2).map((detail, index) => (
              <span
                key={index}
                className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded-md text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600"
              >
                {detail.split(' ')[0]}
              </span>
            ))}
            {product.details.length > 2 && (
              <span className="text-xs text-red-500 dark:text-red-400 font-medium px-2 py-1">
                +{product.details.length - 2} más
              </span>
            )}
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 btn-secondary py-2.5 text-sm flex items-center justify-center gap-2"
          >
            {showDetails ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Ver menos
              </>
            ) : (
              <>
                <Info className="w-4 h-4" />
                Más detalles
              </>
            )}
          </button>
          <button
            onClick={handleConsult}
            className="flex-1 btn-primary py-2.5 text-sm flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="w-4 h-4" />
            Consultar
          </button>
        </div>
      </div>

      {/* Detalles expandidos */}
      {showDetails && (
        <div className="px-5 pb-5 space-y-3 border-t border-gray-200 dark:border-gray-700 pt-4 animate-slide-up">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2 text-gray-800 dark:text-white">
              <Package className="w-4 h-4 text-red-500" />
              <h4 className="font-semibold text-sm">Incluye:</h4>
            </div>
            <ul className="space-y-2">
              {product.details.map((detail, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                >
                  <span className="text-red-500 mt-0.5">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
            <p className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Nota:</strong> Follaje según stock, colores de flores según disponibilidad. 
                Se pueden realizar modificaciones personalizadas.
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;