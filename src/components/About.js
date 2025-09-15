import React from 'react';
import './APropos.css';

const About = () => {
  return (
    // Section principale "À Propos"
    <section id="about" className="about">
      <div className="about-container">
        {/* Header de la section avec titre et sous-titre */}
        <div className="section-header">
          <h2 className="section-title">À Propos</h2>
          <p className="section-subtitle">Découvrez mon parcours et ma passion</p>
        </div>
        
        {/* Contenu principal de la section */}
        <div className="about-content">
          
          {/* Partie texte décrivant ton parcours et tes objectifs */}
          <div className="about-text">
            <h3>Qui suis-je ?</h3>
            <p>
              Je suis <strong>Borel Tiefoue</strong>, diplômé en Génie Logiciel, passionné par le développement web et le design d'interfaces.
              J'aime créer des applications simples, intuitives et performantes en utilisant <strong>React, PHP et Angular</strong>.
            </p>
            
            <h3>Mon parcours</h3>
            <p>
              Je cherche à approfondir mes compétences en <strong>Data Science</strong>, tout en continuant à explorer le <strong>UX/UI design</strong>
              pour rendre mes applications plus accessibles et agréables à utiliser. J'apprends constamment de nouvelles technologies
              et méthodes pour améliorer mes compétences techniques et créatives.
            </p>
            
            <h3>Ma formation</h3>
            <p>
              Licence en Génie Logiciel obtenue à l'IIPEA (Institut International Polytechnique des l'Elites d'Abidjan). 
              Je vais entamer un <strong>Master en Data Science</strong>. Je crois en un code propre et organisé, et en des interfaces
              utilisateur bien pensées pour offrir la meilleure expérience possible.
            </p>
          </div>
          
          {/* Statistiques personnelles / infos clés */}
          <div className="about-stats">

            <div className="stat-item">
              <div className="stat-number">Licence</div>
              <div className="stat-label">Génie Logiciel</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Projets réalisés</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Technologies maîtrisées</div>
            </div>
            
            {/* la div du master
            <div className="stat-item">
              <div className="stat-number">Master</div>
              <div className="stat-label">Data Science</div>
            </div> */}
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
