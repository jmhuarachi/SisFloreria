// src/data/products.ts
import type { Product, ProductCategoryType } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: 'Ramo Unitario - 1 Rosa',
    description: 'Elegante ramo con una rosa fresca perfecta para detalles especiales',
    price: 10,
    category: 'ramos',
    details: ['1 Rosa premium', 'Papel coreano decorativo', 'Listón satinado', 'Tarjeta personalizada'],
    featured: false,
    image: 'img1.jpeg',
    tags: ['pequeño', 'económico', 'romántico']
  },
  {
    id: 2,
    name: 'Ramo Unitario - 1 Girasol',
    description: 'Alegre ramo con un girasol que ilumina cualquier día',
    price: 10,
    category: 'ramos',
    details: ['1 Girasol fresco', 'Papel coreano', 'Listón natural', 'Tarjeta'],
    featured: false,
    image: 'img2.jpeg',
    tags: ['alegre', 'sencillo']
  },
  {
    id: 3,
    name: 'Ramo de 3 Rosas',
    description: 'Encantador ramo de rosas ideal para expresar cariño',
    price: 25,
    category: 'ramos',
    details: ['3 Rosas frescas', 'Papel coreano elegante', 'Listón decorativo', 'Tarjeta con mensaje'],
    featured: false,
    image: 'img3.jpeg',
    tags: ['clásico', 'romántico']
  },
  {
    id: 4,
    name: 'Ramo de 6 Rosas',
    description: 'Romo clásico de rosas perfecto para aniversarios',
    price: 45,
    category: 'ramos',
    featured: true,
    details: ['6 Rosas premium', 'Papel coreano premium', 'Listón de seda', 'Tarjeta dorada'],
    image: 'img4.jpeg',
    tags: ['aniversario', 'premium', 'recomendado']
  },
  {
    id: 5,
    name: 'Ramo de 12 Rosas',
    description: 'Impresionante ramo de rosas para ocasiones especiales',
    price: 80,
    category: 'ramos',
    featured: true,
    details: ['12 Rosas premium', 'Papel coreano importado', 'Listón premium', 'Tarjeta personalizada'],
    image: 'img5.jpeg',
    tags: ['especial', 'lujoso', 'recomendado']
  },
  {
    id: 6,
    name: 'Ramo Buchon Especial',
    description: 'Exclusivo buchon con lilium y rosas para eventos importantes',
    price: 130,
    category: 'ramos',
    featured: true,
    details: ['4 Lilium premium', '12 Rosas seleccionadas', 'Base especial decorada', 'Papel coreano premium'],
    image: 'img6.jpeg',
    tags: ['evento', 'exclusivo', 'premium']
  },
  {
    id: 7,
    name: 'Ramo de Tulipanes',
    description: 'Elegante ramo de tulipanes importados con peluche',
    price: 180,
    category: 'ramos',
    featured: true,
    details: ['6 Tulipanes importados', 'Peluche premium', 'Base decorativa', 'Papel especial'],
    image: 'img7.jpeg',
    tags: ['importado', 'exclusivo', 'lujo']
  },
  {
    id: 8,
    name: 'Arreglo Floral Básico',
    description: 'Encantador arreglo floral para decoración de interiores',
    price: 25,
    category: 'arreglos',
    details: ['3 Rosas frescas', 'Base cerámica elegante', 'Follaje decorativo', 'Tarjeta'],
    featured: false,
    image: 'img8.jpeg',
    tags: ['decorativo', 'económico']
  },
  {
    id: 9,
    name: 'Arreglo Floral Premium',
    description: 'Lujoso arreglo floral combinado para ocasiones especiales',
    price: 120,
    category: 'arreglos',
    featured: true,
    details: ['12 Rosas premium', 'Girasoles y lilium', 'Base cerámica premium', 'Decoración adicional'],
    image: 'img9.jpeg',
    tags: ['centro de mesa', 'lujoso']
  },
  {
    id: 10,
    name: 'Anturio',
    description: 'Hermosa planta de anturio para decoración duradera',
    price: 140,
    category: 'plantas',
    details: ['Planta Anturio sana', 'Adornos decorativos', 'Maceta premium', 'Cuidados incluidos'],
    image: 'img10.jpeg',
    featured: false
  },
  {
    id: 11,
    name: 'Orquídea',
    description: 'Elegante orquídea en maceta decorativa',
    price: 160,
    category: 'plantas',
    featured: true,
    details: ['Planta Orquídea premium', 'Adornos según temporada', 'Maceta decorativa', 'Guía de cuidados'],
    image: 'img11.jpeg',
    tags: ['duradero', 'decorativo']
  },
  {
    id: 12,
    name: 'Adorno "Te Amo"',
    description: 'Adorno decorativo con mensaje personalizable',
    price: 70,
    category: 'adornos',
    details: ['Adorno decorativo premium', 'Mensaje personalizable', 'Base estable', 'Embalaje especial'],
    image: 'img12.jpeg',
    featured: false
  }
];

export const categories: ProductCategoryType[] = [
  { 
    id: 1, 
    name: 'Ramos', 
    description: 'Ramos de flores naturales y artificiales', 
    icon: '🌹',
    color: 'from-red-500 to-pink-500'
  },
  { 
    id: 2, 
    name: 'Arreglos', 
    description: 'Arreglos florales creativos y elegantes', 
    icon: '💐',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    id: 3, 
    name: 'Plantas', 
    description: 'Plantas naturales para decoración', 
    icon: '🪴',
    color: 'from-green-500 to-emerald-500'
  },
  { 
    id: 4, 
    name: 'Adornos', 
    description: 'Adornos y detalles especiales', 
    icon: '🎀',
    color: 'from-blue-500 to-cyan-500'
  },
];

export const contactInfo = {
  phone: '989 807 482',
  socialMedia: {
    facebook: 'Florería Tacna D\'marsihuri',
    instagram: 'Floreria Tacna D\'marsihuri',
    tiktok: 'Floreria Tacna D\'marsihuri'
  },
  address: 'Tacna, Perú',
  businessHours: 'Lunes a Domingo: 9:00 AM - 4:00 PM'
};