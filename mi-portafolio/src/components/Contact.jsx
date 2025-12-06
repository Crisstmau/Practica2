import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contactInfo } from '../data/contactData';
import { socialLinks } from '../data/navigationData';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  const [errors, setErrors] = useState({});

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario escribe
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus('sending');

    // Simulación de envío (aquí integrarías EmailJS, FormSpree, etc.)
    setTimeout(() => {
      console.log('Datos del formulario:', formData);
      setFormStatus('success');
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Resetear estado después de 5 segundos
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 2000);
  };

  const getIcon = (iconName) => {
    const icons = {
      Github: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      Linkedin: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      Mail: Mail
    };
    
    const Icon = icons[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">{contactInfo.title}</h2>
        <p className="contact-subtitle">{contactInfo.subtitle}</p>

        <div className="contact-content">
          {/* Columna izquierda - Información */}
          <div className="contact-info-wrapper">
            <p className="contact-description">{contactInfo.description}</p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <Mail size={24} />
                </div>
                <div className="detail-content">
                  <h4 className="detail-label">Email</h4>
                  <a href={`mailto:${contactInfo.email}`} className="detail-value">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {contactInfo.phone && (
                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <Phone size={24} />
                  </div>
                  <div className="detail-content">
                    <h4 className="detail-label">Teléfono</h4>
                    <a href={`tel:${contactInfo.phone}`} className="detail-value">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <MapPin size={24} />
                </div>
                <div className="detail-content">
                  <h4 className="detail-label">Ubicación</h4>
                  <p className="detail-value">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="contact-social">
              <h4 className="social-title">Encuéntrame en:</h4>
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                  >
                    {getIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="contact-form-wrapper">
            <div className="form-container">
              {formStatus === 'success' ? (
                <div className="form-success">
                  <CheckCircle size={48} />
                  <h3>¡Mensaje Enviado!</h3>
                  <p>{contactInfo.successMessage}</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="btn-back"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <div className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      {contactInfo.formFields.name.label}
                      <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={contactInfo.formFields.name.placeholder}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      disabled={formStatus === 'sending'}
                    />
                    {errors.name && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      {contactInfo.formFields.email.label}
                      <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contactInfo.formFields.email.placeholder}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      disabled={formStatus === 'sending'}
                    />
                    {errors.email && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      {contactInfo.formFields.subject.label}
                      <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={contactInfo.formFields.subject.placeholder}
                      className={`form-input ${errors.subject ? 'error' : ''}`}
                      disabled={formStatus === 'sending'}
                    />
                    {errors.subject && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      {contactInfo.formFields.message.label}
                      <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={contactInfo.formFields.message.placeholder}
                      rows={contactInfo.formFields.message.rows}
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      disabled={formStatus === 'sending'}
                    />
                    {errors.message && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={formStatus === 'sending'}
                    className="btn-submit"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <span className="spinner"></span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;