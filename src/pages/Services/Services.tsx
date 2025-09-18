import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services: React.FC = () => {
  const services = [
    {
      icon: 'fas fa-search',
      title: 'Hydrogeological & Geophysical Surveys',
      subtitle: 'Scientific Groundwater Prospecting',
      description: 'Detailed groundwater prospecting surveys using advanced techniques to identify aquifers, fracture zones, and optimal drilling points.',
      features: [
        'Natural Electric Field Method surveys',
        'PQWT Groundwater Detector analysis',
        'GPS mapping and site coordinates',
        'Geological mapping and lithological profiling'
      ],
      price: 'Contact for Quote',
      color: 'var(--primary-orange)'
    },
    {
      icon: 'fas fa-drill',
      title: 'Borehole Drilling & Design',
      subtitle: 'Professional Well Construction',
      description: 'Drilling shallow and deep wells (120–180m) using Down-The-Hole (DTH) hammering techniques for hard rock formations.',
      features: [
        'DTH hammering for hard rock efficiency',
        'PVC casing and screen installation',
        'Clean gravel packing systems',
        'Complete well development for silt-free water'
      ],
      price: 'Depth-Based Pricing',
      color: 'var(--accent-blue)'
    },
    {
      icon: 'fas fa-flask',
      title: 'Water Quality & Laboratory Analysis',
      subtitle: 'Certified Safety Testing',
      description: 'Water from aquifers is chemically analyzed in certified laboratories to ensure safety and suitability before use.',
      features: [
        'Certified laboratory chemical analysis',
        'Water safety and potability testing',
        'Contamination detection and assessment',
        'Treatment recommendations if needed'
      ],
      price: 'Lab Analysis Fees Apply',
      color: 'var(--success-green)'
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Project Documentation & Reporting',
      subtitle: 'Comprehensive Technical Reports',
      description: 'Every project delivered with comprehensive technical reports including site coordinates, geophysical curves, and professional recommendations.',
      features: [
        'Site coordinates and GPS mapping',
        'Geophysical curves and lithological profiles',
        'Hydrogeological interpretation reports',
        'Long-term water management guidance'
      ],
      price: 'Included with Projects',
      color: 'var(--neutral-600)'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Pump Installation & System Setup',
      subtitle: 'Complete Water System Solutions',
      description: 'Professional pump installation and complete water system setup for sustainable and reliable water access.',
      features: [
        'Submersible pump installation',
        'Pressure tank and control systems',
        'Distribution network design',
        'System commissioning and testing'
      ],
      price: 'System-Based Pricing',
      color: 'var(--primary-orange)'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Sustainable Water Management',
      subtitle: 'Long-Term Solutions',
      description: 'Sustainable water management solutions focused on community-centered approaches and environmental responsibility.',
      features: [
        'Community water management training',
        'Sustainable extraction practices',
        'Environmental impact assessment',
        'Long-term maintenance planning'
      ],
      price: 'Consultation Required',
      color: 'var(--success-green)'
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Reconnaissance Survey',
      description: 'Initial site reconnaissance and geological mapping to understand terrain, rock formations, and potential groundwater zones.',
      icon: 'fas fa-search-location'
    },
    {
      number: '02',
      title: 'Geophysical Survey',
      description: 'Advanced PQWT groundwater detection and Natural Electric Field Method surveys to locate optimal drilling points.',
      icon: 'fas fa-wave-square'
    },
    {
      number: '03',
      title: 'Scientific Drilling',
      description: 'DTH hammering drilling technique for hard rock formations with PVC casing and clean gravel packing systems.',
      icon: 'fas fa-drill'
    },
    {
      number: '04',
      title: 'Quality Assurance',
      description: 'Water quality testing in certified laboratories and comprehensive technical documentation with GPS coordinates.',
      icon: 'fas fa-certificate'
    }
  ];

  return (
    <div className="services-page">
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
                  <i className="fas fa-cogs me-2"></i>
                  Professional Services
                </span>
              </div>
              <h1 style={{
                fontSize: '4rem',
                fontWeight: '900',
                lineHeight: '1.1',
                marginBottom: '2rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                INDUSTRIAL WATER
                <span style={{ color: 'var(--primary-orange)' }}> DRILLING</span>
                <br />SERVICES
              </h1>
              <p style={{
                fontSize: '1.375rem',
                lineHeight: '1.6',
                marginBottom: '3rem',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '700px',
                margin: '0 auto 3rem'
              }}>
                Comprehensive water well drilling and maintenance services using cutting-edge technology. 
                From initial site assessment to ongoing support, we deliver complete water solutions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding" style={{ background: 'var(--neutral-50)' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                COMPREHENSIVE SERVICE PORTFOLIO
              </h2>
              <p className="lead" style={{ color: 'var(--neutral-600)', maxWidth: '600px', margin: '0 auto' }}>
                Professional water well services backed by 15+ years of experience and industrial-grade equipment
              </p>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <div className="service-card card h-100" style={{
                  border: '1px solid var(--neutral-200)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}>
                  <div className="card-body" style={{ padding: '2.5rem 2rem' }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '2rem',
                      boxShadow: `0 8px 16px ${service.color}33`
                    }}>
                      <i className={service.icon} style={{ fontSize: '2rem', color: 'white' }}></i>
                    </div>
                    <h4 className="card-title" style={{ marginBottom: '1rem' }}>{service.title}</h4>
                    <p className="card-text" style={{ marginBottom: '2rem' }}>
                      {service.description}
                    </p>
                    <ul className="list-unstyled" style={{ marginBottom: '2rem' }}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} style={{ 
                          marginBottom: '0.75rem',
                          display: 'flex',
                          alignItems: 'flex-start',
                          fontSize: '0.95rem'
                        }}>
                          <i className="fas fa-check" style={{ 
                            color: service.color, 
                            marginRight: '0.75rem',
                            marginTop: '0.25rem',
                            fontSize: '0.875rem'
                          }}></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div style={{
                      padding: '1rem',
                      background: 'var(--neutral-100)',
                      borderRadius: '8px',
                      marginBottom: '1.5rem',
                      textAlign: 'center'
                    }}>
                      <strong style={{ color: service.color, fontSize: '1.125rem' }}>
                        {service.price}
                      </strong>
                    </div>
                    <button className="btn btn-primary w-100">
                      <i className="fas fa-quote-right me-2"></i>
                      GET QUOTE
                    </button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                OUR PROVEN PROCESS
              </h2>
              <p className="lead" style={{ color: 'var(--neutral-600)' }}>
                Systematic approach ensuring quality results from consultation to completion
              </p>
            </Col>
          </Row>
          <Row>
            {processSteps.map((step, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <div className="process-step text-center" style={{ padding: '2rem 1rem' }}>
                  <div style={{
                    position: 'relative',
                    marginBottom: '2rem'
                  }}>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      background: `linear-gradient(135deg, var(--primary-orange) 0%, #ea580c 100%)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      boxShadow: '0 8px 20px rgba(249, 115, 22, 0.3)',
                      position: 'relative'
                    }}>
                      <i className={step.icon} style={{ fontSize: '2rem', color: 'white' }}></i>
                      <div style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-10px',
                        width: '40px',
                        height: '40px',
                        background: 'var(--primary-navy)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        fontWeight: '800',
                        color: 'white'
                      }}>
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <h5 style={{ color: 'var(--primary-navy)', marginBottom: '1rem', fontWeight: '700' }}>
                    {step.title}
                  </h5>
                  <p style={{ color: 'var(--neutral-600)', lineHeight: '1.6' }}>
                    {step.description}
                  </p>
                </div>
              </Col>
            ))}
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
                NEED PROFESSIONAL WATER SOLUTIONS?
              </h2>
              <p style={{
                fontSize: '1.25rem',
                marginBottom: '3rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6'
              }}>
                Contact our industrial drilling experts today for a comprehensive consultation 
                and detailed project quote. We're ready to solve your water challenges.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button className="btn btn-primary btn-lg">
                  <i className="fas fa-phone me-2"></i>
                  CALL: +255 788 576 062
                </button>
                <button className="btn btn-secondary btn-lg">
                  <i className="fas fa-calculator me-2"></i>
                  GET DETAILED QUOTE
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
