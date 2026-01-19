// src/data/products.ts
import type { Product, ProductCategoryType } from "../types";

export const products: Product[] = [
  // Ramos Unitarios
  {
    id: 1,
    name: 'Ramo Unitario - 1 Rosa',
    description: 'Elegante ramo con una rosa fresca perfecta para detalles especiales',
    price: 10,
    category: 'ramos',
    details: ['1 Rosa premium', 'Papel coreano decorativo', 'Listón satinado', 'Tarjeta personalizada'],
    featured: false,
    image: 'ramos/unitario-rosa.jpg',
    tags: ['pequeño', 'económico', 'romántico'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rojo Pasión', image: 'ramos/unitario-rosa-rojo.jpg', hexColor: '#DC2626', available: true },
      { id: 2, name: 'Rosado', color: 'Rosado Suave', image: 'ramos/unitario-rosa-rosado.jpg', hexColor: '#EC4899', available: true },
      { id: 3, name: 'Blanco', color: 'Blanco Puro', image: 'ramos/unitario-rosa-blanco.jpg', hexColor: '#FFFFFF', available: true },
      { id: 4, name: 'Amarillo', color: 'Amarillo Brillante', image: 'ramos/unitario-rosa-amarillo.jpg', hexColor: '#FBBF24', available: true }
    ]
  },
  {
    id: 2,
    name: 'Ramo Unitario - 1 Girasol',
    description: 'Alegre ramo con un girasol que ilumina cualquier día',
    price: 10,
    category: 'ramos',
    details: ['1 Girasol fresco', 'Papel coreano', 'Listón natural', 'Tarjeta'],
    featured: false,
    image: 'ramos/unitario-girasol.png',
    tags: ['alegre', 'sencillo'],
    hasVariants: false
  },
  {
    id: 3,
    name: 'Ramo de 3 Rosas',
    description: 'Encantador ramo de rosas ideal para expresar cariño',
    price: 25,
    category: 'ramos',
    details: ['3 Rosas frescas', 'Papel coreano elegante', 'Listón decorativo', 'Tarjeta con mensaje'],
    featured: false,
    image: 'ramos/3-rosas.png',
    tags: ['clásico', 'romántico'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rojo Intenso', image: 'ramos/3-rosas-rojo.jpg', hexColor: '#B91C1C', available: true },
      { id: 2, name: 'Rosado', color: 'Rosado Claro', image: 'ramos/3-rosas-rosado.jpg', hexColor: '#F472B6', available: true }
    ]
  },

  {
    id: 4,
    name: '3 Girasoles',
    description: 'Ramo vibrante de girasoles que ilumina cualquier espacio',
    price: 25,
    category: 'ramos',
    details: ['3 Girasoles frescos', 'Papel coreano', 'Listón natural', 'Tarjeta'],
    image: 'ramos/3-girasoles.png',
    tags: ['alegre', 'vibrante'],
    hasVariants: false
  },
  {
    id: 5,
    name: 'Ramo 3 Gerberas',
    description: 'Alegre ramo con 3 gerberas de colores vibrantes',
    price: 25,
    category: 'ramos',
    details: ['3 Gerberas frescas', 'Papel coreano', 'Listón', 'Tarjeta'],
    image: 'ramos/3-gerberas.jpg',
    tags: ['colorido', 'alegre'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Gerbera Roja', image: 'ramos/gerberas-rosado.png', hexColor: '#EF4444', available: true },
      //{ id: 2, name: 'Naranja', color: 'Gerbera Naranja', image: 'ramos/gerberas-naranja.jpg', hexColor: '#F97316', available: true },
      //{ id: 3, name: 'Amarillo', color: 'Gerbera Amarilla', image: 'ramos/gerberas-amarillo.jpg', hexColor: '#EAB308', available: true }
    ]
  },
  {
    id: 6,
    name: ' Ramo 2 Girasoles + 2 Rosas',
    description: 'Combinación perfecta de alegría y romanticismo',
    price: 30,
    category: 'ramos',
    details: ['2 Girasoles frescos', '2 Rosas premium', 'Papel coreano', 'Listón', 'Tarjeta'],
    image: 'ramos/girasoles-rosas.jpg',
    tags: ['combinado', 'alegre'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Clásico', color: 'Girasol + Rosa Roja', image: 'ramos/girasol-rosa-roja.png', hexColor: '#CA8A04', available: true },
      //{ id: 2, name: 'Suave', color: 'Girasol + Rosa Rosada', image: 'ramos/girasol-rosa-rosada.jpg', hexColor: '#F472B6', available: true }
    ]
  },
  {
    id: 7,
    name: 'Ramo Rosal',
    description: 'Ramo clásico de rosas perfecto para aniversarios',
    price: 45,
    category: 'ramos',
    featured: true,
    details: ['6 Rosas premium', 'Papel coreano premium', 'Listón de seda', 'Tarjeta dorada'],
    image: 'ramos/6-rosas-rojo.png',
    tags: ['aniversario', 'premium', 'recomendado'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rojo', image: 'ramos/6-rosas-rojo.png', hexColor: '#DC2626', available: true },
      { id: 2, name: 'Blanco', color: 'Blanco Nieve', image: 'ramos/6-rosas-blanca.jpg', hexColor: '#F3F4F6', available: true },
      { id: 3, name: 'Rosado', color: 'Rosado Claro', image: 'ramos/6-rosas-rosado.jpg', hexColor: '#F472B6', available: true },
      { id: 4, name: 'Amarillo', color: 'Amarilla', image: 'ramos/6-rosas-amarillo.jpg', hexColor: '#EAB308', available: true }
    ]
  },
  {
    id: 8,
    name: '5 Rosas + 1 Girasol',
    description: 'Combinación perfecta de romanticismo y alegría',
    price: 45,
    category: 'ramos',
    details: ['5 Rosas premium', '1 Girasol fresco', 'Papel coreano', 'Listón', 'Tarjeta'],
    image: 'ramos/5rosas-1girasol.png',
    tags: ['combinado', 'especial'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rosas Rojas', image: 'ramos/5rosas-1girasol.png', hexColor: '#DC2626', available: true },
      //{ id: 2, name: 'Mixto', color: 'Colores Mixtos', image: 'ramos/combinado-mixto.jpg', hexColor: '#7C3AED', available: true }
    ]
  },
  {
    id: 9,
    name: 'Ramo 7 Girasoles',
    description: 'Ramo vibrante de girasoles que ilumina cualquier espacio',
    price: 55,
    category: 'ramos',
    details: ['7 Girasoles frescos', 'Papel coreano', 'Listón', 'Tarjeta'],
    image: 'ramos/7-girasoles.png',
    tags: ['alegre', 'vibrante'],
    hasVariants: false
  },
  {
    id: 10,
    name: 'Ramo 6 Girasoles',
    description: 'Ramo vibrante de girasoles que ilumina cualquier espacio',
    price: 50,
    category: 'ramos',
    details: ['6 Girasoles frescos', 'Papel coreano', 'Listón', 'Tarjeta'],
    image: 'ramos/6-girasoles.png',
    tags: ['alegre', 'vibrante'],
    hasVariants: false
  },


  {
    id: 11,
    name: 'Ramo de 10 Rosas',
    description: 'Hermoso ramo de 10 rosas para ocasiones especiales',
    price: 70,
    category: 'ramos',
    details: ['10 Rosas', 'Papel coreano', 'Listón', 'Tarjeta'],
    image: 'ramos/8-rosas-rojo.png',
    tags: ['especial', 'romántico'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rojo Profundo', image: 'ramos/8-rosas-rojo.png', hexColor: '#991B1B', available: true },
      //{ id: 2, name: 'Rosado', color: 'Rosado Romantic', image: 'ramos/8-rosas-rosado.png', hexColor: '#DB2777', available: true }
      { id: 2, name: 'Blanco', color: 'Blanco Nieve', image: 'ramos/10-rosas-blanco.jpg', hexColor: '#F3F4F6', available: true },
      { id: 3, name: 'Rosado', color: 'Rosado Claro', image: 'ramos/10-rosas-rosado.jpg', hexColor: '#F472B6', available: true },
    ]
  },
  {
    id: 12,
    name: 'Ramo de 12 Rosas',
    description: 'Hermoso ramo de 12 rosas para ocasiones especiales',
    price: 80,
    category: 'ramos',
    details: ['12 Rosas premium', 'Papel coreano', 'Listón decorativo', 'Tarjeta'],
    image: 'ramos/12-rosas-rojo.png',
    tags: ['especial', 'romántico'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rojo Profundo', image: 'ramos/12-rosas-rojo.png', hexColor: '#991B1B', available: true },
      //{ id: 2, name: 'Rosado', color: 'Rosado Romantic', image: 'ramos/12-rosas-rosado.jpg', hexColor: '#DB2777', available: true }
    ]
  },
  {
    id: 13,
    name: 'Ramo Combinado',
    description: 'Combinación perfecta de romanticismo y alegría',
    price: 75,
    category: 'ramos',
    details: ['6 Rosas ', '4 Girasoles frescos', 'Papel coreano', 'Listón', 'Tarjeta'],
    image: 'ramos/combinado-rojo.png',
    tags: ['combinado', 'especial'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rosas Rojas', image: 'ramos/combinado-rojo.png', hexColor: '#DC2626', available: true },
      { id: 2, name: 'Rosado', color: 'Rosas Rosado Claro', image: 'ramos/combinado-rosado.jpg', hexColor: '#F9A8D4', available: true },
      { id: 3, name: 'Blanco', color: 'Blanco Nieve', image: 'ramos/combinado-blanco.jpg', hexColor: '#F3F4F6', available: true },
    ]
  },
  {
    id: 14,
    name: 'Ramo Combinado',
    description: 'Combinación perfecta de romanticismo y alegría',
    price: 85,
    category: 'ramos',
    details: ['8 Rosas ', '4 Girasoles', 'Papel coreano', 'Listón', 'Tarjeta'],
    image: 'ramos/ramo-combinado-8r-4g.png',
    tags: ['combinado', 'especial'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rosas Rojas', image: 'ramos/ramo-combinado-8r-4g.png', hexColor: '#DC2626', available: true },
      //{ id: 2, name: 'Mixto', color: 'Colores Mixtos', image: 'ramos/combinado-mixto.jpg', hexColor: '#7C3AED', available: true }
    ]
  },

  {
    id: 15,
    name: 'Ramo Tulipan',
    description: 'Hermoso ramo de  Tulipanes para ocasiones especiales',
    price: 80,
    category: 'ramos',
    details: ['Tulipanes', 'Base y Peluche', 'Papel coreano', 'Listón', 'Tarjeta'],
    image: 'buchon/naranja-tulipanes.jpg',
    tags: ['especial', 'romántico'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Naranja', color: 'Tilipan Naranja', image: 'ramos/tulipanes-naranja.jpg', hexColor: '#F97316', available: true },
      { id: 2, name: 'Rosado', color: 'Rosado Romantic', image: 'ramos/tulipanes-rosado.jpg', hexColor: '#DB2777', available: true },
      { id: 3, name: 'Blanco', color: 'Blanco', image: 'ramos/tulipanes-blanca.jpg', hexColor: '#F3F4F6', available: true },
      { id: 4, name: 'Amarillo', color: 'Amarillo', image: 'ramos/tulipanes-amarillo.jpg', hexColor: '#FBBF24', available: true }
      
    ]
  },

  // Ramos Buchón
  {
    id: 16,
    name: 'Ramo Buchón 12 Girasoles',
    description: 'Impresionante buchón de 12 girasoles para ocasiones especiales',
    price: 80,
    category: 'ramos-buchon',
    featured: true,
    details: ['12 Girasoles premium', 'Papel coreano importado', 'Listón', 'Tarjeta personalizada'],
    image: 'buchon/12-girasoles.png',
    tags: ['buchón', 'especial', 'alegre'],
    hasVariants: false
  },
  {
    id: 17,
    name: 'Ramo Buchón 4 Lilium + 12 Rosas',
    description: 'Exclusivo buchón con lilium y rosas para eventos importantes',
    price: 130,
    category: 'ramos-buchon',
    featured: true,
    details: ['4 Lilium premium', '12 Rosas seleccionadas', 'Base especial decorada', 'Papel coreano premium'],
    image: 'buchon/lilium-rosas.png',
    tags: ['evento', 'exclusivo', 'premium'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Blanco', color: 'Lilium Blanco', image: 'buchon/lilium-rosas.png', hexColor: '#FFFFFF', available: true },
      //{ id: 2, name: 'Rosado', color: 'Lilium Rosado', image: 'buchon/lilium-rosado.png', hexColor: '#F9A8D4', available: true }
    ]
  },
  {
    id: 18,
    name: 'Ramo Primaveral 12 Gerberas',
    description: 'Buchón primaveral con 12 gerberas sobre base decorativa',
    price: 80,
    category: 'ramos-buchon',
    details: ['12 Gerberas frescas', 'Base decorativa', 'Follaje natural', 'Tarjeta'],
    image: 'buchon/12-gerberas.png',
    tags: ['primaveral', 'colorido'],
    hasVariants: false,
    // variants: [
    //   { id: 1, name: 'Mixto', color: 'Colores Mixtos', image: 'buchon/12-gerberas.png', hexColor: '#8B5CF6', available: true },
    //   { id: 2, name: 'Pastel', color: 'Tonos Pastel', image: 'buchon/gerberas-pastel.png', hexColor: '#C4B5FD', available: true }
    // ]
  },
  {
    id: 19,
    name: 'Ramo Buchón 6 Girasol + 14 Rosas',
    description: 'Espectacular combinación en formato buchón',
    price: 120,
    category: 'ramos-buchon',
    details: ['6 Girasoles premium', '14 Rosas seleccionadas', 'Papel coreano premium', 'Decoración adicional'],
    image: 'buchon/6girasol-14rosas.png',
    tags: ['combinado', 'espectacular'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rosas Rojas', image: 'buchon/6girasol-14rosas.png', hexColor: '#B91C1C', available: true },
      //{ id: 2, name: 'Blanco', color: 'Rosas Blancas', image: 'buchon/combinado-blanco.jpg', hexColor: '#F3F4F6', available: true }
    ]
  },
  {
    id: 20,
    name: 'Ramo Buchón 1 Girasol + 16 Rosas',
    description: 'Buchón elegante con toque de alegría',
    price: 110,
    category: 'ramos-buchon',
    details: ['1 Girasol', '16 Rosas frescas', 'Papel coreano', 'Listón decorativo', 'Tarjeta'],
    image: 'buchon/1girasol-16rosas.png',
    tags: ['elegante', 'romántico'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rosas Rojas', image: 'buchon/1girasol-16rosas.png', hexColor: '#DC2626', available: true },
      //{ id: 2, name: 'Rojo', color: 'Rosas Rojas', image: 'buchon/16rosas-rojo.jpg', hexColor: '#DC2626', available: true }
    ]
  },
  {
    id: 21,
    name: '24 Rosas + 7 Girasoles',
    description: 'Impresionante buchón para ocasiones muy especiales',
    price: 140,
    category: 'ramos-buchon',
    featured: true,
    details: ['24 Rosas premium', '7 Girasoles frescos', 'Papel coreano importado', 'Decoración premium'],
    image: 'buchon/24rosas-7girasoles.jpg',
    tags: ['lujoso', 'especial', 'premium'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rosas Rojas', image: 'buchon/24rosas-7girasoles.png', hexColor: '#991B1B', available: true },
      //{ id: 2, name: 'Blanco', color: 'Rosas Blancas', image: 'buchon/grande-blanco.png', hexColor: '#FFFFFF', available: true }
    ]
  },
  {
    id: 22,
    name: 'Ramo Buchon de 30 Rosas',
    description: 'Hermoso ramo de 30 rosas para ocasiones especiales',
    price: 150,
    category: 'ramos-buchon',
    details: ['30 Rosas premium', 'Papel coreano', 'Listón decorativo', 'Tarjeta'],
    image: 'ramos/30-rosas-rojo.png',
    tags: ['especial', 'romántico'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rojo Profundo', image: 'buchon/30-rosas-rojo.png', hexColor: '#991B1B', available: true },
      //{ id: 2, name: 'Rosado', color: 'Rosado Romantic', image: 'ramos/30-rosas-rosado.png', hexColor: '#DB2777', available: true }
    ]
  },

  {
    id: 23,
    name: 'Ramo Tulipan Mixto',
    description: 'Hermoso ramo de 6 Tulipanes para ocasiones especiales',
    price: 180,
    category: 'ramos-buchon',
    details: ['6 Tulipanes', 'Base y Peluche', 'Papel coreano', 'Listón', 'Tarjeta'],
    image: 'buchon/6-tulipanes.png',
    tags: ['especial', 'romántico'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rojo Profundo', image: 'buchon/6-tulipanes.png', hexColor: '#991B1B', available: true },
      //{ id: 2, name: 'Rosado', color: 'Rosado Romantic', image: 'buchon/6-tulipanes-rosado.jpg', hexColor: '#DB2777', available: true }
    ]
  },
  {
    id: 24,
    name: 'Ramo Amor',
    description: 'Hermoso ramo de 6 rosas para ocasiones especiales',
    price: 120,
    category: 'ramos-buchon',
    details: ['6 Rosas ', 'Peluche y Base', 'Papel coreano', 'Listón', 'Tarjeta'],
    image: 'buchon/6-rosas-amor.png',
    tags: ['especial', 'romántico'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rojo Profundo', image: 'buchon/6-rosas-amor.png', hexColor: '#991B1B', available: true },
      //{ id: 2, name: 'Rosado', color: 'Rosado Romantic', image: 'buchon/6-rosas-amor-rosado.jpg', hexColor: '#DB2777', available: true }
    ]
  },

  // Arreglos Florales
  {
    id: 25,
    name: 'Arreglo Floral 3 Rosas',
    description: 'Encantador arreglo floral para decoración de interiores',
    price: 25,
    category: 'arreglos-florales',
    details: ['3 Rosas frescas', 'Base cerámica elegante', 'Follaje decorativo', 'Tarjeta'],
    image: 'arreglos/3-rosas.jpg',
    tags: ['decorativo', 'económico'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rojo Clásico', image: 'arreglos/3-rosas-rojo.png', hexColor: '#F472B6', available: true },
      //{ id: 2, name: 'Rosado', color: 'Rosado Suave', image: 'arreglos/3-rosas-rosado.jpg', hexColor: '#F472B6', available: true }
    ]
  },
  {
    id: 26,
    name: 'Arreglo Floral 4 Rosas + 2 Ave',
    description: 'Arreglo especial con rosas y aves decorativas',
    price: 35,
    category: 'arreglos-florales',
    details: ['4 Rosas', '2 Ave', 'Tarjeta'],
    image: 'arreglos/4rosas-rojo.png',
    tags: ['decorativo', 'especial'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rosas Rojas', image: 'arreglos/4rosas-rojo.png', hexColor: '#DC2626', available: true },
      //{ id: 2, name: 'Blanco', color: 'Rosas Blancas', image: 'arreglos/4rosas-blanco.jpg', hexColor: '#FFFFFF', available: true }
    ]
  },
  {
    id: 27,
    name: 'Arreglo 6 Rosas + 3 Girasoles',
    description: 'Colorido arreglo floral para alegrar cualquier espacio',
    price: 60,
    category: 'arreglos-florales',
    details: ['6 Rosas frescas', '3 Girasoles', 'Base cerámica', 'Tarjeta'],
    image: 'arreglos/6rosas-3girasoles.png',
    tags: ['colorido', 'alegre'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rosas Rojas', image: 'arreglos/6rosas-3girasoles.png', hexColor: '#DC2626', available: true },
      //{ id: 2, name: 'Mixto', color: 'Colores Mixtos', image: 'arreglos/6rosas-mixto.jpg', hexColor: '#7C3AED', available: true }
    ]
  },
  {
    id: 28,
    name: 'Arreglo 2 Rosas + 5 Girasoles',
    description: 'Colorido arreglo floral para alegrar cualquier espacio',
    price: 60,
    category: 'arreglos-florales',
    details: ['2 Rosas frescas', '5 Girasoles', 'Base cerámica', 'Tarjeta'],
    image: 'arreglos/2rosas-5girasoles.png',
    tags: ['colorido', 'alegre'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rosas Rojas', image: 'arreglos/2rosas-5girasoles.png', hexColor: '#DC2626', available: true },
      //{ id: 2, name: 'Mixto', color: 'Colores Mixtos', image: 'arreglos/2rosas-5girasoles-mixto.png', hexColor: '#7C3AED', available: true }
    ]
  },
  {
    id: 29,
    name: 'Bolsa Floral 3 Rosas',
    description: 'Elegante bolsa floral con rosas premium',
    price: 60,
    category: 'arreglos-florales',
    details: ['3 Rosas premium', 'Flores adicionales', 'Bolsa floral decorativa', 'Tarjeta'],
    image: 'arreglos/bolsa-rojo.png',
    tags: ['portátil', 'elegante'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rosas Rojas', image: 'arreglos/bolsa-rojo.png', hexColor: '#B91C1C', available: true },
      //{ id: 2, name: 'Rosado', color: 'Rosas Rosadas', image: 'arreglos/bolsa-rosado.jpg', hexColor: '#DB2777', available: true }
    ]
  },
  {
    id: 30,
    name: 'Canasta Floral 7 Girasoles',
    description: 'Hermosa canasta con girasoles frescos',
    price: 65,
    category: 'arreglos-florales',
    details: ['7 Girasoles frescos', 'Canasta decorativa', 'Listón', 'Tarjeta'],
    image: 'arreglos/canasta-girasoles.png',
    tags: ['rústico', 'alegre'],
    hasVariants: false
  },
  {
    id: 31,
    name: 'Box Floral 12 Rosas',
    description: 'Elegante caja con 12 rosas premium',
    price: 90,
    category: 'arreglos-florales',
    details: ['12 Rosas premium', 'Caja decorativa', 'Tarjeta personalizada'],
    image: 'arreglos/box-rojo.png',
    tags: ['elegante', 'moderno'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Rojo', color: 'Rosas Rojas', image: 'arreglos/box-rojo.png', hexColor: '#DC2626', available: true },
      //{ id: 2, name: 'Blanco', color: 'Rosas Blancas', image: 'arreglos/box-blanco.png', hexColor: '#FFFFFF', available: true }
    ]
  },
  {
    id: 32,
    name: 'Box Girasol 9 Girasoles',
    description: 'Caja decorativa con 9 girasoles vibrantes',
    price: 75,
    category: 'arreglos-florales',
    details: ['9 Girasoles frescos', 'Caja decorativa', 'Tarjeta'],
    image: 'arreglos/box-9girasoles.png',
    tags: ['alegre', 'moderno'],
    hasVariants: false
  },
  {
    id: 33,
    name: 'Arreglo Floral',
    description: 'Lujoso arreglo floral combinado para ocasiones especiales',
    price: 120,
    category: 'arreglos-florales',
    featured: true,
    details: ['12 Rosas premium', 'Girasoles y lilium', 'Base cerámica premium', 'Decoración adicional'],
    image: 'arreglos/12rosas-arreglo.png',
    tags: ['centro de mesa', 'lujoso'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Mixto', color: 'Colores Mixtos', image: 'arreglos/12rosas-rojas-arreglo.png', hexColor: '#7C3AED', available: true },
      //{ id: 2, name: 'Pastel', color: 'Tonos Pastel', image: 'arreglos/premium-pastel.png', hexColor: '#C4B5FD', available: true }
    ]
  },
  {
    id: 34,
    name: 'Arreglo Girasol 12 Girasoles',
    description: 'Impresionante arreglo de girasoles en base cerámica',
    price: 100,
    category: 'arreglos-florales',
    details: ['12 Girasoles frescos', 'Base cerámica', 'Follaje natural', 'Tarjeta'],
    image: 'arreglos/12-girasoles.png',
    tags: ['alegre', 'vibrante'],
    hasVariants: false
  },

  // Plantas
  {
    id: 35,
    name: 'Anturio',
    description: 'Hermosa planta de anturio para decoración duradera',
    price: 140,
    category: 'plantas',
    details: ['Planta Anturio sana', 'Adornos decorativos', 'Maceta premium', 'Cuidados incluidos'],
    image: 'plantas/anturio-naranja.png',
    featured: false,
    tags: ['interior', 'duradera'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Naranja', color: 'Anturio Naranja', image: 'plantas/anturio-naranja.png', hexColor: '#F97316', available: true },
      { id: 2, name: 'Rosa', color: 'Anturio Rosa', image: 'plantas/anturio-rosa.png', hexColor: '#F472B6', available: true }
    ]
  },
  {
    id: 36,
    name: 'Orquídea',
    description: 'Elegante orquídea en maceta decorativa',
    price: 160,
    category: 'plantas',
    featured: true,
    details: ['Planta Orquídea', 'Adornos según temporada', 'Maceta decorativa', 'Guía de cuidados'],
    image: 'plantas/orquidea-blanca.png',
    tags: ['elegante', 'decorativa'],
    hasVariants: true,
    variants: [
      { id: 1, name: 'Blanca', color: 'Orquídea Blanca', image: 'plantas/orquidea-blanca.png', hexColor: '#FFFFFF', available: true },
      //{ id: 2, name: 'Morada', color: 'Orquídea Morada', image: 'plantas/orquidea-morada.png', hexColor: '#8B5CF6', available: true },
      { id: 3, name: 'Rosada', color: 'Orquídea Rosada', image: 'plantas/orquidea-rosada.png', hexColor: '#EC4899', available: true }
    ]
  },

  // Adornos
  {
    id: 37,
    name: 'Adorno 1',
    description: '',
    price: 70,
    category: 'adornos',
    details: ['Adorno decorativo', 'Mensaje personalizable', 'Base estable', 'Embalaje especial'],
    image: 'adornos/adorno1.png',
    featured: false,
    hasVariants: false,
    
  },
  {
    id: 38,
    name: 'Adorno 2',
    description: '',
    price: 70,
    category: 'adornos',
    details: ['Adorno decorativo', 'Mensaje personalizable', 'Base estable', 'Embalaje especial'],
    image: 'adornos/adorno2.png',
    featured: false,
    hasVariants: false,
    
  },
  
  {
    id: 39,
    name: 'Adorno 3',
    description: '',
    price: 70,
    category: 'adornos',
    details: ['Adorno decorativo', 'Mensaje personalizable', 'Base estable', 'Embalaje especial'],
    image: 'adornos/adorno3.png',
    featured: false,
    hasVariants: false,
    
  },
  {
    id: 40,
    name: 'Adorno 4',
    description: '',
    price: 70,
    category: 'adornos',
    details: ['Adorno decorativo', 'Mensaje personalizable', 'Base estable', 'Embalaje especial'],
    image: 'adornos/adorno4.png',
    featured: false,
    hasVariants: false,
    
  },
  {
    id: 41,
    name: 'Adorno 5',
    description: '',
    price: 70,
    category: 'adornos',
    details: ['Adorno decorativo', 'Mensaje personalizable', 'Base estable', 'Embalaje especial'],
    image: 'adornos/adorno5.png',
    featured: false,
    hasVariants: false,
    
  },
  

  // Ramos Artificiales (ejemplo)
  // {
  //   id: 42,
  //   name: 'Ramo Artificial de Rosas',
  //   description: 'Hermoso ramo de rosas artificiales para decoración permanente',
  //   price: 85,
  //   category: 'ramos-artificiales',
  //   details: ['12 Rosas artificiales premium', 'Follaje artificial', 'Base decorativa', 'Sin mantenimiento'],
  //   image: 'artificiales/rosas.jpg',
  //   tags: ['duradero', 'decorativo'],
  //   hasVariants: true,
  //   variants: [
  //     { id: 1, name: 'Rojo', color: 'Rojo Intenso', image: 'artificiales/rosas-rojo.jpg', hexColor: '#B91C1C', available: true },
  //     { id: 2, name: 'Blanco', color: 'Blanco Puro', image: 'artificiales/rosas-blanco.jpg', hexColor: '#FFFFFF', available: true },
  //     { id: 3, name: 'Rosado', color: 'Rosado Suave', image: 'artificiales/rosas-rosado.jpg', hexColor: '#F9A8D4', available: true }
  //   ]
  // },

  // Globos y Peluches (ejemplo)
  // {
  //   id: 44,
  //   name: 'Globos Metálicos',
  //   description: 'Set de globos metálicos para decoración de eventos',
  //   price: 30,
  //   category: 'globos-peluches',
  //   details: ['Set de 5 globos metálicos', 'Varillas decorativas', 'Cinta de colores'],
  //   image: 'globos-peluches/globos-metalicos.jpg',
  //   tags: ['decoración', 'fiesta'],
  //   hasVariants: true,
  //   variants: [
  //     { id: 1, name: 'Dorado', color: 'Globos Dorados', image: 'globos-peluches/globos-dorado.jpg', hexColor: '#FBBF24', available: true },
  //     { id: 2, name: 'Plateado', color: 'Globos Plateados', image: 'globos-peluches/globos-plateado.jpg', hexColor: '#E5E7EB', available: true },
  //     { id: 3, name: 'Rose Gold', color: 'Rose Gold', image: 'globos-peluches/globos-rosegold.jpg', hexColor: '#F9A8D4', available: true }
  //   ]
  // },
  // {
  //   id: 45,
  //   name: 'Peluche Corazón',
  //   description: 'Suave peluche en forma de corazón para regalos especiales',
  //   price: 40,
  //   category: 'globos-peluches',
  //   details: ['Peluche premium', 'Material suave', 'Lazo decorativo'],
  //   image: 'globos-peluches/peluche-corazon.jpg',
  //   tags: ['regalo', 'romántico'],
  //   hasVariants: true,
  //   variants: [
  //     { id: 1, name: 'Rojo', color: 'Corazón Rojo', image: 'globos-peluches/corazon-rojo.jpg', hexColor: '#EF4444', available: true },
  //     { id: 2, name: 'Rosado', color: 'Corazón Rosado', image: 'globos-peluches/corazon-rosado.jpg', hexColor: '#F472B6', available: true },
  //     { id: 3, name: 'Blanco', color: 'Corazón Blanco', image: 'globos-peluches/corazon-blanco.jpg', hexColor: '#FFFFFF', available: true }
  //   ]
  // }
];

export const categories: ProductCategoryType[] = [
  {
    id: 1,
    name: 'Ramos',
    description: 'Ramos de flores naturales frescas',
    icon: '🌹',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 2,
    name: 'Ramos Buchón',
    description: 'Ramos especiales en formato buchón',
    icon: '💐',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    name: 'Arreglos Florales',
    description: 'Arreglos en base, caja o canasta',
    icon: '🏺',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    name: 'Plantas',
    description: 'Plantas naturales decorativas',
    icon: '🪴',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    name: 'Adornos',
    description: 'Adornos y detalles especiales',
    icon: '🎀',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 6,
    name: 'Ramos Artificiales',
    description: 'Flores artificiales duraderas',
    icon: '🌸',
    color: 'from-gray-500 to-gray-700'
  },
  {
    id: 7,
    name: 'Globos y Peluches',
    description: 'Complementos para arreglos',
    icon: '🎈',
    color: 'from-pink-500 to-rose-500'
  },
];

export const contactInfo = {
  phone: '989 807 482',
  socialMedia: {
    facebook: '@floreriatacna.dsilvia',
    instagram: '@floreriatacna.dsilvia',
    tiktok: '@floreriatacna.dsilvia'
  },
  address: 'Tacna, Perú',
  businessHours: 'Lunes a Domingo: 9:00 AM - 4:00 PM'
};