// src/components/ProductCategory.tsx
import React from 'react';
import type { ProductCategoryType } from '../types';

interface ProductCategoryProps {
  category: ProductCategoryType;
  isActive: boolean;
  onClick: () => void;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 ${
        isActive 
          ? 'bg-red-500 text-white shadow-lg transform scale-105' 
          : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-red-50 dark:hover:bg-gray-700'
      }`}
    >
      <span className="text-3xl mb-3">{category.icon}</span>
      <h3 className="font-bold text-lg mb-2">{category.name}</h3>
      <p className={`text-sm ${isActive ? 'text-red-100' : 'text-gray-600 dark:text-gray-400'}`}>
        {category.description}
      </p>
    </button>
  );
};

export default ProductCategory;