import React, { useState, useEffect, useRef } from 'react';
import '../styles/SkillBar.css';

function SkillBar({ skill, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={skillRef} className="skill-bar-wrapper">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <div className="skill-meta">
          <span className="skill-years">{skill.years}</span>
          <span className="skill-level">{skill.level}%</span>
        </div>
      </div>
      <div className="skill-bar-container">
        <div 
          className="skill-bar-fill"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transition: 'width 1s ease-out'
          }}
        >
          <div className="skill-bar-glow"></div>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;