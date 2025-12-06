import React from 'react';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      
      {/* Secciones temporales para probar */}
      <section 
        id="home" 
        style={{ 
          minHeight: '100vh', 
          paddingTop: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '4rem', 
            background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            Sección Home
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.2rem' }}>Header funcionando correctamente ✓</p>
        </div>
      </section>
      
      <section 
        id="about" 
        style={{ 
          minHeight: '100vh',
          background: '#1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2 style={{ fontSize: '3rem', color: '#dc2626' }}>Sobre Mí</h2>
      </section>
      
      <section 
        id="projects" 
        style={{ 
          minHeight: '100vh',
          background: '#0f172a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2 style={{ fontSize: '3rem', color: '#dc2626' }}>Proyectos</h2>
      </section>
      
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