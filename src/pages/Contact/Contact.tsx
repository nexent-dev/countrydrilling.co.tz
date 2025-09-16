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
      primary: '+255 784 123 456',
      secondary: '+255 754 987 654',
      description: '24/7 Emergency Support',
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
      description: 'Emergency: 24/7 Available',
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
    'Emergency Water Access',
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
                    marginBottom: '1rem',
                    fontSize: '0.95rem'
                  }}>
                    {method.secondary}
                  </p>
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
                EMERGENCY DRILLING SERVICES
              </h2>
              <p style={{
                fontSize: '1.25rem',
                marginBottom: '3rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6'
              }}>
                Need immediate water access? Our emergency response team is available 24/7 
                for critical water drilling situations across Tanzania.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a 
                  href="tel:+255784123456"
                  className="btn btn-primary btn-lg"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="fas fa-phone me-2"></i>
                  EMERGENCY HOTLINE
                </a>
                <a 
                  href="mailto:emergency@countrydrilling.co.tz"
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
    </div>
  );
};

export default Contact;
