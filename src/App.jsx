// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import MainComponent from './components/MainComponent';
import PostDetailComponent from './components/PostDetailComponent';
import AppContextProvider from './contexts/AppContext';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<MainComponent />} />
          <Route path="/post/:id" element={<PostDetailComponent />} />
        </Routes>
        <FooterComponent />
      </Router>
    </AppContextProvider>
  );
};

export default App;