import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductCategory from './components/ProductCategory';
import { products, categories, contactInfo } from './data/products';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(false);

  // Filtrar productos
  useEffect(() => {
    setLoading(true);
    
    const timer = setTimeout(() => {
      const filtered = products.filter(product => {
        const matchesCategory = selectedCategory === 'todos' || 
                               product.category === selectedCategory;
        
        const matchesSearch = searchQuery === '' || 
                            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.tags?.some(tag => 
                              tag.toLowerCase().includes(searchQuery.toLowerCase())
                            );
        
        return matchesCategory && matchesSearch;
      });
      
      setFilteredProducts(filtered);
      setLoading(false);
    }, 300); // Debounce de 300ms

    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  const categoryMap = {
    'todos': { name: 'Todos', icon: '🌸', color: 'from-gray-500 to-gray-700' },
    'ramos': categories[0],
    'arreglos': categories[1],
    'plantas': categories[2],
    'adornos': categories[3]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white 
                   dark:from-gray-900 dark:to-gray-800 
                   transition-colors duration-300">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section id="inicio" className="py-20 relative overflow-hidden">
          {/* Fondo decorativo */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-pink-50/50 
                        dark:from-gray-900/50 dark:to-gray-800/50" />
          <div className="absolute top-10 right-10 w-64 h-64 bg-red-200/20 
                        dark:bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-200/20 
                        dark:bg-pink-500/10 rounded-full blur-3xl" />
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-script text-5xl md:text-7xl text-gray-800 dark:text-white mb-6">
                Pequeños detalles,<br />
                <span className="text-gradient">grandes sentimientos</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 
                          leading-relaxed">
                En Florería Marsihuri creamos arreglos florales únicos que 
                expresan emociones y hacen especial cada momento de tu vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#catalogo"
                  className="btn-primary py-4 px-10 text-lg"
                >
                  🌸 Ver Catálogo
                </a>
                <a
                  href={`https://wa.me/51${contactInfo.phone.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-4 px-10 text-lg"
                >
                  💬 Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo Comprar */}
        <section id="como-comprar" className="py-20 bg-white dark:bg-gray-800/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                ¿Cómo comprar?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Sigue estos simples pasos para adquirir tus flores favoritas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: '1', icon: '🌺', title: 'Elige', desc: 'Selecciona el producto que más te guste' },
                { step: '2', icon: '📱', title: 'Envía', desc: 'Envía la imagen del producto seleccionado' },
                { step: '3', icon: '💰', title: 'Consulta', desc: 'Consulta la tarifa de delivery' },
                { step: '4', icon: '💳', title: 'Reserva', desc: 'Abona el 50% para reservar' },
                { step: '5', icon: '🎁', title: 'Personaliza', desc: 'Agrega peluches, globos, etc.' }
              ].map((step) => (
                <div key={step.step} 
                     className="bg-gradient-to-br from-white to-gray-50 
                              dark:from-gray-800 dark:to-gray-900 
                              rounded-2xl p-6 text-center 
                              shadow-lg hover:shadow-xl 
                              transition-all duration-300 
                              hover:-translate-y-2 
                              border border-gray-100 dark:border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 
                                text-white rounded-full flex items-center justify-center 
                                text-2xl font-bold mx-auto mb-4 
                                shadow-md">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full 
                                flex items-center justify-center text-sm font-bold 
                                mx-auto -mt-8 mb-2 shadow">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Catálogo */}
        <section id="catalogo" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Nuestro Catálogo
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Descubre nuestra colección de arreglos florales cuidadosamente diseñados
              </p>
            </div>
            
            {/* Búsqueda */}
            <div className="mb-12">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="🔍 Buscar por nombre, descripción o tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl 
                             border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-800 
                             text-gray-800 dark:text-white 
                             focus:outline-none focus:ring-2 focus:ring-red-500 
                             focus:border-transparent 
                             placeholder-gray-500 dark:placeholder-gray-400
                             shadow-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 
                               text-gray-400 hover:text-red-500"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            {/* Filtros por categoría */}
            <div className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(categoryMap).map(([key, category]) => (
                  <ProductCategory
                    key={key}
                    category={{
                      id: 0,
                      name: category.name,
                      description: key === 'todos' ? 'Todos los productos' : '',
                      icon: category.icon,
                      color: category.color
                    }}
                    isActive={selectedCategory === key}
                    onClick={() => setSelectedCategory(key)}
                  />
                ))}
              </div>
            </div>
            
            {/* Contador de resultados */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600 dark:text-gray-400">
                Mostrando <span className="font-bold text-red-500">{filteredProducts.length}</span> productos
                {selectedCategory !== 'todos' && ` en ${categoryMap[selectedCategory as keyof typeof categoryMap]?.name}`}
                {searchQuery && ` para "${searchQuery}"`}
              </p>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedCategory('todos')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                           ${selectedCategory === 'todos'
                             ? 'bg-red-500 text-white'
                             : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  Todos
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name.toLowerCase())}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                             ${selectedCategory === category.name.toLowerCase()
                               ? 'bg-red-500 text-white'
                               : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Productos */}
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 
                              border-t-2 border-b-2 border-red-500"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Buscando productos...
                </p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">🌷</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  No encontramos productos
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                  No hay productos que coincidan con tu búsqueda. 
                  Intenta con otros términos o categorías.
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
        <section id="contacto" className="py-20 bg-gradient-to-br 
                                        from-red-50 to-pink-50 
                                        dark:from-gray-800 dark:to-gray-900">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Contáctanos
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                ¿Tienes alguna consulta o necesitas un arreglo personalizado? 
                ¡Estamos aquí para ayudarte a crear el detalle perfecto!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href={`https://wa.me/51${contactInfo.phone.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-green-500 to-emerald-600 
                           hover:from-green-600 hover:to-emerald-700 
                           text-white font-bold py-5 px-6 rounded-2xl 
                           transition-all duration-300 
                           shadow-lg hover:shadow-xl hover:-translate-y-1 
                           flex items-center justify-center space-x-3"
                >
                  <span className="text-2xl">💬</span>
                  <span className="text-lg">WhatsApp</span>
                </a>
                
                <a
                  href="#"
                  className="bg-gradient-to-br from-blue-500 to-indigo-600 
                           hover:from-blue-600 hover:to-indigo-700 
                           text-white font-bold py-5 px-6 rounded-2xl 
                           transition-all duration-300 
                           shadow-lg hover:shadow-xl hover:-translate-y-1 
                           flex items-center justify-center space-x-3"
                >
                  <span className="text-2xl">📘</span>
                  <span className="text-lg">Facebook</span>
                </a>
                
                <a
                  href="#"
                  className="bg-gradient-to-br from-pink-500 to-rose-600 
                           hover:from-pink-600 hover:to-rose-700 
                           text-white font-bold py-5 px-6 rounded-2xl 
                           transition-all duration-300 
                           shadow-lg hover:shadow-xl hover:-translate-y-1 
                           flex items-center justify-center space-x-3"
                >
                  <span className="text-2xl">📷</span>
                  <span className="text-lg">Instagram</span>
                </a>
              </div>
              
              <p className="mt-12 text-gray-600 dark:text-gray-400">
                También nos encuentras en TikTok como: 
                <span className="font-semibold text-gray-800 dark:text-white ml-2">
                  {contactInfo.socialMedia.tiktok}
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;