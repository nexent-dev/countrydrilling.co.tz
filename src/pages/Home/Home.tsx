import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Industrial Hero Section */}
      <section className="hero-section" style={{
        background: `linear-gradient(135deg, var(--primary-navy) 0%, var(--neutral-800) 100%)`,
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.1
        }}></div>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="hero-content text-white">
                <div className="mb-4">
                  <span className="badge" style={{
                    background: 'var(--primary-orange)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '50px',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    <i className="fas fa-shield-alt me-2"></i>
                    Licensed & Certified Since 2008
                  </span>
                </div>
                <h1 style={{
                  fontSize: '4rem',
                  fontWeight: '900',
                  lineHeight: '1.1',
                  marginBottom: '2rem',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  SCIENTIFIC BOREHOLE
                  <span style={{ color: 'var(--primary-orange)' }}> DRILLING</span>
                  <br />EXPERTS
                </h1>
                <p style={{
                  fontSize: '1.375rem',
                  lineHeight: '1.6',
                  marginBottom: '3rem',
                  color: 'rgba(255,255,255,0.9)',
                  maxWidth: '600px'
                }}>
                  Advanced hydrogeological surveys and scientific drilling methods for sustainable water access. 
                  Utilizing PQWT detection technology and DTH hammering techniques for precise groundwater solutions.
                </p>
                <div className="hero-buttons d-flex flex-wrap gap-3">
                  <button className="btn btn-primary btn-lg">
                    <i className="fas fa-search me-2"></i>
                    REQUEST SURVEY
                  </button>
                  <button className="btn btn-outline-light btn-lg" style={{
                    borderWidth: '2px',
                    fontWeight: '700'
                  }}>
                    <i className="fas fa-flask me-2"></i>
                    OUR METHODOLOGY
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="hero-stats">
                <Row>
                  <Col xs={6} className="mb-4">
                    <div className="stat-card text-center p-4" style={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <div style={{
                        fontSize: '3rem',
                        fontWeight: '900',
                        color: 'var(--primary-orange)',
                        marginBottom: '0.5rem'
                      }}>180m</div>
                      <div style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600' }}>
                        Max Depth
                      </div>
                    </div>
                  </Col>
                  <Col xs={6} className="mb-4">
                    <div className="stat-card text-center p-4" style={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <div style={{
                        fontSize: '3rem',
                        fontWeight: '900',
                        color: 'var(--accent-blue)',
                        marginBottom: '0.5rem'
                      }}>15+</div>
                      <div style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600' }}>
                        Years Experience
                      </div>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="equipment-highlight p-4" style={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.2)',
                      textAlign: 'center'
                    }}>
                      <i className="fas fa-search" style={{
                        fontSize: '2.5rem',
                        color: 'var(--success-green)',
                        marginBottom: '1rem'
                      }}></i>
                      <h5 style={{ color: 'white', marginBottom: '0.5rem' }}>
                        PQWT Detection
                      </h5>
                      <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '0.9rem' }}>
                        Advanced groundwater detection technology
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industrial Features Section */}
      <section className="features-section section-padding" style={{ background: 'var(--neutral-50)' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                INDUSTRIAL-GRADE CAPABILITIES
              </h2>
              <p className="lead" style={{ color: 'var(--neutral-600)', maxWidth: '600px', margin: '0 auto' }}>
                Advanced drilling technology and professional expertise for all your water well needs
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon mx-auto">
                  <i className="fas fa-industry"></i>
                </div>
                <h4>Heavy-Duty Equipment</h4>
                <p>Professional-grade drilling rigs capable of reaching depths up to 300 meters with precision and efficiency.</p>
                <div className="feature-specs mt-3">
                  <small style={{ color: 'var(--primary-orange)', fontWeight: '600' }}>
                    ✓ 300m Max Depth ✓ GPS Tracking ✓ Real-time Monitoring
                  </small>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon mx-auto">
                  <i className="fas fa-certificate"></i>
                </div>
                <h4>Certified Professionals</h4>
                <p>Licensed water well drilling contractors with extensive training and certifications from industry authorities.</p>
                <div className="feature-specs mt-3">
                  <small style={{ color: 'var(--success-green)', fontWeight: '600' }}>
                    ✓ Licensed ✓ Insured ✓ Bonded ✓ Safety Certified
                  </small>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon mx-auto">
                  <i className="fas fa-clock"></i>
                </div>
                <h4>24/7 Emergency Service</h4>
                <p>Round-the-clock emergency response for critical water system failures and urgent drilling needs.</p>
                <div className="feature-specs mt-3">
                  <small style={{ color: 'var(--accent-blue)', fontWeight: '600' }}>
                    ✓ 24/7 Response ✓ Emergency Repairs ✓ Rapid Deployment
                  </small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="services-section section-padding" style={{ background: 'white' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                COMPREHENSIVE DRILLING SERVICES
              </h2>
              <p className="lead" style={{ color: 'var(--neutral-600)' }}>
                Complete water well solutions from drilling to maintenance
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="service-card card h-100">
                <div className="card-body text-center">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, var(--primary-orange), #ea580c)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 8px 16px rgba(249, 115, 22, 0.2)'
                  }}>
                    <i className="fas fa-drill" style={{ fontSize: '2rem', color: 'white' }}></i>
                  </div>
                  <h5 className="card-title">Water Well Drilling</h5>
                  <p className="card-text">Professional drilling for residential, commercial, and industrial applications.</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="service-card card h-100">
                <div className="card-body text-center">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, var(--accent-blue), #0284c7)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 8px 16px rgba(14, 165, 233, 0.2)'
                  }}>
                    <i className="fas fa-cogs" style={{ fontSize: '2rem', color: 'white' }}></i>
                  </div>
                  <h5 className="card-title">Pump Installation</h5>
                  <p className="card-text">Expert installation and configuration of water pumping systems and controls.</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="service-card card h-100">
                <div className="card-body text-center">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, var(--success-green), #047857)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 8px 16px rgba(5, 150, 105, 0.2)'
                  }}>
                    <i className="fas fa-flask" style={{ fontSize: '2rem', color: 'white' }}></i>
                  </div>
                  <h5 className="card-title">Water Testing</h5>
                  <p className="card-text">Comprehensive water quality analysis and contamination testing services.</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="service-card card h-100">
                <div className="card-body text-center">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, var(--neutral-600), var(--neutral-700))',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 8px 16px rgba(100, 116, 139, 0.2)'
                  }}>
                    <i className="fas fa-tools" style={{ fontSize: '2rem', color: 'white' }}></i>
                  </div>
                  <h5 className="card-title">Maintenance & Repair</h5>
                  <p className="card-text">Preventive maintenance and emergency repair services for existing wells.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industrial CTA Section */}
      <section className="cta-section" style={{
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
                READY TO START YOUR PROJECT?
              </h2>
              <p style={{
                fontSize: '1.25rem',
                marginBottom: '3rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6'
              }}>
                Get a professional consultation and detailed quote for your water well drilling project. 
                Our experts are standing by to help you find the perfect water solution.
              </p>
              <div className="cta-buttons d-flex flex-wrap justify-content-center gap-3">
                <button className="btn btn-primary btn-lg">
                  <i className="fas fa-phone me-2"></i>
                  CALL NOW: +255 123 456 789
                </button>
                <button className="btn btn-secondary btn-lg">
                  <i className="fas fa-envelope me-2"></i>
                  REQUEST QUOTE
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
