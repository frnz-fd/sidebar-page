// ProductContext.jsx
import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [smallProducts, setSmallProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoriesResponse = await axios.get('https://dummyjson.com/products/categories');
        setCategories(categoriesResponse.data);

        // Fetch products
        const productsResponse = await axios.get('https://dummyjson.com/products');
        const productsData = productsResponse.data.products.map(product => ({
          ...product,
          thumbnailUrl: product.thumbnail,
        }));

        setProducts(productsData);

        // For SmallPostCardComponent
        const smallProductsData = productsData.slice(0, 3); // Get the first 3 products
        setSmallProducts(smallProductsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const value = useMemo(() => ({
    products,
    smallProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
  }), [products, smallProducts, categories, selectedCategory]);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
