import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import './index.css';

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <Hero />
      <About />
      <Projects />
      
      {/* Secciones temporales */}
      <section 
        id="skills" 
        style={{ 
          minHeight: '100vh',
          background: '#1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2 style={{ fontSize: '3rem', color: '#dc2626' }}>Habilidades</h2>
      </section>
      
      <section 
        id="contact" 
        style={{ 
          minHeight: '100vh',
          background: '#0f172a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2 style={{ fontSize: '3rem', color: '#dc2626' }}>Contacto</h2>
      </section>
    </div>
  );
}

export default App;