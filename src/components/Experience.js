// components/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Tech Innovators Ltd.',
      position: 'Frontend Developer Intern',
      duration: 'Oct 2023 - Present',
      description: [
        'Developing responsive user interfaces using React.js and modern CSS',
        'Collaborating with design team to implement pixel-perfect designs',
        'Optimizing web applications for maximum speed and scalability',
        'Participating in code reviews and team meetings'
      ],
      type: 'Internship',
      durationMonths: '4 months'
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title fade-in-up">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item fade-in-up">
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="company">{exp.company}</h3>
                  <div className="duration-wrapper">
                    <span className="duration">{exp.duration}</span>
                    <span className="duration-months">{exp.durationMonths}</span>
                  </div>
                </div>
                <div className="position-type">
                  <h4 className="position">{exp.position}</h4>
                  <span className={`type ${exp.type.toLowerCase()}`}>{exp.type}</span>
                </div>
                <ul className="contributions">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="skills-used">
                  <span className="skills-label">Technologies: </span>
                  <span className="skills-list">React.js, JavaScript, HTML5, CSS3, Git, VS Code</span>
                </div>
                <div className="timeline-marker">
                  <div className="marker-circle"></div>
                </div>
              </div>
            </div>
          ))}
          
   
        </div>
      </div>
    </section>
  );
};

export default Experience;