// src/types/index.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'ramos' | 'arreglos' | 'plantas' | 'adornos';
  image?: string;
  details: string[];
  featured?: boolean;
}

export interface ProductCategoryType {
  id: number;
  name: string;
  description: string;
  icon: string;
}