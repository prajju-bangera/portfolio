// components/Hero.js
import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const typewriterRef = useRef(null);

  useEffect(() => {
    // Particle Background
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
        this.alpha = Math.random() * 0.6 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Connect particles with lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.strokeStyle = '#6c63ff';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Typewriter Effect
    const typewriterText = typewriterRef.current;
    if (typewriterText) {
      const texts = ['Frontend Developer', 'Web Developer', 'UI/UX Enthusiast'];
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;

      const type = () => {
        const currentText = texts[textIndex];

        if (isDeleting) {
          typewriterText.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50;
        } else {
          typewriterText.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
          isDeleting = true;
          typingSpeed = 1500; // Pause at end
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          typingSpeed = 500; // Pause before starting new word
        }

        setTimeout(type, typingSpeed);
      };

      type();
    }

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // Text animation
    const textElement = textRef.current;
    if (textElement) {
      textElement.classList.add('animate-text');
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      
      {/* Animated background shapes */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="text-wrapper" ref={textRef}>
              <div className="greeting">Hello, I'm</div>
              <h1 className="hero-title">
                <span className="name-gradient">Sriraksha</span>
              </h1>
              <div className="typewriter-container">
                <h2 className="hero-subtitle">
                  <span ref={typewriterRef} className="typewriter-text"></span>
                  <span className="cursor">|</span>
                </h2>
              </div>
              <p className="hero-description">
                Crafting digital experiences with modern web technologies. 
                Passionate about creating responsive, accessible, and 
                user-friendly applications that make a difference.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  <span>View My Work</span>
                  <div className="btn-hover-effect"></div>
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <span>Let's Connect</span>
                  <div className="btn-hover-effect"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-wrapper">
              {/* Circular Image Container */}
              <div className="circle-container">
                <div className="circle-image-wrapper">
                  <img 
                    src="https://sp.yimg.com/ib/th/id/OIP.tPXqWCapzwE8vP5brEhv_AHaEo?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
                    alt="Sriraksha" 
                    className="circle-profile-img"
                  />
                  <div className="circle-glow"></div>
                  <div className="circle-border"></div>
                </div>
                
                {/* Floating tech badges around circle */}
                <div className="floating-badges">
                  <div className="badge badge-1" style={{ '--delay': '0s' }}>
                    <i className="fab fa-react"></i>
                  </div>
                  <div className="badge badge-2" style={{ '--delay': '1s' }}>
                    <i className="fab fa-js"></i>
                  </div>
                  <div className="badge badge-3" style={{ '--delay': '2s' }}>
                    <i className="fab fa-css3"></i>
                  </div>
                  <div className="badge badge-4" style={{ '--delay': '3s' }}>
                    <i className="fab fa-html5"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll to Explore</div>
          <div className="scroll-arrow">
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;