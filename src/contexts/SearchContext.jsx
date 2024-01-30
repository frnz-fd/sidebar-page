// SearchContext.jsx
import React, { createContext, useState, useContext } from 'react';

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
  const [selectedFilter, setSelectedFilter] = useState('');

  // Function to update the search query
  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  // Function to update the selected filter
  const updateFilter = (filter) => {
    setSelectedFilter(filter);
  };

  // The value provided by the context provider for SearchContext
  const searchContextValue = {
    searchQuery,
    selectedFilter,
    updateSearchQuery,
    updateFilter,
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
};
