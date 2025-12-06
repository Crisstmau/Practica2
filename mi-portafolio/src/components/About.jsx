import React from 'react';
import { aboutInfo } from '../data/aboutData';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">{aboutInfo.title}</h2>
        
        <div className="about-content">
          <div className="about-text">
            {aboutInfo.paragraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-stats">
            {aboutInfo.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;