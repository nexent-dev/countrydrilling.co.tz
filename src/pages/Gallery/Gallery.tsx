import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';

// Import media assets
import image1 from '../../assets/images/2024-11-11 (1).jpg';
import image2 from '../../assets/images/2024-11-11.jpg';
import image3 from '../../assets/images/2024-11-12.jpg';
import image4 from '../../assets/images/2024-11-14.jpg';
import image5 from '../../assets/images/2025-07-10.jpg';
import drillingVideo from '../../assets/video/drilling.mp4';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

const Gallery: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      src: image1,
      title: 'Hydrogeological Survey Equipment',
      description: 'PQWT groundwater detection equipment in action during field survey operations.',
      category: 'equipment',
      date: '2024-11-11'
    },
    {
      id: 2,
      type: 'image',
      src: image2,
      title: 'Field Survey Operations',
      description: 'Professional hydrogeological assessment and groundwater mapping in progress.',
      category: 'fieldwork',
      date: '2024-11-11'
    },
    {
      id: 3,
      type: 'image',
      src: image3,
      title: 'Drilling Site Preparation',
      description: 'Site preparation and equipment setup for scientific borehole drilling.',
      category: 'drilling',
      date: '2024-11-12'
    },
    {
      id: 4,
      type: 'image',
      src: image4,
      title: 'DTH Hammering Technique',
      description: 'Down-the-hole hammering drilling technique for precise water well construction.',
      category: 'drilling',
      date: '2024-11-14'
    },
    {
      id: 5,
      type: 'image',
      src: image5,
      title: 'Completed Water Well',
      description: 'Successfully completed water well with quality testing and documentation.',
      category: 'completed',
      date: '2025-07-10'
    },
    {
      id: 6,
      type: 'video',
      src: drillingVideo,
      title: 'Scientific Drilling Process',
      description: 'Complete drilling process demonstration showing our advanced DTH hammering techniques.',
      category: 'drilling',
      date: '2024-11-15'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: 'fas fa-th-large' },
    { key: 'equipment', label: 'Equipment', icon: 'fas fa-tools' },
    { key: 'fieldwork', label: 'Field Work', icon: 'fas fa-search-location' },
    { key: 'drilling', label: 'Drilling', icon: 'fas fa-hammer' },
    { key: 'completed', label: 'Completed', icon: 'fas fa-check-circle' }
  ];

  const filteredMedia = activeCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  const handleMediaClick = (media: MediaItem) => {
    setSelectedMedia(media);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMedia(null);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: `linear-gradient(135deg, var(--primary-navy) 0%, var(--neutral-900) 100%)`,
        color: 'white',
        padding: '6rem 0 4rem',
        position: 'relative'
      }}>
        <div className="hero-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.3)'
        }}></div>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="hero-title" style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                marginBottom: '1.5rem',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                PROJECT GALLERY
              </h1>
              <p className="hero-subtitle" style={{
                fontSize: '1.375rem',
                lineHeight: '1.6',
                marginBottom: '2rem',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Explore our hydrogeological surveys, scientific drilling operations, and completed water well projects across Tanzania.
              </p>
              <div className="trust-indicators d-flex flex-wrap justify-content-center gap-3">
                <div className="trust-badge">
                  <i className="fas fa-camera"></i>
                  500+ Projects Documented
                </div>
                <div className="trust-badge">
                  <i className="fas fa-video"></i>
                  Live Process Videos
                </div>
                <div className="trust-badge">
                  <i className="fas fa-certificate"></i>
                  Certified Operations
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Category Filter Section */}
      <section className="section-padding-sm" style={{ background: 'var(--neutral-50)' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="category-filters d-flex flex-wrap justify-content-center gap-3 mb-4">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    className={`btn ${activeCategory === category.key ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setActiveCategory(category.key)}
                    style={{
                      borderRadius: '25px',
                      padding: '0.75rem 1.5rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      fontSize: '0.875rem',
                      letterSpacing: '0.05em'
                    }}
                  >
                    <i className={`${category.icon} me-2`}></i>
                    {category.label}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Grid Section */}
      <section className="section-padding">
        <Container>
          <Row>
            {filteredMedia.map((media) => (
              <Col lg={4} md={6} className="mb-4" key={media.id}>
                <div 
                  className="gallery-item card h-100"
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '1px solid var(--neutral-200)',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}
                  onClick={() => handleMediaClick(media)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                  }}
                >
                  <div style={{ position: 'relative', paddingBottom: '66.67%', overflow: 'hidden' }}>
                    {media.type === 'image' ? (
                      <img
                        src={media.src}
                        alt={media.title}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                    ) : (
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(135deg, var(--primary-navy) 0%, var(--neutral-800) 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}>
                        <div className="text-center">
                          <i className="fas fa-play-circle" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
                          <p style={{ margin: 0, fontWeight: '600' }}>Click to Play Video</p>
                        </div>
                      </div>
                    )}
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: media.type === 'video' ? 'var(--primary-orange)' : 'var(--accent-blue)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      textTransform: 'uppercase'
                    }}>
                      {media.type === 'video' ? (
                        <><i className="fas fa-video me-1"></i>Video</>
                      ) : (
                        <><i className="fas fa-image me-1"></i>Photo</>
                      )}
                    </div>
                  </div>
                  <div className="card-body" style={{ padding: '1.5rem' }}>
                    <h5 className="card-title" style={{
                      color: 'var(--primary-navy)',
                      fontWeight: '700',
                      marginBottom: '0.75rem',
                      fontSize: '1.125rem'
                    }}>
                      {media.title}
                    </h5>
                    <p className="card-text" style={{
                      color: 'var(--neutral-600)',
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      marginBottom: '1rem'
                    }}>
                      {media.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span style={{
                        background: 'var(--neutral-100)',
                        color: 'var(--neutral-700)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        textTransform: 'capitalize'
                      }}>
                        {media.category}
                      </span>
                      <span style={{
                        color: 'var(--neutral-500)',
                        fontSize: '0.8rem'
                      }}>
                        {new Date(media.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Modal for Media Viewing */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="xl" 
        centered
        className="gallery-modal"
      >
        <Modal.Header closeButton style={{ 
          background: 'var(--primary-navy)', 
          color: 'white',
          border: 'none'
        }}>
          <Modal.Title>{selectedMedia?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: 0, background: '#000' }}>
          {selectedMedia && (
            <div style={{ position: 'relative' }}>
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '70vh',
                    objectFit: 'contain'
                  }}
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '70vh'
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer style={{ 
          background: 'var(--neutral-50)',
          border: 'none',
          padding: '1.5rem'
        }}>
          <div className="w-100">
            <p style={{ 
              margin: 0, 
              color: 'var(--neutral-700)',
              lineHeight: '1.6'
            }}>
              {selectedMedia?.description}
            </p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span style={{
                background: 'var(--primary-orange)',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                textTransform: 'capitalize'
              }}>
                {selectedMedia?.category}
              </span>
              <span style={{
                color: 'var(--neutral-500)',
                fontSize: '0.9rem'
              }}>
                {selectedMedia && new Date(selectedMedia.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      {/* CTA Section */}
      <section className="cta-section" style={{
        background: `linear-gradient(135deg, var(--primary-navy) 0%, var(--neutral-900) 100%)`,
        color: 'white',
        padding: '4rem 0'
      }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '1.5rem'
              }}>
                Ready to Start Your Project?
              </h2>
              <p style={{
                fontSize: '1.25rem',
                marginBottom: '2.5rem',
                color: 'rgba(255,255,255,0.9)'
              }}>
                Join our portfolio of successful water well projects across Tanzania. 
                Professional hydrogeological surveys and scientific drilling services.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <a 
                  href="/contact" 
                  className="btn btn-primary btn-lg"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="fas fa-search me-2"></i>
                  REQUEST SURVEY
                </a>
                <a 
                  href="tel:+255788576062" 
                  className="btn btn-outline-primary btn-lg"
                  style={{ 
                    textDecoration: 'none',
                    borderColor: 'white',
                    color: 'white'
                  }}
                >
                  <i className="fas fa-phone me-2"></i>
                  CALL NOW
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Gallery;
