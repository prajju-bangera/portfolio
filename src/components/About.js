// components/About.js
import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const techIcons = [
    { icon: '⚛️', name: 'React', color: '#61DAFB' },
    { icon: '🚀', name: 'Node.js', color: '#339933' },
    { icon: '📱', name: 'JavaScript', color: '#F7DF1E' },
    { icon: '💾', name: 'Python', color: '#3776AB' },
    { icon: '🔗', name: 'MongoDB', color: '#47A248' },
    { icon: '☁️', name: 'AWS', color: '#FF9900' },
    { icon: '⚡', name: 'TypeScript', color: '#3178C6' },
    { icon: '🎨', name: 'CSS3', color: '#1572B6' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: '#', color: '#333' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#', color: '#0077B5' },
    { name: 'Twitter', icon: 'twitter', url: '#', color: '#1DA1F2' },
    { name: 'Instagram', icon: 'instagram', url: '#', color: '#E4405F' }
  ];

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-text">
              About <span className="highlight">Me</span>
            </span>
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="bio-container">
              <p className="about-bio">
                I'm a passionate <span className="accent-text">Full-Stack Developer</span> with expertise in modern web technologies. 
                I love creating <span className="accent-text">scalable applications</span> and solving complex problems through 
                clean, efficient code. My journey in tech is driven by curiosity and a constant desire to learn and innovate.
              </p>
              
             <div
  className="social-links"
  style={{
    display: "flex",
    // justifyContent: "center",
    gap: "20px",
    padding: "5px",
    borderRadius: "20px",
  }}
>
  {socialLinks.map((social, index) => (
    <a
      key={social.name}
      href={social.url}
      className="social-link"
      style={{
        animationDelay: `${index * 0.1}s`,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(45deg, #6c63ff, #ff6b6b, #6c63ff)",
        color: "#6c63ff",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        fontSize: "1.3rem",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(108, 99, 255, 0.2)",
      }}
      aria-label={social.name}
    >
      <span className={`social-icon ${social.icon}`}></span>
      <span
        className="social-tooltip"
        style={{
          position: "absolute",
          bottom: "-30px",
          background: "#fff",
          color: "#6c63ff",
          padding: "4px 8px",
          borderRadius: "5px",
          fontSize: "0.8rem",
          opacity: "0",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          transform: "translateY(10px)",
        }}
      >
        {social.name}
      </span>
    </a>
  ))}
</div>

            </div>
          </div>
          
          <div className="about-visual">
            <div className="tech-sphere-container">
              <div className="tech-sphere">
                {techIcons.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="tech-orb"
                    style={{
                      '--orbit-radius': '160px',
                      '--orbit-duration': '25s',
                      '--orbit-delay': `${index * (25 / techIcons.length)}s`,
                      '--orb-color': tech.color
                    }}
                  >
                    <div className="orb-content">
                      <span className="tech-emoji">{tech.icon}</span>
                      <span className="tech-name">{tech.name}</span>
                    </div>
                    <div className="orb-glow"></div>
                  </div>
                ))}
                <div className="sphere-center">
                  <div className="center-glow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    
      </div>
    </section>
  );
};

export default About;