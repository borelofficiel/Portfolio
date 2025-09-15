import React, { useState } from 'react';
import { FaEnvelope, FaEye, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Pour changer la photo, remplacez le chemin ci-dessous :
  // - Photo locale : "/votre-photo.jpg" (placez le fichier dans public/)
  // - URL externe : "https://localhost:3003//Photodeprofil.png"
  const profilePhotoSrc = "Photodeprofil.png";
  
  // Pour changer le CV, remplacez le chemin ci-dessous :
  // - CV local : "/votre-cv.pdf" (placez le fichier dans public/)
  // - URL externe : "https://localhost:3003//cv.pdf"
  const cvSrc = "CV_Borel_Tiefoue.pdf";

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Bonjour, je suis <span className="highlight">Borel Tiefoue</span>
            </h1>
            <h2 className="hero-subtitle">Développeur Web Front-End</h2>
            <p className="hero-description">Diplômé en Génie Logiciel, je crée des applications web modernes et performantes. 
Jeune développeur passionné, motivé et toujours prêt à apprendre de nouvelles technologies.
 </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <FaEnvelope />
                Me Contacter
              </a>
              <a href="#projects" className="btn btn-secondary">
                <FaEye />
                Voir Mes Projets
              </a>
              <a 
                href={cvSrc} 
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                download="CV_Borel_Tiefoue.pdf"
              >
                <FaDownload />
                Télécharger CV
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                {!imageError ? (
                  <img 
                    src={profilePhotoSrc}
                    alt="Borel Tiefoue" 
                    className="profile-photo"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="avatar-content">
                    <div className="avatar-icon">BT</div>
                    <div className="avatar-subtitle">Développeur Web</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;