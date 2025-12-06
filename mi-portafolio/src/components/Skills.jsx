import React from 'react';
import { Code, Server, Wrench } from 'lucide-react';
import SkillBar from './SkillBar';
import { skillsData, additionalSkills } from '../data/skillsData';
import '../styles/Skills.css';

function Skills() {
  const getIcon = (iconName) => {
    const icons = {
      Code: Code,
      Server: Server,
      Wrench: Wrench
    };
    const Icon = icons[iconName];
    return Icon ? <Icon size={28} /> : null;
  };

  const skillCategories = [
    { key: 'frontend', data: skillsData.frontend },
    { key: 'backend', data: skillsData.backend },
    { key: 'tools', data: skillsData.tools }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Habilidades Técnicas</h2>
        <p className="skills-subtitle">
          Tecnologías y herramientas con las que trabajo día a día
        </p>

        {/* Categorías de habilidades principales */}
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.key} className="skill-category">
              <div className="category-header">
                <div 
                  className="category-icon"
                  style={{ color: category.data.color }}
                >
                  {getIcon(category.data.icon)}
                </div>
                <h3 className="category-title">{category.data.title}</h3>
              </div>

              <div className="skills-list">
                {category.data.skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill}
                    delay={categoryIndex * 200 + index * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Habilidades adicionales */}
        <div className="additional-skills">
          <h3 className="additional-title">Otras Competencias</h3>
          <div className="additional-grid">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index} 
                className="additional-skill"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="skill-dot"></span>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="skills-cta">
          <p className="cta-text">
            Siempre aprendiendo y mejorando mis habilidades
          </p>
          <div className="cta-badge">
            <span className="badge-icon">🚀</span>
            <span>En constante crecimiento</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;