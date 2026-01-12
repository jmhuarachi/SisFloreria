// src/data/products.ts
import type { Product, ProductCategoryType } from "../types";


export const products: Product[] = [
  // Ramos Unitarios
  { id: 1, name: 'Ramo Unitario - 1 Rosa', description: 'Elegante ramo con una rosa', price: 10, category: 'ramos', details: ['1 Rosa', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 2, name: 'Ramo Unitario - 1 Girasol', description: 'Alegre ramo con un girasol', price: 10, category: 'ramos', details: ['1 Girasol', 'Papel coreano', 'Listón', 'Tarjeta'] },
  
  // Ramos Pequeños
  { id: 3, name: 'Ramo de 3 Rosas', description: 'Encantador ramo de rosas', price: 25, category: 'ramos', details: ['3 Rosas', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 4, name: 'Ramo de 3 Girasoles', description: 'Ramo vibrante de girasoles', price: 25, category: 'ramos', details: ['3 Girasoles', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 5, name: 'Ramo de 3 Gerberas', description: 'Colorido ramo de gerberas', price: 25, category: 'ramos', details: ['3 Gerberas', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 6, name: 'Ramo Combinado', description: 'Combinación de 2 girasoles y 2 rosas', price: 30, category: 'ramos', details: ['2 Girasoles', '2 Rosas', 'Papel coreano', 'Listón', 'Tarjeta'] },
  
  // Ramos Medianos
  { id: 7, name: 'Ramo de 6 Rosas', description: 'Romo clásico de rosas', price: 45, category: 'ramos', featured: true, details: ['6 Rosas', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 8, name: 'Ramo Mixto', description: 'Combinación de 1 girasol y 5 rosas', price: 45, category: 'ramos', details: ['1 Girasol', '5 Rosas', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 9, name: 'Ramo de 6 Girasoles', description: 'Ramo brillante de girasoles', price: 50, category: 'ramos', details: ['6 Girasoles', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 10, name: 'Ramo de 7 Girasoles', description: 'Ramo exuberante de girasoles', price: 55, category: 'ramos', details: ['7 Girasoles', 'Papel coreano', 'Listón', 'Tarjeta'] },
  
  // Ramos Grandes
  { id: 11, name: 'Ramo de 8 Rosas', description: 'Romo elegante de rosas', price: 70, category: 'ramos', details: ['8 Rosas', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 12, name: 'Ramo de 12 Rosas', description: 'Impresionante ramo de rosas', price: 80, category: 'ramos', featured: true, details: ['12 Rosas', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 13, name: 'Ramo de 12 Girasoles', description: 'Deslumbrante ramo de girasoles', price: 80, category: 'ramos', details: ['12 Girasoles', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 14, name: 'Ramo Combinado Especial', description: 'Combinación de 6 rosas y 4 girasoles', price: 75, category: 'ramos', details: ['6 Rosas', '4 Girasoles', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 15, name: 'Ramo Combinado Grande', description: 'Combinación de 4 girasoles y 8 rosas', price: 85, category: 'ramos', details: ['4 Girasoles', '8 Rosas', 'Papel coreano', 'Listón', 'Tarjeta'] },
  
  // Ramos Buchon
  { id: 16, name: 'Ramo Buchon Primaveral', description: 'Ramo primaveral con 12 gerberas', price: 80, category: 'ramos', details: ['12 Gerberas', 'Base decorativa', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 17, name: 'Ramo Buchon Clásico', description: 'Buchon con 1 girasol y 16 rosas', price: 110, category: 'ramos', details: ['1 Girasol', '16 Rosas', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 18, name: 'Ramo Buchon Mixto', description: 'Buchon con 6 girasoles y 14 rosas', price: 120, category: 'ramos', details: ['6 Girasoles', '14 Rosas', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 19, name: 'Ramo Buchon Especial', description: 'Buchon con 4 lilium y 12 rosas', price: 130, category: 'ramos', featured: true, details: ['4 Lilium', '12 Rosas', 'Base especial', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 20, name: 'Ramo Buchon Grande', description: 'Buchon con 24 rosas y 7 girasoles', price: 140, category: 'ramos', details: ['24 Rosas', '7 Girasoles', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 21, name: 'Ramo Buchon de 30 Rosas', description: 'Exclusivo buchon de 30 rosas', price: 150, category: 'ramos', details: ['30 Rosas', 'Papel coreano premium', 'Listón decorativo', 'Tarjeta personalizada'] },
  
  // Ramos Especiales
  { id: 22, name: 'Ramo de Amor', description: 'Romo romántico con peluche', price: 120, category: 'ramos', details: ['6 Rosas', 'Peluche', 'Base decorativa', 'Papel coreano', 'Listón', 'Tarjeta'] },
  { id: 23, name: 'Ramo de Tulipanes', description: 'Elegante ramo de tulipanes', price: 180, category: 'ramos', featured: true, details: ['6 Tulipanes', 'Peluche', 'Base decorativa', 'Papel coreano', 'Listón', 'Tarjeta'] },
  
  // Arreglos Florales
  { id: 24, name: 'Arreglo Floral Básico', description: 'Arreglo floral con 3 rosas', price: 25, category: 'arreglos', details: ['3 Rosas', 'Base cerámica', 'Tarjeta'] },
  { id: 25, name: 'Arreglo Floral con Aves', description: 'Arreglo floral con rosas y aves decorativas', price: 35, category: 'arreglos', details: ['4 Rosas', '2 Aves decorativas', 'Tarjeta'] },
  { id: 26, name: 'Arreglo Floral Mixto', description: 'Arreglo con 6 rosas y 3 girasoles', price: 60, category: 'arreglos', details: ['6 Rosas', '3 Girasoles', 'Base cerámica', 'Tarjeta'] },
  { id: 27, name: 'Arreglo Floral de Girasoles', description: 'Arreglo con 5 girasoles y 2 rosas', price: 70, category: 'arreglos', details: ['5 Girasoles', '2 Rosas', 'Base cerámica', 'Listón', 'Tarjeta'] },
  { id: 28, name: 'Bolsa Floral', description: 'Encantadora bolsa floral con rosas', price: 60, category: 'arreglos', details: ['3 Rosas', 'Flores adicionales', 'Bolsa floral', 'Tarjeta'] },
  { id: 29, name: 'Canasta Floral', description: 'Hermosa canasta con girasoles', price: 65, category: 'arreglos', details: ['7 Girasoles', 'Canasta decorativa', 'Listón', 'Tarjeta'] },
  { id: 30, name: 'Box Floral de Girasoles', description: 'Elegante box con 9 girasoles', price: 75, category: 'arreglos', details: ['9 Girasoles', 'Box (caja decorativa)', 'Tarjeta'] },
  { id: 31, name: 'Box Floral de Rosas', description: 'Box especial con 12 rosas', price: 90, category: 'arreglos', details: ['12 Rosas', 'Box (caja decorativa)', 'Tarjeta'] },
  { id: 32, name: 'Arreglo Floral de 12 Girasoles', description: 'Impresionante arreglo con 12 girasoles', price: 100, category: 'arreglos', details: ['12 Girasoles', 'Base cerámica', 'Follaje decorativo', 'Tarjeta'] },
  { id: 33, name: 'Arreglo Floral Premium', description: 'Lujoso arreglo floral', price: 120, category: 'arreglos', featured: true, details: ['12 Rosas', 'Girasoles y lilium', 'Base cerámica premium', 'Tarjeta'] },
  
  // Plantas
  { id: 34, name: 'Anturio', description: 'Hermosa planta de anturio', price: 140, category: 'plantas', details: ['Planta Anturio', 'Adornos según stock', 'Maceta decorativa'] },
  { id: 35, name: 'Orquídea', description: 'Elegante orquídea en maceta', price: 160, category: 'plantas', featured: true, details: ['Planta Orquídea', 'Adornos según stock', 'Maceta decorativa'] },
  
  // Adornos
  { id: 36, name: 'Adorno "Te Amo"', description: 'Adorno decorativo con mensaje', price: 70, category: 'adornos', details: ['Adorno decorativo', 'Mensaje personalizable', 'Base estable'] },
  { id: 37, name: 'Adorno Especial', description: 'Adorno floral decorativo', price: 45, category: 'adornos', details: ['Adorno floral', 'Base decorativa'] },
  { id: 38, name: 'Adorno Número 4', description: 'Adorno numérico decorativo', price: 50, category: 'adornos', details: ['Adorno numérico', 'Base decorativa', 'Decoración floral'] },
];

export const categories: ProductCategoryType[] = [
  { id: 1, name: 'Ramos', description: 'Ramos de flores naturales y artificiales', icon: '🌹' },
  { id: 2, name: 'Arreglos', description: 'Arreglos florales creativos y elegantes', icon: '💐' },
  { id: 3, name: 'Plantas', description: 'Plantas naturales para decoración', icon: '🪴' },
  { id: 4, name: 'Adornos', description: 'Adornos y detalles especiales', icon: '🎀' },
];

export const contactInfo = {
  phone: '989 807 482',
  socialMedia: {
    facebook: 'Florería Tacna D\'marsihuri',
    instagram: 'Floreria Tacna D\'marsihuri',
    tiktok: 'Floreria Tacna D\'marsihuri'
  }
};