import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './PiedDePage.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Borel TIEFOUE</h3>
            <p>Développeur Web et mobile passionné par la création d'applications modernes et performantes.</p>
            <div className="social-links">
              <a href="mailto:boreltiefoue@gmail.com" className="social-link" title="Email">
                <FaEnvelope />
              </a>
              <a href="https://linkedin.com/in/borel tiefoue" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/borelofficiel" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Compétences</h4>
            <ul>
              <li>Développement Frontend</li>
              <li>Développement Backend</li>
              <li>Bases de données</li>
              <li>Infographie</li>
              <li>Photographie</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Technologies</h4>
            <ul>
              <li>PHP</li>
              <li>React & Angular</li>
              <li>MySQL & SQL</li>
              <li>Figma</li>
              <li>PhotoShop</li>
              <li>PremierPro</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="boreltiefoue@gmail.com">boreltiefoue@gmail.com</a></li>
              <li>Bingerville, Côte d'Ivoire</li>
              <li>Disponible pour projets</li>
              <li>Etudiant</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Borel tiefoue. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;