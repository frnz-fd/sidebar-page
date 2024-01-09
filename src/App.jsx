// App.jsx
import React from 'react';
import AppContextProvider from './contexts/AppContext';
import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

const YourApp = () => {
  return (
    <AppContextProvider>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </AppContextProvider>
  );
};

export default YourApp;
