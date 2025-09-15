import React from 'react';
import { 
  FaReact, FaAngular, FaPhp, FaJs, FaHtml5, 
  FaGitAlt, FaDocker, FaGithub, FaDatabase 
} from 'react-icons/fa';
import { SiMysql, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiCanva, SiAdobepremierepro, SiPython } from 'react-icons/si';
import './Competences.css';

const Skills = () => {
  const skills = [

    // Frontend
    {name: 'PHP',level: 70, category: 'Frontend', icon:FaPhp},
    { name: 'React', level: 50, category: 'Frontend', icon: FaReact },
    { name: 'Angular', level: 50, category: 'Frontend', icon: FaAngular },
    { name: 'JavaScript', level: 50, category: 'Frontend', icon: FaJs },
    { name: 'HTML/CSS', level: 90, category: 'Frontend', icon: FaHtml5 },

    // Backend
    { name: 'PHP', level: 70, category: 'Backend', icon: FaPhp },
    { name: 'Python', level: 50, category: 'Backend', icon: SiPython },

    // Base de données
    { name: 'MySQL', level: 80, category: 'Base de données', icon: SiMysql },

    // Outils graphiques
    { name: 'Photoshop', level: 80, category: 'Outils graphiques', icon: SiAdobephotoshop },
    { name: 'Figma', level: 80, category: 'Outils graphiques', icon: SiFigma },
    { name: 'Canva', level: 50, category: 'Outils graphiques', icon: SiCanva },
    { name: 'Premiere Pro', level: 50, category: 'Outils graphiques', icon: SiAdobepremierepro },
    { name: 'Illustrator', level: 50, category: 'Outils graphiques', icon: SiAdobeillustrator },

  ];

  const categories = ['Frontend', 'Backend', 'Base de données', 'Outils graphiques',];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Compétences</h2>
          <p className="section-subtitle">Mes technologies et outils préférés</p>
        </div>
        
        <div className="skills-content">
          {categories.map(category => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-header">
                          <div className="skill-info">
                            <IconComponent className="skill-icon" />
                            <span className="skill-name">{skill.name}</span>
                          </div>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
