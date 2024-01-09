// SearchContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Create the SearchContext
const SearchContext = createContext();

// Create a custom hook to simplify consuming the SearchContext
export const useSearch = () => {
  const context = useContext(SearchContext);  
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

// Create the combined SearchContextProvider component
export const SearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to update the search query
  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  // The value provided by the context provider for SearchContext
  const searchContextValue = {
    searchQuery,
    updateSearchQuery,
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
};
