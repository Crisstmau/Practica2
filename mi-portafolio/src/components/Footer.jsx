import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { footerData } from '../data/footerData';
import { socialLinks } from '../data/navigationData';
import '../styles/Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      Github: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      Linkedin: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      Mail: Mail
    };
    
    const Icon = icons[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-logo">{footerData.brand.name}</h3>
            <p className="footer-tagline">{footerData.brand.tagline}</p>
            
            {/* Social Links */}
            <div className="footer-social">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={link.label}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h4 className="footer-section-title">{footerData.quickLinks.title}</h4>
            <ul className="footer-links-list">
              {footerData.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-links-section">
            <h4 className="footer-section-title">{footerData.resources.title}</h4>
            <ul className="footer-links-list">
              {footerData.resources.links.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className="footer-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="footer-link"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-links-section">
            <h4 className="footer-section-title">{footerData.legal.title}</h4>
            <ul className="footer-links-list">
              {footerData.legal.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {footerData.copyright.year} {footerData.copyright.author}.{' '}
              {footerData.copyright.text}.
            </p>
          </div>

          {footerData.madeWith.show && (
            <div className="footer-made-with">
              <p>
                {footerData.madeWith.text}{' '}
                <span className="heart-icon">{footerData.madeWith.icon}</span>{' '}
                usando {footerData.madeWith.tech}
              </p>
            </div>
          )}
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Volver arriba"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;