import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      message: '',
    });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const contactMethods = [
    {
      icon: 'fas fa-phone',
      title: 'DIRECT LINE',
      primary: '+255 788 576 062',
      secondary: '+255 744 090 455',
      tertiary: '+255 769 200 455',
      description: '24/7',
      color: 'var(--primary-orange)'
    },
    {
      icon: 'fas fa-envelope',
      title: 'EMAIL SUPPORT',
      primary: 'projects@countrydrilling.co.tz',
      secondary: 'info@countrydrilling.co.tz',
      description: 'Response within 2 hours',
      color: 'var(--accent-blue)'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'HEAD OFFICE',
      primary: 'Arusha Industrial Area',
      secondary: 'Plot 123, Sokoine Road',
      description: 'Tanzania, East Africa',
      color: 'var(--success-green)'
    },
    {
      icon: 'fas fa-clock',
      title: 'OPERATING HOURS',
      primary: 'Mon-Fri: 7:00 AM - 7:00 PM',
      secondary: 'Sat: 8:00 AM - 4:00 PM',
      description: 'Available 24/7',
      color: 'var(--neutral-600)'
    }
  ];

  const projectTypes = [
    'Industrial Water Systems',
    'Agricultural Irrigation',
    'Municipal Water Supply',
    'Mining Operations',
    'Commercial Buildings',
    'Residential Communities',
    'Urgent Water Access',
    'Other (Please Specify)'
  ];

  return (
    <div className="contact-page">
      {/* Industrial Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, var(--primary-navy) 0%, var(--neutral-800) 100%)`,
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.5
        }}></div>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="align-items-center text-center text-white">
            <Col lg={8} className="mx-auto">
              <div className="mb-4">
                <span style={{
                  background: 'var(--primary-orange)',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '50px',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  <i className="fas fa-headset me-2"></i>
                  Professional Support
                </span>
              </div>
              <h1 style={{
                fontSize: '4rem',
                fontWeight: '900',
                lineHeight: '1.1',
                marginBottom: '2rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                CONTACT OUR
                <span style={{ color: 'var(--primary-orange)' }}> TECHNICAL</span>
                <br />SPECIALISTS
              </h1>
              <p style={{
                fontSize: '1.375rem',
                lineHeight: '1.6',
                marginBottom: '3rem',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '700px',
                margin: '0 auto 3rem'
              }}>
                Get expert consultation for your industrial water drilling project. 
                Our technical team provides professional guidance and rapid response support.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="section-padding" style={{ background: 'var(--neutral-50)' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                MULTIPLE WAYS TO REACH US
              </h2>
              <p className="lead" style={{ color: 'var(--neutral-600)' }}>
                Choose your preferred method of communication for immediate assistance
              </p>
            </Col>
          </Row>
          <Row>
            {contactMethods.map((method, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '1px solid var(--neutral-200)',
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${method.color}, ${method.color}dd)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                    boxShadow: `0 8px 16px ${method.color}33`
                  }}>
                    <i className={method.icon} style={{ fontSize: '1.75rem', color: 'white' }}></i>
                  </div>
                  <h4 style={{ 
                    color: 'var(--primary-navy)', 
                    marginBottom: '1rem',
                    fontWeight: '700',
                    fontSize: '1.1rem'
                  }}>
                    {method.title}
                  </h4>
                  <p style={{ 
                    color: 'var(--neutral-700)', 
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    fontSize: '1rem'
                  }}>
                    {method.primary}
                  </p>
                  <p style={{ 
                    color: 'var(--neutral-600)', 
                    marginBottom: method.tertiary ? '0.5rem' : '1rem',
                    fontSize: '0.95rem'
                  }}>
                    {method.secondary}
                  </p>
                  {method.tertiary && (
                    <p style={{ 
                      color: 'var(--neutral-600)', 
                      marginBottom: '1rem',
                      fontSize: '0.95rem'
                    }}>
                      {method.tertiary}
                    </p>
                  )}
                  <div style={{
                    background: 'var(--neutral-50)',
                    padding: '0.75rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    color: method.color,
                    fontWeight: '600'
                  }}>
                    {method.description}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Professional Contact Form */}
      <section className="section-padding" style={{ background: 'white' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="text-center mb-5">
                <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                  PROJECT CONSULTATION REQUEST
                </h2>
                <p className="lead" style={{ color: 'var(--neutral-600)' }}>
                  Submit your project details for professional assessment and quotation
                </p>
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '3rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--neutral-200)'
              }}>
                {showSuccess && (
                  <div style={{
                    background: 'var(--success-green)',
                    color: 'white',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <i className="fas fa-check-circle" style={{ fontSize: '1.5rem', marginRight: '1rem' }}></i>
                    <div>
                      <strong>Message Sent Successfully!</strong><br />
                      Our technical team will contact you within 2 hours during business hours.
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-4">
                      <label style={{
                        display: 'block',
                        marginBottom: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--primary-navy)',
                        fontSize: '0.95rem'
                      }}>
                        <i className="fas fa-user me-2" style={{ color: 'var(--primary-orange)' }}></i>
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        style={{
                          width: '100%',
                          padding: '1rem 1.25rem',
                          border: '2px solid var(--neutral-200)',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-orange)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                      />
                    </Col>
                    <Col md={6} className="mb-4">
                      <label style={{
                        display: 'block',
                        marginBottom: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--primary-navy)',
                        fontSize: '0.95rem'
                      }}>
                        <i className="fas fa-envelope me-2" style={{ color: 'var(--primary-orange)' }}></i>
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email address"
                        style={{
                          width: '100%',
                          padding: '1rem 1.25rem',
                          border: '2px solid var(--neutral-200)',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-orange)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                      />
                    </Col>
                    <Col md={6} className="mb-4">
                      <label style={{
                        display: 'block',
                        marginBottom: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--primary-navy)',
                        fontSize: '0.95rem'
                      }}>
                        <i className="fas fa-phone me-2" style={{ color: 'var(--primary-orange)' }}></i>
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+255 XXX XXX XXX"
                        style={{
                          width: '100%',
                          padding: '1rem 1.25rem',
                          border: '2px solid var(--neutral-200)',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-orange)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                      />
                    </Col>
                    <Col md={6} className="mb-4">
                      <label style={{
                        display: 'block',
                        marginBottom: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--primary-navy)',
                        fontSize: '0.95rem'
                      }}>
                        <i className="fas fa-building me-2" style={{ color: 'var(--primary-orange)' }}></i>
                        COMPANY/ORGANIZATION
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter company name"
                        style={{
                          width: '100%',
                          padding: '1rem 1.25rem',
                          border: '2px solid var(--neutral-200)',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-orange)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                      />
                    </Col>
                    <Col xs={12} className="mb-4">
                      <label style={{
                        display: 'block',
                        marginBottom: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--primary-navy)',
                        fontSize: '0.95rem'
                      }}>
                        <i className="fas fa-cogs me-2" style={{ color: 'var(--primary-orange)' }}></i>
                        PROJECT TYPE *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '1rem 1.25rem',
                          border: '2px solid var(--neutral-200)',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          backgroundColor: 'white'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-orange)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </Col>
                    <Col xs={12} className="mb-4">
                      <label style={{
                        display: 'block',
                        marginBottom: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--primary-navy)',
                        fontSize: '0.95rem'
                      }}>
                        <i className="fas fa-clipboard-list me-2" style={{ color: 'var(--primary-orange)' }}></i>
                        PROJECT DETAILS *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Please provide detailed information about your water drilling project including location, depth requirements, water usage, timeline, and any specific technical requirements..."
                        style={{
                          width: '100%',
                          padding: '1rem 1.25rem',
                          border: '2px solid var(--neutral-200)',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          resize: 'vertical'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-orange)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                      />
                    </Col>
                    <Col xs={12} className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{
                          padding: '1rem 3rem',
                          fontSize: '1.1rem',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        <i className="fas fa-paper-plane me-2"></i>
                        SUBMIT PROJECT REQUEST
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industrial CTA Section */}
      <section style={{
        background: `linear-gradient(135deg, var(--primary-navy) 0%, var(--neutral-900) 100%)`,
        padding: '6rem 0',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23f97316" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="text-center text-white">
            <Col lg={8} className="mx-auto">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '800',
                marginBottom: '1.5rem',
                color: 'white'
              }}>
                PRIORITY DRILLING SERVICES
              </h2>
              <p style={{
                fontSize: '1.25rem',
                marginBottom: '3rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6'
              }}>
                Need immediate water access? Our priority response team is available 24/7 
                for critical water drilling situations across Tanzania.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <a 
                  href="tel:+255788576062"
                  className="btn btn-primary btn-lg"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="fas fa-phone me-2"></i>
                  PRIORITY HOTLINE
                </a>
                <a 
                  href="mailto:priority@countrydrilling.co.tz"
                  className="btn btn-secondary btn-lg"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="fas fa-envelope me-2"></i>
                  URGENT EMAIL
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Office Location Map */}
      <section className="section-padding" style={{ background: 'var(--neutral-50)' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                VISIT OUR OFFICE
              </h2>
              <p className="lead" style={{ color: 'var(--neutral-600)' }}>
                Located in Arusha, Tanzania - Your trusted partner for hydrogeological solutions
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div 
                className="map-container"
                style={{
                  width: '100%',
                  height: '450px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                  border: '1px solid var(--neutral-200)',
                  marginBottom: '2rem'
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.234567890123!2d36.680691!3d-3.370532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjInMTMuOSJTIDM2wrA0MCc1MC41IkU!5e0!3m2!1sen!2stz!4v1234567890123!5m2!1sen!2stz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Country Drilling Office Location - Arusha, Tanzania"
                ></iframe>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{
                padding: '2rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <Row>
                  <Col md={6}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h5 style={{ 
                        color: 'var(--primary-navy)', 
                        marginBottom: '0.75rem',
                        fontWeight: '700'
                      }}>
                        <i className="fas fa-map-marker-alt me-2" style={{ color: 'var(--primary-orange)' }}></i>
                        Office Address
                      </h5>
                      <p style={{ 
                        color: 'var(--neutral-600)', 
                        marginBottom: '0',
                        lineHeight: '1.6'
                      }}>
                        Arusha Industrial Area<br />
                        Plot 123, Sokoine Road<br />
                        Arusha, Tanzania
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h5 style={{ 
                        color: 'var(--primary-navy)', 
                        marginBottom: '0.75rem',
                        fontWeight: '700'
                      }}>
                        <i className="fas fa-directions me-2" style={{ color: 'var(--success-green)' }}></i>
                        Get Directions
                      </h5>
                      <a 
                        href="https://maps.app.goo.gl/4bT1HUSb8FJnb8rY6"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'var(--accent-blue)',
                          textDecoration: 'none',
                          fontWeight: '600',
                          display: 'inline-flex',
                          alignItems: 'center'
                        }}
                      >
                        <i className="fas fa-external-link-alt me-2"></i>
                        Open in Google Maps
                      </a>
                    </div>
                  </Col>
                </Row>
                <div style={{
                  background: 'var(--neutral-50)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  marginTop: '1rem'
                }}>
                  <Row>
                    <Col md={4} className="mb-3 mb-md-0">
                      <div className="text-center">
                        <i className="fas fa-clock" style={{ 
                          fontSize: '1.5rem', 
                          color: 'var(--primary-orange)',
                          marginBottom: '0.5rem'
                        }}></i>
                        <p style={{ 
                          margin: '0',
                          fontWeight: '600',
                          color: 'var(--neutral-700)',
                          fontSize: '0.9rem'
                        }}>
                          Mon-Fri: 7:00 AM - 7:00 PM
                        </p>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                      <div className="text-center">
                        <i className="fas fa-calendar-alt" style={{ 
                          fontSize: '1.5rem', 
                          color: 'var(--accent-blue)',
                          marginBottom: '0.5rem'
                        }}></i>
                        <p style={{ 
                          margin: '0',
                          fontWeight: '600',
                          color: 'var(--neutral-700)',
                          fontSize: '0.9rem'
                        }}>
                          Sat: 8:00 AM - 4:00 PM
                        </p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="text-center">
                        <i className="fas fa-phone-alt" style={{ 
                          fontSize: '1.5rem', 
                          color: 'var(--success-green)',
                          marginBottom: '0.5rem'
                        }}></i>
                        <p style={{ 
                          margin: '0',
                          fontWeight: '600',
                          color: 'var(--neutral-700)',
                          fontSize: '0.9rem'
                        }}>
                          Available: 24/7
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
