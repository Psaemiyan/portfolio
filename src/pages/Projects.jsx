import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Brief description of the project',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/project1',
      liveLink: 'https://project1.com'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Brief description of the project',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      githubLink: 'https://github.com/yourusername/project2',
      liveLink: 'https://project2.com'
    }
    // Add more projects
  ]

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
