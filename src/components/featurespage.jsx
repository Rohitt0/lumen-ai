// src/components/FeaturesPage.jsx
import React from 'react';

const FeaturesPage = ({ onNavigate }) => {
  return (
    <div style={{ color: 'white', padding: '2rem', textAlign: 'center', height: '100vh', backgroundColor: '#0D0D0D', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Our Features</h1>
      <p>Here are some of the amazing features of Lumen AI.</p>
      <button onClick={() => onNavigate('home')} style={{ marginTop: '1rem', color: 'lightblue', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
        &larr; Back to Home
      </button>
    </div>
  );
};

export default FeaturesPage;