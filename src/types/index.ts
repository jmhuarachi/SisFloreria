// src/types/index.ts
export interface ProductVariant {
  id: number;
  name: string;
  color: string;
  image: string;
  hexColor: string;
  available: boolean;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'ramos' | 'ramos-buchon' | 'arreglos-florales' | 'plantas' | 'adornos' | 'ramos-artificiales' | 'globos-peluches';
  image?: string;
  details: string[];
  featured?: boolean;
  stock?: number;
  tags?: string[];
  variants?: ProductVariant[];
  hasVariants?: boolean;
}

export interface ProductCategoryType {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface ContactInfo {
  phone: string;
  address: string;
  businessHours: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
}