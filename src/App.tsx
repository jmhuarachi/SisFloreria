import React, { useState, useEffect } from 'react';
import { Flower2, Search, X, Sparkles } from 'lucide-react';
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

  // Crear categoría "Todos" con todas las propiedades requeridas
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
    { step: '1', icon: '🌺', title: 'Elige', desc: 'Selecciona el producto que más te guste' },
    { step: '2', icon: '📱', title: 'Envía', desc: 'Envía la imagen del producto seleccionado' },
    { step: '3', icon: '💰', title: 'Consulta', desc: 'Consulta la tarifa de delivery' },
    { step: '4', icon: '💳', title: 'Reserva', desc: 'Abona el 50% para reservar' },
    { step: '5', icon: '🎁', title: 'Personaliza', desc: 'Agrega peluches, globos, etc.' }
  ];

  const handleWhatsApp = () => {
    window.open(`https://wa.me/51${contactInfo.phone.replace(/\s/g, '')}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative pt-28 pb-20 overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
        </div>

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Flores frescas todos los días
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Pequeños detalles,{' '}
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                grandes sentimientos
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              En Florería Marsihuvi creamos arreglos florales únicos que expresan emociones y 
              hacen especial cada momento de tu vida.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#catalogo" className="btn-primary flex items-center gap-2">
                <Flower2 className="w-5 h-5" />
                Ver Catálogo
              </a>
              <button onClick={handleWhatsApp} className="btn-secondary flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white">
                <FaWhatsapp className="w-5 h-5" />
                Consultar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Comprar */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 h-full">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <div className="w-10 h-10 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                      <span className="text-red-600 dark:text-red-400 font-bold text-lg">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 dark:text-white text-lg">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

          {/* Filtros por categoría */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
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