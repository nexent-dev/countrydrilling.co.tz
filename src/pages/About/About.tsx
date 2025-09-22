import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import equipmentImage from '../../assets/images/2024-11-11 (1).jpg';
import fieldworkImage from '../../assets/images/2024-11-14.jpg';
import completedImage from '../../assets/images/2025-07-10.jpg';

const About: React.FC = () => {
  const technicalStats = [
    {
      number: '120-180m',
      label: 'Drilling Depth Range',
      icon: 'fas fa-arrow-down',
      color: 'var(--primary-orange)'
    },
    {
      number: 'PQWT',
      label: 'Groundwater Detection',
      icon: 'fas fa-search',
      color: 'var(--accent-blue)'
    },
    {
      number: 'DTH',
      label: 'Drilling Technology',
      icon: 'fas fa-cogs',
      color: 'var(--success-green)'
    },
    {
      number: '100%',
      label: 'Quality Tested',
      icon: 'fas fa-flask',
      color: 'var(--neutral-600)'
    }
  ];

  const coreValues = [
    {
      title: 'SCIENTIFIC APPROACH',
      description: 'Detailed hydrogeological and geophysical surveys using PQWT Groundwater Detector, Natural Electric Field Method, and GPS mapping to identify optimal drilling points.',
      icon: 'fas fa-microscope',
      color: 'var(--primary-orange)'
    },
    {
      title: 'TECHNICAL EXCELLENCE',
      description: 'Down-The-Hole (DTH) hammering techniques for hard rock formations, PVC casing systems, and comprehensive well development for silt-free water delivery.',
      icon: 'fas fa-tools',
      color: 'var(--accent-blue)'
    },
    {
      title: 'QUALITY ASSURANCE',
      description: 'Water from aquifers is chemically analyzed in certified laboratories to ensure safety. Every project includes comprehensive technical documentation.',
      icon: 'fas fa-certificate',
      color: 'var(--success-green)'
    },
    {
      title: 'SUSTAINABLE IMPACT',
      description: 'Boreholes designed for long-term functionality with focus on sustainability, low maintenance, and community-centered water management.',
      icon: 'fas fa-leaf',
      color: 'var(--neutral-600)'
    }
  ];

  const technicalCapabilities = [
    {
      title: 'Survey Equipment',
      items: ['PQWT Groundwater Detector', 'Pool Finder', 'GPS Mapping Tools', 'Geophysical logging instruments'],
      icon: 'fas fa-search',
      color: 'var(--primary-orange)'
    },
    {
      title: 'Methodology',
      items: ['Reconnaissance surveys', 'Geological mapping', 'Profile resistivity surveys', 'Hydrogeological interpretation'],
      icon: 'fas fa-clipboard-list',
      color: 'var(--accent-blue)'
    },
    {
      title: 'Drilling Capacity',
      items: ['120–180m depth range', 'DTH hammering technique', 'PVC casing/screens', 'Clean gravel packing'],
      icon: 'fas fa-tools',
      color: 'var(--success-green)'
    }
  ];

  return (
    <div className="about-page">
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
                  <i className="fas fa-building me-2"></i>
                  About Our Company
                </span>
              </div>
              <h1 style={{
                fontSize: '4rem',
                fontWeight: '900',
                lineHeight: '1.1',
                marginBottom: '2rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                SCIENTIFIC
                <span style={{ color: 'var(--primary-orange)' }}> BOREHOLE</span>
                <br />DRILLING EXPERTS
              </h1>
              <p style={{
                fontSize: '1.375rem',
                lineHeight: '1.6',
                marginBottom: '3rem',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '700px',
                margin: '0 auto 3rem'
              }}>
                Professional borehole drilling and water supply company delivering scientifically backed, 
                reliable, and cost-effective groundwater solutions across Tanzania.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industrial Stats */}
      <section className="section-padding" style={{ background: 'var(--neutral-50)' }}>
        <Container>
          <Row>
            {technicalStats.map((stat, index) => (
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

      {/* Company Story */}
      <section className="section-padding" style={{ background: 'white' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div style={{ paddingRight: '2rem' }}>
                <h2 style={{ 
                  color: 'var(--primary-navy)', 
                  marginBottom: '2rem',
                  fontSize: '2.5rem',
                  fontWeight: '800'
                }}>
                  OUR TECHNICAL EXPERTISE
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: 'var(--neutral-600)',
                  marginBottom: '2rem'
                }}>
                  <strong>Country Drilling & General Supply Co. Ltd</strong>, based in Arusha, Tanzania, combines modern 
                  drilling equipment, skilled hydrogeological expertise, and scientific methodology to help communities, 
                  institutions, and organizations gain sustainable access to safe water.
                </p>
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: 'var(--neutral-600)',
                  marginBottom: '2rem'
                }}>
                  What sets us apart is our end-to-end technical approach: conducting detailed groundwater prospecting 
                  surveys before drilling, using advanced techniques like Natural Electric Field Method and PQWT Groundwater 
                  Detector to identify aquifers and optimal drilling points with scientific precision.
                </p>
                <div style={{
                  background: 'var(--neutral-50)',
                  padding: '2rem',
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--primary-orange)'
                }}>
                  <p style={{
                    fontSize: '1.125rem',
                    fontStyle: 'italic',
                    color: 'var(--neutral-700)',
                    margin: 0
                  }}>
                    "By combining scientific hydrogeology, modern drilling rigs, and skilled experts, we ensure every 
                    borehole drilled is efficient, sustainable, safe, and affordable with documented transparency."
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  height: '500px',
                  background: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '2rem',
                  right: '2rem',
                  background: 'rgba(255,255,255,0.95)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h6 style={{ 
                    color: 'var(--primary-navy)', 
                    fontWeight: '700',
                    margin: '0 0 0.5rem 0'
                  }}>
                    INDUSTRIAL OPERATIONS
                  </h6>
                  <p style={{ 
                    color: 'var(--neutral-600)', 
                    fontSize: '0.95rem',
                    margin: 0
                  }}>
                    State-of-the-art drilling equipment in action across Tanzania's diverse geological landscape.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section className="section-padding" style={{ background: 'var(--neutral-50)' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                CORE VALUES & PRINCIPLES
              </h2>
              <p className="lead" style={{ color: 'var(--neutral-600)', maxWidth: '600px', margin: '0 auto' }}>
                The industrial standards and values that drive our commitment to excellence
              </p>
            </Col>
          </Row>
          <Row>
            {coreValues.map((value, index) => (
              <Col lg={6} className="mb-4" key={index}>
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '1px solid var(--neutral-200)',
                  height: '100%',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: `linear-gradient(135deg, ${value.color}, ${value.color}dd)`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1.5rem',
                      flexShrink: 0,
                      boxShadow: `0 8px 16px ${value.color}33`
                    }}>
                      <i className={value.icon} style={{ fontSize: '1.5rem', color: 'white' }}></i>
                    </div>
                    <div>
                      <h4 style={{ 
                        color: 'var(--primary-navy)', 
                        marginBottom: '1rem',
                        fontWeight: '700',
                        fontSize: '1.25rem'
                      }}>
                        {value.title}
                      </h4>
                      <p style={{
                        color: 'var(--neutral-600)',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Technical Capabilities */}
      <section className="section-padding" style={{ background: 'white' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                TECHNICAL CAPACITY
              </h2>
              <p className="lead" style={{ color: 'var(--neutral-600)' }}>
                Advanced equipment and proven methodologies for accurate groundwater solutions
              </p>
            </Col>
          </Row>
          <Row>
            {technicalCapabilities.map((capability, index) => (
              <Col lg={4} className="mb-4" key={index}>
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '1px solid var(--neutral-200)',
                  height: '100%'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${capability.color}, ${capability.color}dd)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                    boxShadow: `0 8px 16px ${capability.color}33`
                  }}>
                    <i className={capability.icon} style={{ fontSize: '1.75rem', color: 'white' }}></i>
                  </div>
                  <h4 style={{ 
                    color: 'var(--primary-navy)', 
                    marginBottom: '1.5rem',
                    fontWeight: '700',
                    textAlign: 'center'
                  }}>
                    {capability.title}
                  </h4>
                  <ul className="list-unstyled">
                    {capability.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={{ 
                        marginBottom: '0.75rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        fontSize: '0.95rem'
                      }}>
                        <i className="fas fa-check" style={{ 
                          color: capability.color, 
                          marginRight: '0.75rem',
                          marginTop: '0.25rem',
                          fontSize: '0.875rem'
                        }}></i>
                        <span style={{ color: 'var(--neutral-600)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Equipment & Operations Showcase */}
      <section className="section-padding" style={{ background: 'var(--neutral-50)' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                OUR EQUIPMENT & OPERATIONS
              </h2>
              <p className="lead" style={{ color: 'var(--neutral-600)' }}>
                State-of-the-art technology and proven methodologies for superior results
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="equipment-card" style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
                  <img
                    src={equipmentImage}
                    alt="PQWT Groundwater Detection Equipment"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    background: 'var(--primary-orange)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    EQUIPMENT
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h5 style={{ 
                    color: 'var(--primary-navy)', 
                    fontWeight: '700', 
                    marginBottom: '1rem' 
                  }}>
                    PQWT Detection System
                  </h5>
                  <p style={{ 
                    color: 'var(--neutral-600)', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    Advanced groundwater detection technology with GPS mapping and geophysical logging capabilities.
                  </p>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-search-location" style={{ 
                      color: 'var(--accent-blue)', 
                      fontSize: '1.25rem',
                      marginRight: '0.75rem'
                    }}></i>
                    <span style={{ 
                      color: 'var(--neutral-700)', 
                      fontWeight: '600',
                      fontSize: '0.9rem'
                    }}>
                      Precision Groundwater Mapping
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="equipment-card" style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
                  <img
                    src={fieldworkImage}
                    alt="DTH Hammering Drilling Operations"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    background: 'var(--accent-blue)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    DRILLING
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h5 style={{ 
                    color: 'var(--primary-navy)', 
                    fontWeight: '700', 
                    marginBottom: '1rem' 
                  }}>
                    DTH Hammering Technique
                  </h5>
                  <p style={{ 
                    color: 'var(--neutral-600)', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    Down-the-hole hammering drilling method for precise and efficient water well construction.
                  </p>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-hammer" style={{ 
                      color: 'var(--primary-orange)', 
                      fontSize: '1.25rem',
                      marginRight: '0.75rem'
                    }}></i>
                    <span style={{ 
                      color: 'var(--neutral-700)', 
                      fontWeight: '600',
                      fontSize: '0.9rem'
                    }}>
                      120-180m Drilling Capacity
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="equipment-card" style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
                  <img
                    src={completedImage}
                    alt="Completed Water Well Project"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    background: 'var(--success-green)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    COMPLETED
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h5 style={{ 
                    color: 'var(--primary-navy)', 
                    fontWeight: '700', 
                    marginBottom: '1rem' 
                  }}>
                    Quality Assurance
                  </h5>
                  <p style={{ 
                    color: 'var(--neutral-600)', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    Comprehensive testing, documentation, and quality control for every completed project.
                  </p>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-certificate" style={{ 
                      color: 'var(--success-green)', 
                      fontSize: '1.25rem',
                      marginRight: '0.75rem'
                    }}></i>
                    <span style={{ 
                      color: 'var(--neutral-700)', 
                      fontWeight: '600',
                      fontSize: '0.9rem'
                    }}>
                      Certified Water Quality
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col>
              <a 
                href="/gallery" 
                className="btn btn-primary btn-lg"
                style={{ textDecoration: 'none' }}
              >
                <i className="fas fa-images me-2"></i>
                VIEW PROJECT GALLERY
              </a>
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
                PARTNER WITH INDUSTRY LEADERS
              </h2>
              <p style={{
                fontSize: '1.25rem',
                marginBottom: '3rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6'
              }}>
                Ready to work with Tanzania's most experienced water drilling professionals? 
                Contact our team to discuss your industrial water solution requirements.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button className="btn btn-primary btn-lg">
                  <i className="fas fa-phone me-2"></i>
                  CONTACT OUR TEAM
                </button>
                <button className="btn btn-secondary btn-lg">
                  <i className="fas fa-download me-2"></i>
                  COMPANY PROFILE
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
