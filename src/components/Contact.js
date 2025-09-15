import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', ''

  useEffect(() => {
    emailjs.init("w_Dnohw_ZKYRcoObo");
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error('Tous les champs sont obligatoires');
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        portfolio_name: 'Borel Tiefoue - Portfolio',
        date: new Date().toLocaleDateString('fr-FR'),
        time: new Date().toLocaleTimeString('fr-FR')
      };

      const response = await emailjs.send(
        'service_tx0rv3q',
        'template_wjuqlmh',
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Je suis jeune et en quête de stage, n'hésitez pas à me contacter !</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>À propos de moi</h3>
            <p>
              Je suis un jeune développeur motivé pour apprendre et contribuer à des projets intéressants.
            </p>
            
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>boreltiefoue@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaPhone /></div>
                <div className="contact-details">
                  <h4>Téléphone</h4>
                  <p>+225 0701620597</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div className="contact-details">
                  <h4>Localisation</h4>
                  <p>Bingerville, Côte d'Ivoire</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaDownload /></div>
                <div className="contact-details">
                  <h4>CV</h4>
                  <a href="cv.pdf" target="_blank" rel="noopener noreferrer" download="cv.pdf" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                    Télécharger mon CV
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required disabled={isSubmitting} />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required disabled={isSubmitting} rows={5}></textarea>
              </div>

              <button type="submit" className={`submit-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>

            {submitStatus === 'success' && (
              <div className="status-message success">
                <FaEnvelope />
                <p>Message envoyé avec succès ! Je vous répondrai bientôt.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                <FaEnvelope />
                <p>Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
