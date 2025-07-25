import React, { useState } from 'react';
import LandingPage from './LandingPage.jsx';
import AboutPage from './components/aboutpage.jsx';
import FeaturesPage from './components/featurespage.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'features':
        return <FeaturesPage onNavigate={setCurrentPage} />;
      default:
        // Pass the setCurrentPage function to LandingPage
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
