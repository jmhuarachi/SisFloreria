export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'ramos' | 'arreglos' | 'plantas' | 'adornos';
  image?: string;
  details: string[];
  featured?: boolean;
  stock?: number;
  tags?: string[];
}

export interface ProductCategoryType {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
}