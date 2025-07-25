import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = ({ onNavigate }) => {
  return (
    <div style={{ color: 'white', padding: '2rem', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0D0D0D', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Playfair Display, serif' }}><u>About</u></h1>
        <p style={{ maxWidth: '600px', marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Lumen AI is a modern, intuitive chatbot designed to be your creative and intellectual partner. Fueled by powerful algorithms and a desire to help, Lumen is here to assist you in solving mysteries, brainstorming ideas, writing code, and much more. Our goal is to provide a seamless and intelligent conversational experience that feels both powerful and personal.
        </p>
        <button onClick={() => onNavigate('home')} style={{ marginTop: '2rem', color: 'lightblue', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
          &larr; Back to Home
        </button>
      </motion.div>
    </div>
  );
};

export default AboutPage;
