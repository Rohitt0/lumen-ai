import React from 'react';
import { motion } from 'framer-motion';

const FeaturesPage = ({ onNavigate }) => {
  return (
    <div style={{ color: 'white', padding: '2rem', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0D0D0D', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Playfair Display, serif' }}><u>Features</u></h1>
        <p style={{ maxWidth: '600px', marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
            <p>Lumen AI offers several features to assist users:
                <br/>
                -Brainstorming: Helps users develop and explore new ideas.
                <br/>
                -Coding: Assists with writing and generating code.
                <br/>
                -Summarization: Can summarize provided text.
                <br/>
                -Advice: Offers guidance and suggestions.
                <br/>
                -Web Search: Can search the web for information.
                <br/>
                -Deep Thinking: Provides in-depth analysis on topics.
                <br/>
                -File Upload: Users can upload files, including images, for context.</p>
            </p>
                    <button onClick={() => onNavigate('home')} style={{ marginTop: '2rem', color: 'lightblue', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                      &larr; Back to Home
                    </button>
                  </motion.div>
                </div>
              );
            };

export default FeaturesPage;
