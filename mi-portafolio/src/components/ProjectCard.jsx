import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-image"
        />
        <div className="project-overlay">
          <div className="project-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label="Ver código en GitHub"
            >
              <Github size={24} />
              <span>Código</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label="Ver demo en vivo"
            >
              <ExternalLink size={24} />
              <span>Demo</span>
            </a>
          </div>
        </div>
        {project.featured && (
          <div className="project-badge">Destacado</div>
        )}
      </div>

      <div className="project-content">
        <div className="project-category">{project.category}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;