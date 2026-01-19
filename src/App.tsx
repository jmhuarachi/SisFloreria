import React, { useState, useEffect, useRef } from 'react';
import { Flower2, Search, X, Sparkles, ShoppingBag, Send, Calculator, CreditCard, Gift, Filter } from 'lucide-react';
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
  const [showFixedSearch, setShowFixedSearch] = useState(false);
  const [showCategoryFilters, setShowCategoryFilters] = useState(false);
  const catalogRef = useRef<HTMLDivElement>(null);

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

  // Efecto para mostrar/ocultar buscador fijo
  useEffect(() => {
    const handleScroll = () => {
      if (catalogRef.current) {
        const catalogTop = catalogRef.current.offsetTop;
        const scrollTop = window.scrollY;
        
        // Mostrar buscador fijo cuando el usuario haya hecho scroll dentro de la sección del catálogo
        setShowFixedSearch(scrollTop > catalogTop + 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Imágenes del carrusel Hero
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
    'ramos-buchon': categories[1],
    'arreglos-florales': categories[2],
    'plantas': categories[3],
    'adornos': categories[4],
    'ramos-artificiales': categories[5],
    'globos-peluches': categories[6]
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
      desc: 'Consulta el costo de delivery',
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

  const clearAllFilters = () => {
    setSelectedCategory('todos');
    setSearchQuery('');
    setShowCategoryFilters(false);
  };

  return (
    <div className="min-h-screen bg-[#FBEAF4]">
      <Header />

      {/* Buscador Fijo */}
      <div 
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 transform ${
          showFixedSearch 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        }`}
        style={{ marginTop: '80px' }}
      >
        <div className="bg-white border-b border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-3">
              {/* Botón para mostrar/ocultar filtros en móvil */}
              <button
                onClick={() => setShowCategoryFilters(!showCategoryFilters)}
                className="lg:hidden flex items-center justify-center w-12 h-12 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors"
                aria-label="Mostrar filtros"
              >
                <Filter className="w-5 h-5" />
              </button>

              {/* Buscador */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar en el catálogo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500"
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

              {/* Contador y limpiar filtros */}
              <div className="hidden md:flex items-center gap-3">
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  {filteredProducts.length} productos
                </span>
                {(selectedCategory !== 'todos' || searchQuery) && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-2 transition-colors whitespace-nowrap"
                  >
                    <X className="w-4 h-4" />
                    Limpiar filtros
                  </button>
                )}
              </div>
            </div>

            {/* Filtros de categoría móvil */}
            <div className={`lg:hidden mt-3 overflow-hidden transition-all duration-300 ${
              showCategoryFilters ? 'max-h-96' : 'max-h-0'
            }`}>
              <div className="flex flex-wrap gap-2">
                {Object.entries(categoryMap).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedCategory(key);
                      setShowCategoryFilters(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === key
                        ? `bg-gradient-to-br ${category.color} text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-xl animate-fade-in"
                key={`badge-${currentSlide}`}
              >
                <Sparkles className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-gray-800">
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
                  className="w-full sm:w-auto bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 px-8 py-4 text-lg shadow-2xl hover:shadow-red-500/50"
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

      {/* Cómo Comprar */}
      <section id="como-comprar" className="py-20 bg-[#FBEAF4]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo comprar?
            </h2>
            <p className="text-gray-600 text-lg">
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
                  <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
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
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
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
                      <h3 className="text-xl font-bold text-gray-800">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
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
      <section id="catalogo" ref={catalogRef} className="py-16 bg-[#FBEAF4]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Nuestro Catálogo
            </h2>
            <p className="text-gray-600">
              Descubre nuestra colección de arreglos florales cuidadosamente diseñados
            </p>
          </div>

          {/* Buscador normal (se muestra solo cuando el fijo está oculto) */}
          {!showFixedSearch && (
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por nombre, descripción o etiquetas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 shadow-sm"
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
          )}

          {/* Filtros por categoría */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(categoryMap).map(([key, category]) => (
                <ProductCategory
                  key={key}
                  category={category}
                  isActive={selectedCategory === key}
                  onClick={() => setSelectedCategory(key)}
                />
              ))}
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <p className="text-sm text-gray-600">
              Mostrando <span className="font-semibold text-red-500">{filteredProducts.length}</span> productos
              {selectedCategory !== 'todos' && ` en ${categoryMap[selectedCategory]?.name}`}
              {searchQuery && ` para "${searchQuery}"`}
            </p>
            
            {/* Botón para resetear filtros (solo en desktop) */}
            {(selectedCategory !== 'todos' || searchQuery) && !showFixedSearch && (
              <button
                onClick={clearAllFilters}
                className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-2 transition-colors"
              >
                <X className="w-4 h-4" />
                Limpiar filtros
              </button>
            )}
          </div>

          {/* Productos */}
          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent" />
              <p className="mt-4 text-gray-600">Buscando productos...</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Flower2 className="w-20 h-20 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                No encontramos productos
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                No hay productos que coincidan con tu búsqueda. Intenta con otros términos o categorías.
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Contáctanos
            </h2>
            <p className="text-lg text-gray-600">
              ¿Tienes alguna consulta o necesitas un arreglo personalizado? 
              ¡Estamos aquí para ayudarte a crear el detalle perfecto!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 text-lg px-8 py-4"
              >
                <FaWhatsapp className="w-6 h-6" />
                WhatsApp
              </button>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-500 hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg border-2 border-red-500 hover:text-red-600 flex items-center gap-2 text-lg px-8 py-4"
              >
                <FaFacebook className="w-6 h-6" />
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-500 hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg border-2 border-red-500 hover:text-red-600 flex items-center gap-2 text-lg px-8 py-4"
              >
                <FaInstagram className="w-6 h-6" />
                Instagram
              </a>
            </div>

            <p className="text-sm text-gray-500">
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