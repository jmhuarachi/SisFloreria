import React, { useState, useEffect } from 'react';
import { Flower2, Search, X, Sparkles, ShoppingBag, Send, Calculator, CreditCard, Gift } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductCategory from './components/ProductCategory';
import { products, categories, contactInfo } from './data/products';
import type { ProductCategoryType } from './types';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = products.filter(product => {
        const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
        const matchesSearch = searchQuery === '' ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      });
      setFilteredProducts(filtered);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  // Auto-slide para el carrusel del Hero
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(slideInterval);
  }, []);

  // Imágenes del carrusel Hero - Solo arreglos florales y regalos
  const heroSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=1920&h=1080&fit=crop&q=80',
      title: 'Pequeños detalles,',
      highlight: 'grandes sentimientos',
      subtitle: 'Ramos frescos que expresan amor y alegría en cada momento especial',
      overlay: 'from-black/60 via-black/40 to-transparent'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1920&h=1080&fit=crop&q=80',
      title: 'Celebra el amor',
      highlight: 'con flores únicas',
      subtitle: 'Arreglos románticos perfectos para esos momentos inolvidables',
      overlay: 'from-pink-900/60 via-pink-900/40 to-transparent'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=1920&h=1080&fit=crop&q=80',
      title: 'Amor en cada',
      highlight: 'detalle floral',
      subtitle: 'Arreglos únicos con detalles personalizados para sorprender',
      overlay: 'from-rose-900/60 via-rose-900/40 to-transparent'
    }
  ];
  const allCategory: ProductCategoryType = {
    id: 0,
    name: 'Todos',
    description: 'Todos los productos',
    icon: '🌸',
    color: 'from-gray-500 to-gray-700'
  };

  const categoryMap: { [key: string]: ProductCategoryType } = {
    'todos': allCategory,
    'ramos': categories[0],
    'arreglos': categories[1],
    'plantas': categories[2],
    'adornos': categories[3]
  };

  const steps = [
    { 
      step: '1', 
      icon: ShoppingBag,
      emoji: '🛍️',
      title: 'Elige', 
      desc: 'Selecciona el producto que más te guste',
      color: 'from-orange-400 to-orange-500',
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=300&fit=crop'
    },
    { 
      step: '2', 
      icon: Send,
      emoji: '📱',
      title: 'Envía', 
      desc: 'Envía la imagen del producto seleccionado',
      color: 'from-blue-400 to-blue-500',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&h=300&fit=crop'
    },
    { 
      step: '3', 
      icon: Calculator,
      emoji: '💰',
      title: 'Consulta', 
      desc: 'Consulta la tarifa de delivery',
      color: 'from-purple-400 to-purple-500',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop'
    },
    { 
      step: '4', 
      icon: CreditCard,
      emoji: '💳',
      title: 'Reserva', 
      desc: 'Abona el 50% para reservar',
      color: 'from-green-400 to-green-500',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop'
    },
    { 
      step: '5', 
      icon: Gift,
      emoji: '🎁',
      title: 'Personaliza', 
      desc: 'Agrega peluches, globos, etc.',
      color: 'from-pink-400 to-pink-500',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop'
    }
  ];

  const handleWhatsApp = () => {
    window.open(`https://wa.me/51${contactInfo.phone.replace(/\s/g, '')}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section con Carrusel */}
      <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Carrusel de imágenes */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Imagen de fondo */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay con gradiente personalizado */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
              
              {/* Overlay adicional para mejor legibilidad */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>

        {/* Contenido sobre el carrusel */}
        <div className="relative h-full flex items-center justify-center z-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
              {/* Badge decorativo */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-xl animate-fade-in"
                key={`badge-${currentSlide}`}
              >
                <Sparkles className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  Flores frescas todos los días
                </span>
              </div>

              {/* Título principal con animación */}
              <div 
                className="space-y-2 animate-fade-in"
                key={`title-${currentSlide}`}
                style={{ animationDelay: '200ms' }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                  {heroSlides[currentSlide].title}
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                  {heroSlides[currentSlide].highlight}
                </h2>
              </div>

              {/* Subtítulo */}
              <p 
                className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-2xl mx-auto font-medium drop-shadow-lg animate-fade-in"
                key={`subtitle-${currentSlide}`}
                style={{ animationDelay: '400ms' }}
              >
                {heroSlides[currentSlide].subtitle}
              </p>

              {/* Botones de acción */}
              <div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in"
                key={`buttons-${currentSlide}`}
                style={{ animationDelay: '600ms' }}
              >
                <a 
                  href="#catalogo" 
                  className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 px-8 py-4 text-lg shadow-2xl hover:shadow-red-500/50"
                >
                  <Flower2 className="w-6 h-6" />
                  Ver Catálogo
                </a>
                <button 
                  onClick={handleWhatsApp} 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-1"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  Consultar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores del carrusel */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-12 h-3 bg-white' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-all duration-200 hover:scale-110"
          aria-label="Slide anterior"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-all duration-200 hover:scale-110"
          aria-label="Slide siguiente"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Cómo Comprar - NUEVO DISEÑO TIPO TARJETAS */}
      <section id="como-comprar" className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Cómo comprar?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Sigue estos simples pasos para adquirir tus flores favoritas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.step}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Tarjeta principal */}
                  <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                    {/* Imagen de fondo */}
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay con gradiente */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-80 mix-blend-multiply`} />
                      
                      {/* Número del paso */}
                      <div className="absolute top-3 left-3">
                        <div className="w-10 h-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-lg font-bold bg-gradient-to-br from-red-500 to-pink-500 bg-clip-text text-transparent">
                            {step.step}
                          </span>
                        </div>
                      </div>

                      {/* Icono grande */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-1/2">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="pt-10 pb-6 px-5 text-center space-y-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* Indicador decorativo inferior */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestro Catálogo
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Descubre nuestra colección de arreglos florales cuidadosamente diseñados
            </p>
          </div>

          {/* Búsqueda */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre, descripción o etiquetas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Filtros por categoría - NUEVO DISEÑO TIPO TARJETAS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 max-w-7xl mx-auto">
            {Object.entries(categoryMap).map(([key, category]) => (
              <ProductCategory
                key={key}
                category={category}
                isActive={selectedCategory === key}
                onClick={() => setSelectedCategory(key)}
              />
            ))}
          </div>

          {/* Contador de resultados */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Mostrando {filteredProducts.length} productos
              {selectedCategory !== 'todos' && ` en ${categoryMap[selectedCategory]?.name}`}
              {searchQuery && ` para "${searchQuery}"`}
            </p>
          </div>

          {/* Productos */}
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent" />
              <p className="mt-4 text-gray-600 dark:text-gray-400">Buscando productos...</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Flower2 className="w-20 h-20 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                No encontramos productos
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                No hay productos que coincidan con tu búsqueda. Intenta con otros términos o categorías.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('todos');
                  setSearchQuery('');
                }}
                className="btn-primary"
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Contáctanos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              ¿Tienes alguna consulta o necesitas un arreglo personalizado? 
              ¡Estamos aquí para ayudarte a crear el detalle perfecto!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleWhatsApp}
                className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
              >
                <FaWhatsapp className="w-6 h-6" />
                WhatsApp
              </button>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
              >
                <FaFacebook className="w-6 h-6" />
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
              >
                <FaInstagram className="w-6 h-6" />
                Instagram
              </a>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              También nos encuentras en TikTok como: <strong>{contactInfo.socialMedia.tiktok}</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;