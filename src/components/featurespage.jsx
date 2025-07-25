// src/components/FeaturesPage.jsx
import React from 'react';

const FeaturesPage = ({ onNavigate }) => {
    return (
        <div style={{ color: 'white', padding: '2rem', textAlign: 'center', height: '100vh', backgroundColor: '#0D0D0D', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1>Our Features</h1>
            <p>Lumen AI offers several features to assist users:
                <br />
                - Brainstorming: Helps users develop and explore new ideas.
                <br />
                - Coding: Assists with writing and generating code.
                <br />
                - Summarization: Can summarize provided text.
                <br />
                - Advice: Offers guidance and suggestions.
                <br />
                - Web Search: Can search the web for information.
                <br />
                - Deep Thinking: Provides in-depth analysis on topics.
    
                File Upload: Users can upload files, including images, for context.</p>
            <button onClick={() => onNavigate('home')} style={{ marginTop: '1rem', color: 'lightblue', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                &larr; Back to Home
            </button>
        </div>
    );
};

export default FeaturesPage;
