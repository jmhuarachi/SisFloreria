import React from 'react';
import { contactInfo } from '../data/products';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 
                            rounded-full flex items-center justify-center 
                            shadow-lg">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <div>
                <h2 className="font-script text-3xl text-white">Marsihuri</h2>
                <p className="text-red-400 font-bold tracking-wider">FLORERÍA</p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-xl">
              Pequeños detalles causan grandes sentimientos. Somos una florería comprometida 
              con crear momentos especiales a través de nuestras flores, 
              combinando calidad, diseño y pasión en cada arreglo.
            </p>
            
            {/* Horario de atención */}
            <div className="bg-gray-800/50 rounded-xl p-4 inline-block">
              <div className="flex items-center space-x-3">
                <span className="text-red-400">⏰</span>
                <div>
                  <p className="font-semibold text-white">Horario de Atención</p>
                  <p className="text-sm text-gray-400">{contactInfo.businessHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-3 
                         border-b border-gray-800">
              📞 Contacto
            </h3>
            <div className="space-y-5">
              <a 
                href={`https://wa.me/51${contactInfo.phone.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3 rounded-xl 
                         bg-gray-800/50 hover:bg-gray-800 
                         transition-all duration-300 
                         hover:scale-[1.02] group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 
                              rounded-full flex items-center justify-center 
                              group-hover:rotate-12 transition-transform">
                  <span className="text-white text-xl">💬</span>
                </div>
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="text-gray-400">{contactInfo.phone}</p>
                </div>
              </a>
              
              <div className="flex items-center space-x-4 p-3 rounded-xl bg-gray-800/50">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 
                              rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Ubicación</p>
                  <p className="text-gray-400">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Información importante */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-3 
                         border-b border-gray-800">
              ⚡ Importante
            </h3>
            <ul className="space-y-4">
              {[
                'No depositar sin previa cotización',
                'Reserva con 50% de anticipo',
                'No cambios/Devoluciones en arreglos listos',
                'Entrega con 30 min de tolerancia',
                'Personalización disponible'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Redes sociales y copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Florería Marsihuri. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-6">
              {['Facebook', 'Instagram', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white 
                           hover:scale-110 transition-all duration-300 
                           flex items-center space-x-2"
                >
                  <span>
                    {social === 'Facebook' ? '📘' : 
                     social === 'Instagram' ? '📷' : '🎵'}
                  </span>
                  <span>{social}</span>
                </a>
              ))}
            </div>
            
            <div className="text-sm text-gray-500">
              <span className="text-red-400">❤️</span> Hecho con amor en Tacna
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;