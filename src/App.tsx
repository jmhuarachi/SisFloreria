import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import { products, categories, contactInfo } from './data/products';
import ProductCategory from './components/ProductCategory';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar productos
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-script text-5xl md:text-6xl text-gray-800 dark:text-white mb-6">
            Pequeños detalles, grandes sentimientos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            En Florería Marsihuri creamos arreglos florales únicos que expresan emociones y hacen especial cada momento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#catalogo"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Ver Catálogo
            </a>
            <a
              href={`https://wa.me/51${contactInfo.phone.replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 border-2 border-red-500 dark:border-red-400"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Cómo Comprar */}
      <section id="como-comprar" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Cómo Comprar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '1', title: 'Elige', desc: 'Selecciona el producto que más te guste' },
              { step: '2', title: 'Envía', desc: 'Envía la imagen del producto seleccionado' },
              { step: '3', title: 'Consulta', desc: 'Consulta la tarifa de delivery' },
              { step: '4', title: 'Reserva', desc: 'Abona el 50% para reservar' },
              { step: '5', title: 'Personaliza', desc: 'Agrega peluches, globos, etc.' },
            ].map((step) => (
              <div key={step.step} className="bg-red-50 dark:bg-gray-700 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Nuestro Catálogo
          </h2>
          
          {/* Búsqueda y Filtros */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
              <div className="w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-80 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedCategory('todos')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === 'todos'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  Todos
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name.toLowerCase())}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.name.toLowerCase()
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Categorías */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <ProductCategory
                category={{ id: 0, name: 'Todos', description: 'Todos los productos', icon: '🌸' }}
                isActive={selectedCategory === 'todos'}
                onClick={() => setSelectedCategory('todos')}
              />
              {categories.map((category) => (
                <ProductCategory
                  key={category.id}
                  category={category}
                  isActive={selectedCategory === category.name.toLowerCase()}
                  onClick={() => setSelectedCategory(category.name.toLowerCase())}
                />
              ))}
            </div>
          </div>
          
          {/* Productos */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No se encontraron productos que coincidan con tu búsqueda.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Contáctanos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">
              ¿Tienes alguna consulta o necesitas un arreglo personalizado? ¡Estamos aquí para ayudarte!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href={`https://wa.me/51${contactInfo.phone.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3"
              >
                <span>📘</span>
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3"
              >
                <span>📷</span>
                <span>Instagram</span>
              </a>
            </div>
            <p className="mt-8 text-gray-500 dark:text-gray-400">
              También nos encuentras en TikTok como: {contactInfo.socialMedia.tiktok}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;