// IMPORTATIONS IMAGES DE MES SITES  
import ALLODOC1 from '../assets/capturedecran/ALLODOC1.jpg';
import ALLODOC2 from '../assets/capturedecran/ALLODOC2.jpg';
import ALLODOC3 from '../assets/capturedecran/ALLODOC3.jpg';
import ALLODOC4 from '../assets/capturedecran/ALLODOC4.jpg';
import ALLODOC5 from '../assets/capturedecran/ALLODOC5.jpg';
import ALLODOC6 from '../assets/capturedecran/ALLODOC6.jpg';

import MAZOPAGNE1 from '../assets/capturedecran/MAZOPAGNE1.png';
import MAZOPAGNE2 from '../assets/capturedecran/MAZOPAGNE2.png';
import MAZOPAGNE3 from '../assets/capturedecran/MAZOPAGNE3.png';
import MAZOPAGNE4 from '../assets/capturedecran/MAZOPAGNE4.png';
import MAZOPAGNE5 from '../assets/capturedecran/MAZOPAGNE5.png';

import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaStethoscope } from 'react-icons/fa';
import './Projets.css';

const Projects = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState('');
  const [currentImageTitle, setCurrentImageTitle] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState(null);

  const handleImageError = (projectId, screenshotIndex) => {
    setImageErrors(prev => ({
      ...prev,
      [`${projectId}-${screenshotIndex}`]: true
    }));
  };

  const openModal = (imageIndex, project) => {
    setCurrentProject(project);
    setCurrentImageIndex(imageIndex);
    setCurrentImageSrc(project.screenshots[imageIndex]);
    setCurrentImageTitle(project.title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImageSrc('');
    setCurrentImageTitle('');
    setCurrentImageIndex(0);
    setCurrentProject(null);
  };

  const nextImage = () => {
    if (!currentProject) return;
    const nextIndex = (currentImageIndex + 1) % currentProject.screenshots.length;
    setCurrentImageIndex(nextIndex);
    setCurrentImageSrc(currentProject.screenshots[nextIndex]);
  };

  const prevImage = () => {
    if (!currentProject) return;
    const prevIndex = currentImageIndex === 0 ? currentProject.screenshots.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setCurrentImageSrc(currentProject.screenshots[prevIndex]);
  };

  const projects = [
    {
      id: 1,
      title: 'AlloDoc',
      description: 'Application de gestion de rendez-vous médicaux permettant aux patients de réserver et gérer leurs consultations en ligne.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
      icon: FaStethoscope,
      stack: 'Full Stack PHP + HTML/CSS',
      screenshots: [
        ALLODOC1,
        ALLODOC2,
        ALLODOC3,
        ALLODOC4,
        ALLODOC5,
        ALLODOC6
      ]
    },
    {
      id: 2,
      title: 'Mazopagne',
      description: "Application de la FIF pour la promotion du PAGNE DE LA VICTOIRE. Victoire des Éléphants à la CAN 2023, symbole d'unité et de fierté nationale. Objectifs : Accompagner l'équipe vers la CAN 2025 (Maroc).",
      liveUrl: 'https://www.mazopagne.com',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
      icon: FaStethoscope,
      stack: 'Full Stack PHP + Bootstrap + HTML/CSS',
      screenshots: [
        MAZOPAGNE1,
        MAZOPAGNE2,
        MAZOPAGNE3,
        MAZOPAGNE4,
        MAZOPAGNE5
      ]
    }
  ];

  return (
    <>
      <section id="projects" className="projects">
        <div className="projects-container">
          <div className="section-header">
            <h2 className="section-title">Mes Projets</h2>
            <p className="section-subtitle">Découvrez mes réalisations récentes</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="project-image">
                    <div className="project-icon">
                      <IconComponent />
                    </div>
                    <div className="project-stack">{project.stack}</div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    {project.liveUrl && (
                      <div className="project-live" style={{ marginBottom: '20px' }}>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-link">
                          Voir le projet en ligne
                        </a>
                      </div>
                    )}

                    <div className="project-screenshots">
                      <h4 className="screenshots-title">
                        Captures d'écran du projet ({project.screenshots.length} images)
                      </h4>
                      <div className="screenshots-grid">
                        {project.screenshots.map((screenshot, idx) => {
                          const errorKey = `${project.id}-${idx}`;
                          const hasError = imageErrors[errorKey];

                          return (
                            <div 
                              key={idx} 
                              className="screenshot-item"
                              data-index={`${idx + 1}`}
                              title={`Cliquez pour agrandir - ${project.title} - Capture ${idx + 1}`}
                              onClick={() => !hasError && openModal(idx, project)}
                            >
                              {!hasError ? (
                                <img 
                                  src={screenshot} 
                                  alt={`${project.title} - Capture ${idx + 1}`}
                                  className="screenshot-image"
                                  onError={() => handleImageError(project.id, idx)}
                                />
                              ) : (
                                <div className="screenshot-placeholder">
                                  <div className="placeholder-content">
                                    <span className="placeholder-icon">📸</span>
                                    <p>Capture {idx + 1}</p>
                                    <small>Image non trouvée</small>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {modalOpen && currentImageSrc && currentImageTitle && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{currentImageTitle} - Capture {currentImageIndex + 1}</h3>
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>
            <div className="modal-content">
              <button className="modal-nav prev" onClick={prevImage}>
                <FaChevronLeft />
              </button>
              <div className="modal-image-container">
                <img 
                  src={currentImageSrc} 
                  alt={`${currentImageTitle} - Capture ${currentImageIndex + 1}`}
                  className="modal-image"
                />
              </div>
              <button className="modal-nav next" onClick={nextImage}>
                <FaChevronRight />
              </button>
            </div>
            <div className="modal-footer">
              <p>Utilisez les flèches ou cliquez sur les boutons pour naviguer</p>
              <p>Appuyez sur Échap pour fermer</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
