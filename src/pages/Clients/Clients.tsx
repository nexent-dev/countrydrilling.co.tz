import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Clients: React.FC = () => {
  const clientTypes = [
    {
      icon: 'fas fa-industry',
      title: 'Industrial & Manufacturing',
      description: 'Delivering high-capacity water solutions for manufacturing plants, processing facilities, and heavy industrial operations.',
      examples: ['Manufacturing plants', 'Processing facilities', 'Mining operations', 'Chemical plants'],
      color: 'var(--primary-orange)',
      projects: '150+'
    },
    {
      icon: 'fas fa-university',
      title: 'Government & Public Sector',
      description: 'Partnering with government institutions to implement large-scale water infrastructure projects and public facilities.',
      examples: ['Ministry of Water', 'Local government councils', 'Public hospitals', 'Military installations'],
      color: 'var(--accent-blue)',
      projects: '200+'
    },
    {
      icon: 'fas fa-seedling',
      title: 'Agriculture & Farming',
      description: 'Supporting agricultural operations with advanced irrigation systems and livestock water supply solutions.',
      examples: ['Commercial farms', 'Irrigation systems', 'Livestock operations', 'Greenhouse facilities'],
      color: 'var(--success-green)',
      projects: '100+'
    },
    {
      icon: 'fas fa-hotel',
      title: 'Hospitality & Tourism',
      description: 'Providing reliable water supply solutions for the hospitality industry and tourism facilities across Tanzania.',
      examples: ['Safari lodges', 'Beach resorts', 'Conference centers', 'Tourist camps'],
      color: 'var(--neutral-600)',
      projects: '75+'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education & Healthcare',
      description: 'Ensuring educational and healthcare institutions have access to clean, reliable water for students, patients, and staff.',
      examples: ['Universities', 'Hospitals', 'Research facilities', 'Medical centers'],
      color: 'var(--primary-orange)',
      projects: '50+'
    },
    {
      icon: 'fas fa-heart',
      title: 'NGOs & Development',
      description: 'Supporting humanitarian organizations and development projects in providing clean water access to underserved communities.',
      examples: ['International NGOs', 'Development projects', 'Community programs', 'Relief organizations'],
      color: 'var(--accent-blue)',
      projects: '80+'
    },
  ];

  const industrialStats = [
    {
      number: '500+',
      label: 'Projects Completed',
      icon: 'fas fa-project-diagram',
      color: 'var(--primary-orange)'
    },
    {
      number: '15+',
      label: 'Years Experience',
      icon: 'fas fa-calendar-alt',
      color: 'var(--accent-blue)'
    },
    {
      number: '99%',
      label: 'Client Satisfaction',
      icon: 'fas fa-thumbs-up',
      color: 'var(--success-green)'
    },
    {
      number: '24/7',
      label: 'Emergency Support',
      icon: 'fas fa-clock',
      color: 'var(--neutral-600)'
    }
  ];

  const testimonials = [
    {
      name: 'Eng. John Mwalimu',
      organization: 'Kilimanjaro Mining Operations',
      role: 'Site Engineer',
      content: 'The hydrogeological survey was exceptionally thorough. PQWT detection accurately identified groundwater at 145m depth. The DTH drilling technique worked perfectly in our hard rock formation. Water quality testing confirmed excellent potability.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'Dr. Sarah Kimani',
      organization: 'Northern Tanzania Research Institute',
      role: 'Hydrogeologist',
      content: 'Professional geophysical surveys with detailed lithological profiling. The Natural Electric Field Method survey provided accurate aquifer mapping. Technical documentation was comprehensive with GPS coordinates and geophysical curves.',
      rating: 5,
      avatar: 'SK'
    },
    {
      name: 'David Mollel',
      organization: 'Arusha Community Development',
      role: 'Project Coordinator',
      content: 'Scientific approach to groundwater prospecting impressed our community. The reconnaissance survey identified optimal drilling points, and the PVC casing system with gravel packing delivers clean, silt-free water consistently.',
      rating: 5,
      avatar: 'DM'
    },
    {
      name: 'Maria Santos',
      organization: 'Mwanza Agricultural Cooperative',
      role: 'Water Committee Chair',
      content: 'Laboratory analysis confirmed water safety before use. The sustainable water management guidance helps our community maintain the system long-term. Professional documentation included all technical specifications.',
      rating: 5,
      avatar: 'MS'
    },
  ];

  return (
    <div className="clients-page">
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
                  <i className="fas fa-handshake me-2"></i>
                  Trusted Partners
                </span>
              </div>
              <h1 style={{
                fontSize: '4rem',
                fontWeight: '900',
                lineHeight: '1.1',
                marginBottom: '2rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                INDUSTRIAL
                <span style={{ color: 'var(--primary-orange)' }}> CLIENTS</span>
                <br />& PARTNERSHIPS
              </h1>
              <p style={{
                fontSize: '1.375rem',
                lineHeight: '1.6',
                marginBottom: '3rem',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '700px',
                margin: '0 auto 3rem'
              }}>
                Serving diverse industries across Tanzania with professional water drilling solutions. 
                From large-scale industrial projects to community development initiatives.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industrial Stats */}
      <section className="section-padding" style={{ background: 'var(--neutral-50)' }}>
        <Container>
          <Row>
            {industrialStats.map((stat, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <div className="text-center" style={{ padding: '2rem 1rem' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: `0 8px 16px ${stat.color}33`
                  }}>
                    <i className={stat.icon} style={{ fontSize: '1.75rem', color: 'white' }}></i>
                  </div>
                  <h3 style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    color: stat.color,
                    marginBottom: '0.5rem'
                  }}>
                    {stat.number}
                  </h3>
                  <p style={{
                    color: 'var(--neutral-600)',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '0.875rem'
                  }}>
                    {stat.label}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Client Industries */}
      <section className="section-padding" style={{ background: 'white' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                INDUSTRIES WE SERVE
              </h2>
              <p className="lead" style={{ color: 'var(--neutral-600)', maxWidth: '600px', margin: '0 auto' }}>
                Professional water solutions across diverse sectors with proven track record
              </p>
            </Col>
          </Row>
          <Row>
            {clientTypes.map((client, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <div className="client-card card h-100" style={{
                  border: '1px solid var(--neutral-200)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}>
                  <div className="card-body" style={{ padding: '2.5rem 2rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '2rem'
                    }}>
                      <div style={{
                        width: '70px',
                        height: '70px',
                        background: `linear-gradient(135deg, ${client.color}, ${client.color}dd)`,
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 8px 16px ${client.color}33`
                      }}>
                        <i className={client.icon} style={{ fontSize: '1.75rem', color: 'white' }}></i>
                      </div>
                      <div style={{
                        background: 'var(--neutral-100)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        color: client.color
                      }}>
                        {client.projects} PROJECTS
                      </div>
                    </div>
                    <h4 className="card-title" style={{ marginBottom: '1rem', color: 'var(--primary-navy)' }}>
                      {client.title}
                    </h4>
                    <p className="card-text" style={{ marginBottom: '2rem', color: 'var(--neutral-600)' }}>
                      {client.description}
                    </p>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h6 style={{ 
                        color: client.color, 
                        fontWeight: '700', 
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        fontSize: '0.875rem',
                        letterSpacing: '0.05em'
                      }}>
                        Project Types:
                      </h6>
                      <ul className="list-unstyled">
                        {client.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} style={{ 
                            marginBottom: '0.5rem',
                            display: 'flex',
                            alignItems: 'flex-start',
                            fontSize: '0.95rem'
                          }}>
                            <i className="fas fa-check" style={{ 
                              color: client.color, 
                              marginRight: '0.75rem',
                              marginTop: '0.25rem',
                              fontSize: '0.875rem'
                            }}></i>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding d-none" style={{ background: 'var(--neutral-50)' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                CLIENT TESTIMONIALS
              </h2>
              <p className="lead" style={{ color: 'var(--neutral-600)' }}>
                What our industrial partners say about our services
              </p>
            </Col>
          </Row>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={4} className="mb-4" key={index}>
                <div className="testimonial-card" style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '1px solid var(--neutral-200)',
                  height: '100%',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '2rem',
                    background: 'var(--primary-orange)',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="fas fa-quote-left" style={{ color: 'white', fontSize: '0.875rem' }}></i>
                  </div>
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star" style={{ color: '#fbbf24', marginRight: '0.25rem' }}></i>
                    ))}
                  </div>
                  <p style={{
                    fontStyle: 'italic',
                    marginBottom: '2rem',
                    color: 'var(--neutral-600)',
                    lineHeight: '1.6'
                  }}>
                    "{testimonial.content}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'var(--primary-navy)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '1.25rem'
                    }}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h6 style={{ margin: 0, fontWeight: '700', color: 'var(--primary-navy)' }}>
                        {testimonial.name}
                      </h6>
                      <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--neutral-600)' }}>
                        {testimonial.role}
                      </p>
                      <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--primary-orange)', fontWeight: '600' }}>
                        {testimonial.organization}
                      </p>
                    </div>
                  </div>
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
                JOIN OUR GROWING CLIENT BASE
              </h2>
              <p style={{
                fontSize: '1.25rem',
                marginBottom: '3rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6'
              }}>
                Ready to partner with Tanzania's leading water drilling specialists? 
                Contact us today to discuss your industrial water solution requirements.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button className="btn btn-primary btn-lg">
                  <i className="fas fa-handshake me-2"></i>
                  BECOME A CLIENT
                </button>
                <button className="btn btn-secondary btn-lg">
                  <i className="fas fa-file-alt me-2"></i>
                  VIEW CASE STUDIES
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Clients;
