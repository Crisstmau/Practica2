import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData, projectCategories } from '../data/projectsData';
import '../styles/Projects.css';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Mis Proyectos</h2>
        <p className="projects-subtitle">
          Una colección de proyectos en los que he trabajado, desde aplicaciones web hasta soluciones móviles
        </p>

        {/* Filtros de categorías */}
        <div className="projects-filters">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mensaje si no hay proyectos */}
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No hay proyectos en esta categoría</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;