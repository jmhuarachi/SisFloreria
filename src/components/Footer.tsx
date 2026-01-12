import React from 'react';
import { contactInfo } from '../data/products';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de la Florería */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h2 className="font-script text-2xl">Marsihuri</h2>
                <p className="text-red-400 font-semibold">FLORERÍA</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Pequeños detalles causan grandes sentimientos. Somos una florería comprometida con crear momentos especiales a través de nuestras flores.
            </p>
            <p className="text-gray-400 text-sm">
              Florería Tacna - D'Marsihuri
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white">📱</span>
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a 
                    href={`https://wa.me/51${contactInfo.phone.replace(/\s/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white">📧</span>
                </div>
                <div>
                  <p className="font-semibold">Redes Sociales</p>
                  <p className="text-gray-300">
                    Facebook: {contactInfo.socialMedia.facebook}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Información importante */}
          <div>
            <h3 className="text-xl font-bold mb-6">Información Importante</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                No depositar si no se ha realizado alguna cotización.
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                No se permiten cambios ni devoluciones si el arreglo ya está listo.
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Reserva con 50% de anticipo vía Yape, Plin o Transferencia.
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Entrega con 30 minutos de tolerancia.
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Florería Marsihuri. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;