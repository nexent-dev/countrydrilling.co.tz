import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import companyLogo from '../../assets/white-logo.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Clients', path: '/clients' },
    { label: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="layout-wrapper">
      {/* Industrial Header */}
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <Link 
            className="navbar-brand" 
            to="/" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img 
                src={companyLogo} 
                alt="Country Drilling Logo" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div>
              <div style={{
                fontWeight: '800',
                fontSize: '1.25rem',
                lineHeight: '1.2'
              }}>
                COUNTRY DRILLING
              </div>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                & General Supply Limited
              </div>
            </div>
          </Link>
          
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            style={{
              background: 'var(--primary-orange)',
              borderRadius: '8px',
              padding: '0.5rem'
            }}
          >
            <i className="fas fa-bars" style={{ color: 'white' }}></i>
          </button>
          
          <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              {navigationItems.map((item) => (
                <li className="nav-item" key={item.path}>
                  <Link 
                    className={`nav-link ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="nav-item ms-3">
                <Link 
                  to="/contact" 
                  className="btn btn-primary btn-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className="fas fa-phone me-2"></i>
                  GET QUOTE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Industrial Footer */}
      <footer style={{
        background: `linear-gradient(135deg, var(--primary-navy) 0%, var(--neutral-900) 100%)`,
        color: 'white',
        padding: '4rem 0 2rem',
        marginTop: 'auto'
      }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand mb-4">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img 
                      src={companyLogo} 
                      alt="Country Drilling Logo" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                  </div>
                  <div>
                    <h5 style={{ margin: 0, fontWeight: '800', fontSize: '1.25rem' }}>
                      COUNTRY DRILLING
                    </h5>
                    <small style={{ color: 'var(--primary-orange)', fontWeight: '600' }}>
                      INDUSTRIAL SOLUTIONS
                    </small>
                  </div>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                  Professional water well drilling and industrial supply solutions across Tanzania. 
                  Trusted by 500+ clients since 2008.
                </p>
                <div className="social-links mt-3">
                  <a href="#" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    textDecoration: 'none',
                    marginRight: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    textDecoration: 'none',
                    marginRight: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <h6 style={{ fontWeight: '700', marginBottom: '1.5rem', color: 'var(--primary-orange)' }}>
                QUICK LINKS
              </h6>
              <ul className="list-unstyled">
                {navigationItems.map((item) => (
                  <li key={item.path} className="mb-2">
                    <Link 
                      to={item.path} 
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        fontWeight: '500'
                      }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--primary-orange)'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h6 style={{ fontWeight: '700', marginBottom: '1.5rem', color: 'var(--primary-orange)' }}>
                CONTACT INFO
              </h6>
              <div className="contact-info">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: '35px',
                    height: '35px',
                    background: 'var(--accent-blue)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.75rem'
                  }}>
                    <i className="fas fa-map-marker-alt" style={{ color: 'white', fontSize: '0.875rem' }}></i>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>Arusha, Tanzania</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: '35px',
                    height: '35px',
                    background: 'var(--success-green)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.75rem'
                  }}>
                    <i className="fas fa-phone" style={{ color: 'white', fontSize: '0.875rem' }}></i>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>+255 123 456 789</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '35px',
                    height: '35px',
                    background: 'var(--primary-orange)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.75rem'
                  }}>
                    <i className="fas fa-envelope" style={{ color: 'white', fontSize: '0.875rem' }}></i>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>info@countrydrilling.co.tz</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h6 style={{ fontWeight: '700', marginBottom: '1.5rem', color: 'var(--primary-orange)' }}>
                BUSINESS HOURS
              </h6>
              <div style={{ 
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ color: 'white', fontWeight: '600', marginBottom: '0.25rem' }}>
                    Monday - Friday
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                    8:00 AM - 6:00 PM
                  </div>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ color: 'white', fontWeight: '600', marginBottom: '0.25rem' }}>
                    Saturday
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                    8:00 AM - 2:00 PM
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--primary-orange)', fontWeight: '600', marginBottom: '0.25rem' }}>
                    24/7 Emergency
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                    Available for urgent repairs
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ 
            margin: '3rem 0 2rem', 
            border: 'none',
            height: '1px',
            background: 'rgba(255,255,255,0.1)'
          }} />
          <div className="text-center">
            <p style={{ 
              margin: 0, 
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.9rem'
            }}>
              © 2024 Country Drilling & General Supply Co. Ltd. All rights reserved. | 
              <span style={{ color: 'var(--primary-orange)', marginLeft: '0.5rem' }}>
                Industrial Water Solutions Since 2008
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top btn btn-primary rounded-circle shadow"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default Layout;
