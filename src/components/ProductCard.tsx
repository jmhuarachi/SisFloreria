import React, { useState } from 'react';
import { Star, Package, ChevronUp, Info, Palette, Check } from 'lucide-react';
import type { Product } from '../types';
import { FaWhatsapp } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<number>(0);

  // Determinar la imagen a mostrar
  const getImagePath = () => {
    if (product.hasVariants && product.variants && product.variants.length > 0) {
      return `/img/${product.variants[selectedVariant]?.image || product.image}`;
    }
    return `/img/${product.image}`;
  };

  const imagePath = getImagePath();
  const fallbackImage = `https://images.unsplash.com/photo-${[
    '1562690868-60bbe7293e94',
    '1593642532842-98d0fd5ebc1a',
    '1544551763-46a013bb70d5',
    '1560785496-3c9d27877182'
  ][product.id % 4]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`;

  // Construir URL completa de la imagen para Netlify
  const getFullImageUrl = () => {
    if (imageError) {
      return fallbackImage;
    }
    
    // Para Netlify, necesitamos la URL absoluta
    const baseUrl = window.location.origin;
    
    // Si la imagen empieza con /img/, mantenemos esa estructura
    if (imagePath.startsWith('/img/')) {
      return `${baseUrl}${imagePath}`;
    }
    
    // Si no tiene /img/, lo agregamos
    return `${baseUrl}/img/${imagePath.replace(/^img\//, '')}`;
  };

  const handleConsult = () => {
    const imageUrl = getFullImageUrl();
    let message = `Hola! Me interesa el producto: ${product.name} - S/. ${product.price.toFixed(2)}`;
    
    // Agregar información de variante seleccionada si existe
    if (product.hasVariants && product.variants && product.variants[selectedVariant]) {
      const variant = product.variants[selectedVariant];
      message += ` (Color: ${variant.name})`;
    }
    
    // Método 1: Intentar con parámetro media (puede no funcionar en todos los navegadores)
    // const whatsappUrl = `https://wa.me/51989807482?text=${encodeURIComponent(message)}&media=${encodeURIComponent(imageUrl)}`;
    
    // Método 2: URL estándar (solo mensaje, la imagen no se adjunta automáticamente)
    const whatsappUrl = `https://wa.me/51989807482?text=${encodeURIComponent(message)}`;
    
    // Método 3: Alternativa - Abrir WhatsApp y luego mostrar instrucciones
    // window.open(`https://web.whatsapp.com/send?phone=51989807482&text=${encodeURIComponent(message + '\n\n🖼️ Imagen: ' + imageUrl)}`, '_blank');
    
    // Método más confiable: mensaje + instrucciones para la imagen
    const fullMessage = `${message}\n\n🖼️ *Imagen del producto:*\n${imageUrl}\n\n(Puedes ver la imagen copiando este enlace en tu navegador)`;
    const finalWhatsappUrl = `https://wa.me/51989807482?text=${encodeURIComponent(fullMessage)}`;
    
    window.open(finalWhatsappUrl, '_blank');
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
      {/* Imagen del producto */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
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
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
          {product.featured && (
            <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg">
              <Star className="w-3 h-3 fill-current" />
              Destacado
            </span>
          )}
          {product.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Precio overlay */}
        <div className="absolute bottom-3 right-3 z-20">
          <div className="bg-red-500 text-white px-4 py-2 rounded-full shadow-lg font-bold">
            S/. {product.price.toFixed(2)}
          </div>
        </div>

        {/* Selector de variantes - Solo si el producto tiene variantes */}
        {product.hasVariants && product.variants && product.variants.length > 0 && (
          <div className="absolute bottom-3 left-3 z-20">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
              <div className="flex items-center gap-2 mb-1">
                <Palette className="w-3 h-3 text-red-500" />
                <span className="text-xs font-semibold text-gray-700">
                  Colores:
                </span>
              </div>
              <div className="flex gap-1.5">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVariant(index);
                    }}
                    className={`relative w-7 h-7 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                      selectedVariant === index 
                        ? 'border-red-500 scale-110 ring-2 ring-red-500/30' 
                        : 'border-gray-300 hover:border-red-300'
                    }`}
                    style={{ backgroundColor: variant.hexColor }}
                    title={`Color: ${variant.name}`}
                    aria-label={`Seleccionar color ${variant.name}`}
                  >
                    {selectedVariant === index && (
                      <Check className="absolute inset-0 m-auto w-4 h-4 text-white drop-shadow-md" strokeWidth={3} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Overlay de hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-red-500 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
          
          {/* Mostrar variante seleccionada */}
          {product.hasVariants && product.variants && product.variants[selectedVariant] && (
            <div className="flex items-center gap-2 mt-2">
              <div 
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: product.variants[selectedVariant].hexColor }}
              />
              <span className="text-xs text-gray-600">
                Color: {product.variants[selectedVariant].name}
              </span>
            </div>
          )}
        </div>

        {/* Detalles rápidos */}
        <div className="bg-gray-50 rounded-lg p-3 space-y-2">
          <div className="flex items-center gap-2 text-gray-700">
            <Package className="w-4 h-4 text-red-500" />
            <span className="text-xs font-semibold">Incluye:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.details.slice(0, 2).map((detail, index) => (
              <span
                key={index}
                className="text-xs bg-white px-2 py-1 rounded-md text-gray-600 border border-gray-200"
              >
                {detail.split(' ')[0]}
              </span>
            ))}
            {product.details.length > 2 && (
              <span className="text-xs text-red-500 font-medium px-2 py-1">
                +{product.details.length - 2} más
              </span>
            )}
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2.5 px-4 rounded-lg transition-all duration-200 text-sm flex items-center justify-center gap-2"
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
            className="flex-1 bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="w-4 h-4" />
            Consultar
          </button>
        </div>
      </div>

      {/* Detalles expandidos */}
      {showDetails && (
        <div className="px-5 pb-5 space-y-3 border-t border-gray-200 pt-4 animate-slide-up">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2 text-gray-800">
              <Package className="w-4 h-4 text-red-500" />
              <h4 className="font-semibold text-sm">Incluye:</h4>
            </div>
            <ul className="space-y-2">
              {product.details.map((detail, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 flex items-start gap-2"
                >
                  <span className="text-red-500 mt-0.5">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de variantes si existen */}
          {product.hasVariants && product.variants && product.variants.length > 0 && (
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="w-4 h-4 text-blue-500" />
                <h4 className="font-semibold text-sm text-gray-800">
                  Colores disponibles:
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(index)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
                      selectedVariant === index
                        ? 'border-blue-500 bg-blue-100'
                        : 'border-gray-200 bg-white hover:bg-gray-100'
                    }`}
                  >
                    <div
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: variant.hexColor }}
                    />
                    <span className="text-xs text-gray-700">
                      {variant.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="bg-yellow-50 rounded-lg p-3">
            <p className="text-xs text-gray-600 flex items-start gap-2">
              <Info className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Nota:</strong> Follaje según stock, colores de flores según disponibilidad. 
                Se pueden realizar modificaciones personalizadas y agregar globos o peluches con costo adicional.
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;