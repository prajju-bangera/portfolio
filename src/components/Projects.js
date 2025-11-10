// components/Projects.js
import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
      image: '/project1.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web',
      github: 'https://github.com/prajwal/ecommerce',
      demo: 'https://ecommerce-demo.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: '/project2.jpg',
      tech: ['React', 'Firebase', 'Material-UI'],
      category: 'Web',
      github: 'https://github.com/prajwal/taskapp',
      demo: 'https://taskapp-demo.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts and interactive charts.',
      image: '/project3.jpg',
      tech: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      category: 'Web',
      github: 'https://github.com/prajwal/weather',
      demo: 'https://weather-demo.com'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations and dark mode.',
      image: '/project4.jpg',
      tech: ['React', 'CSS3', 'Framer Motion'],
      category: 'Web',
      github: 'https://github.com/prajwal/portfolio',
      demo: 'https://prajwal-portfolio.com'
    },
    {
      id: 5,
      title: 'Mobile Fitness App',
      description: 'A cross-platform mobile application for tracking workouts and nutrition.',
      image: '/project5.jpg',
      tech: ['React Native', 'Firebase', 'Redux'],
      category: 'Mobile',
      github: 'https://github.com/prajwal/fitness',
      demo: 'https://fitness-demo.com'
    },
    {
      id: 6,
      title: 'Data Visualization Tool',
      description: 'An interactive data visualization platform for analyzing and presenting complex datasets.',
      image: '/project6.jpg',
      tech: ['Python', 'D3.js', 'Flask'],
      category: 'Data Science',
      github: 'https://github.com/prajwal/dataviz',
      demo: 'https://dataviz-demo.com'
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title fade-in-up">Projects & Portfolio</h2>
        
       
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card fade-in-up">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;