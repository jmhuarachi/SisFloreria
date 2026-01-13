import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Clock, MapPin, Phone, Heart, AlertCircle } from 'lucide-react';
import { contactInfo } from '../data/products';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://facebook.com',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com',
      color: 'hover:text-pink-600 dark:hover:text-pink-400'
    },
    {
      name: 'TikTok',
      icon: FaTiktok,
      url: 'https://tiktok.com',
      color: 'hover:text-black dark:hover:text-white'
    }
  ];

  const importantInfo = [
    'No depositar sin previa cotización',
    'Reserva con 50% de anticipo',
    'No cambios/Devoluciones en arreglos listos',
    'Entrega con 30 min de tolerancia',
    'Personalización disponible'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-red-500 dark:ring-red-400">
                <img
                  src="/logo1.png"
                  alt="M"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=100&h=100&fit=crop';
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  Marsihuvi
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                  FLORERÍA
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Pequeños detalles causan grandes sentimientos. Somos una florería comprometida con crear 
              momentos especiales a través de nuestras flores, combinando calidad, diseño y pasión en cada arreglo.
            </p>
          </div>

          {/* Horario de atención */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-500" />
              Horario de Atención
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
              <span className="text-red-500 mt-1">📅</span>
              {contactInfo.businessHours}
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-red-500" />
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href={`https://wa.me/51${contactInfo.phone.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors group"
              >
                <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{contactInfo.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Información importante */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              Importante
            </h4>
            <ul className="space-y-2">
              {importantInfo.map((item, index) => (
                <li
                  key={index}
                  className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2"
                >
                  <span className="text-red-500 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-300 dark:border-gray-700 my-8" />

        {/* Redes sociales y copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Florería Marsihuvi. Todos los derechos reservados.
          </p>

          {/* Redes sociales */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${social.color} transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                  title={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Hecho con amor */}
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            Hecho con amor en Tacna
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;