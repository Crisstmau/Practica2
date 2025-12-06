import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, heroButtons } from '../data/personalData';
import { socialLinks } from '../data/navigationData';
import '../styles/Hero.css';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      Github: Github,
      Linkedin: Linkedin,
      Mail: Mail
    };
    const Icon = icons[iconName];
    return Icon ? <Icon size={28} /> : null;
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Avatar - MODIFICADO: Ahora usa imagen en lugar de emoji */}
          <div className="hero-avatar">
            <div className="avatar-circle">
              {/* Reemplazado el emoji por una imagen */}
              <img 
                src={personalInfo.avatar} 
                alt={`Avatar de ${personalInfo.name}`}
                className="avatar-image"
              />
            </div>
            <div className="avatar-glow"></div>
          </div>

          {/* Texto Principal - CORREGIDO: "Hola_Sov" por "Hola, Soy" */}
          <h1 className="hero-title">
            Hola, Soy <span className="hero-name">{personalInfo.name}</span>
          </h1>

          <p className="hero-subtitle">{personalInfo.title}</p>
          
          <p className="hero-description">{personalInfo.description}</p>

          {/* Botones */}
          <div className="hero-buttons">
            {heroButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => scrollToSection(button.target)}
                className={`hero-btn ${button.type === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
              >
                {button.label}
              </button>
            ))}
          </div>

          {/* Redes Sociales */}
          <div className="hero-social">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.label}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>

          {/* Flecha animada */}
          <div className="hero-arrow">
            <ChevronDown size={32} className="arrow-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;