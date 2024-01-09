// AppContext
import React from 'react';
import { SearchContextProvider } from './SearchContext';
import { ProductContextProvider } from './ProductContext';

const AppContextProvider = ({ children }) => {
  return (
    <SearchContextProvider>
      <ProductContextProvider>
        {children}
      </ProductContextProvider>
    </SearchContextProvider>
  );
};

export default AppContextProvider;
