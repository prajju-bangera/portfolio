import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: ".NET", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { name: "REST API", img: "https://cdn-icons-png.flaticon.com/512/1305/1305398.png" },
    { name: "Android", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  ];

  const programming = [
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  ];

  const tools = [
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "NPM", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Netlify", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
  ];

  const cardAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="skills-section white-bg">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-text">
            Skills & <span className="highlight">Tech Stack</span>
          </span>
        </h2>
        <div className="section-divider"></div>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            custom={index}
          >
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="skills-category">
        <h2>Programming</h2>
        <div className="skills-grid">
          {programming.map((item, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              custom={index}
            >
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h2>Tech & Tools</h2>
        <div className="skills-grid">
          {tools.map((item, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              custom={index}
            >
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
