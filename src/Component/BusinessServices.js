import React, { useState, useEffect, useRef } from 'react';
import './BusinessServices.css';

const BusinessServices = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const componentRef = useRef(null);
  const testimonialTrackRef = useRef(null);
  const partnerSectionRef = useRef(null);

  // Partner testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Oliver Wolff",
      company: "Kindle",
      position: "Kindle Product Manager",
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_81dcf601de.webp",
      testimonial: "We partnered with InnoScope to enhance our Elixir SDK, and the process was seamless. Consistent communication and timely status updates, even with minor estimate shifts, allowed us to adjust efficiently.",
      caseStudyUrl: "#case-study-kindle"
    },
    {
      id: 2,
      name: "Ryan Carter",
      company: "TechFlow",
      position: "CEO - TechFlow Inc.",
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_6b12274dee.png",
      testimonial: "Their proactive approach kept us informed, and the code quality exceeded our expectations, reducing extensive testing. InnoScope's clear communication made them a standout partner, ensuring smooth collaboration throughout the project.",
      caseStudyUrl: "#case-study-techflow"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      company: "DataVision",
      position: "CTO - DataVision Corp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=380&h=350&fit=crop&crop=face",
      testimonial: "InnoScope delivered exceptional results with seamless integration and outstanding support. Their technical expertise and collaborative approach ensured smooth project execution throughout.",
      caseStudyUrl: "#case-study-datavision"
    },
    {
      id: 4,
      name: "Michael Chen",
      company: "CloudSync",
      position: "Technical Director",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=380&h=350&fit=crop&crop=face",
      testimonial: "Working with InnoScope transformed our development process. Their expertise in cloud architecture and dedication to quality helped us scale efficiently while maintaining code excellence.",
      caseStudyUrl: "#case-study-cloudsync"
    }
  ];

  const partners = [
    { 
      name: "Clutch", 
      logo: "https://cdn.worldvectorlogo.com/logos/clutch-2.svg",
      color: "#FF6D2D"
    },
    { 
      name: "DesignRush", 
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='5' y='20' font-family='Arial' font-size='12' fill='%2300C4CC'%3EDesignRush%3C/text%3E%3C/svg%3E",
      color: "#00C4CC"
    },
    { 
      name: "Trustpilot", 
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Cpolygon points='15,5 18,14 27,14 20,19 23,28 15,23 7,28 10,19 3,14 12,14' fill='%2300B67A'/%3E%3Ctext x='30' y='20' font-family='Arial' font-size='10' fill='%2300B67A'%3ETrustpilot%3C/text%3E%3C/svg%3E",
      color: "#00B67A"
    },
    { 
      name: "Google", 
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='5' y='20' font-family='Arial' font-size='14' fill='%234285F4'%3EGoogle%3C/text%3E%3C/svg%3E",
      color: "#4285F4"
    },
    { 
      name: "GoodFirms", 
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='5' y='20' font-family='Arial' font-size='11' fill='%234285F4'%3EGoodFirms%3C/text%3E%3C/svg%3E",
      color: "#4285F4"
    }
  ];

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        
        // Reset transition lock after animation completes
        setTimeout(() => {
          setIsTransitioning(false);
        }, 600);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isTransitioning, testimonials.length]);

  // Update testimonial track position
  useEffect(() => {
    if (testimonialTrackRef.current) {
      const translateX = -currentTestimonial * 100;
      testimonialTrackRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    
    // Reset transition lock after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    // Reset transition lock after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const goToTestimonial = (index) => {
    if (isTransitioning || index === currentTestimonial) return;
    
    setIsTransitioning(true);
    setCurrentTestimonial(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  // Enhanced Intersection Observer for multiple elements
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === componentRef.current) {
            setIsVisible(true);
          } else if (entry.target === partnerSectionRef.current) {
            entry.target.classList.add('animate-in');
          } else {
            // Add animation classes based on data attributes
            const animationType = entry.target.getAttribute('data-animation');
            if (animationType) {
              entry.target.classList.add('visible');
            }
          }
        }
      });
    }, observerOptions);

    // Observe main component
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Observe partner section
    if (partnerSectionRef.current) {
      observer.observe(partnerSectionRef.current);
    }

    // Observe elements with scroll animations
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePlayVideo = (testimonial) => {
    // Placeholder for video functionality
    console.log(`Playing video for ${testimonial.name}`);
    // You can implement video modal or redirect logic here
  };

  const handleCaseStudy = (caseStudyUrl) => {
    // Placeholder for case study navigation
    console.log(`Navigating to case study: ${caseStudyUrl}`);
    // You can implement navigation logic here
  };

  return (
    <div ref={componentRef} className={`business-services ${isVisible ? 'animate-in' : ''}`}>
      {/* Header Section */}
      <div className="header-section" data-animation="fade-in-on-scroll">
        <h1 className="main-title">
          Backing Your Up At <span className="highlight">Every Stage Of Your Progress</span>
        </h1>
        <p className="subtitle">
          From launching startups to expanding enterprises, or recovering from setbacks, we help 
          businesses overcome every challenge on their journey.
        </p>
      </div>

      {/* Service Cards */}
      <div className="services-grid">
        <div className="service-card startup-card" data-animation="slide-in-left">
          <div className="card-content">
            <h2 className="card-title">
              I'm A<br />
              <span className="card-highlight">Startup.</span>
            </h2>
            <p className="card-description">
              Remarkable ideas often stall without the right team to bring them to life
            </p>
            <button className="card-button">
              Get Started
              <span className="button-arrow">→</span>
            </button>
          </div>
          <div className="card-bg-shape"></div>
        </div>

        <div className="service-card enterprise-card" data-animation="fade-in-on-scroll">
          <div className="card-content">
            <h2 className="card-title">
              I'm An<br />
              <span className="card-highlight">Enterprise.</span>
            </h2>
            <p className="card-description">
              Scaling without the right infrastructure and expertise can lead to costly bottlenecks.
            </p>
            <button className="card-button dark">
              Explore More
              <span className="button-arrow">→</span>
            </button>
          </div>
          <div className="card-bg-shape enterprise-shape"></div>
        </div>

        <div className="service-card rescue-card" data-animation="slide-in-right">
          <div className="card-content">
            <h2 className="card-title">
              I Need A<br />
              <span className="card-highlight">Rescue.</span>
            </h2>
            <p className="card-description">
              A messy codebase and tech debt are suffocating your progress.
            </p>
            <button className="card-button">
              Need a Fix
              <span className="button-arrow">→</span>
            </button>
          </div>
          <div className="card-bg-shape"></div>
        </div>
      </div>

      {/* Discussion CTA */}
      <div className="discussion-cta" data-animation="fade-in-on-scroll">
        <div className="cta-content">
          <h2 className="cta-title">
            Got An Idea Or Concerns?<br />
            Let's Discuss.
          </h2>
          <button className="cta-button">
            Explore More
            <span className="button-arrow">→</span>
          </button>
        </div>
        <div className="cta-bg-pattern"></div>
      </div>

      {/* Enhanced Partner Success Stories Section */}
      <div 
        ref={partnerSectionRef} 
        className="partner-success-section"
        data-animation="fade-in-on-scroll"
      >
        <div className="section-header">
          <div>
            <h2 className="section-title">
              Partner's <span className="highlight">Success Stories</span>
            </h2>
          </div>
          
          <div className="navigation-controls">
            <button 
              className={`nav-button ${currentTestimonial === 0 ? 'disabled' : ''}`}
              onClick={prevTestimonial}
              disabled={isTransitioning}
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <button 
              className={`nav-button ${currentTestimonial === testimonials.length - 1 ? 'disabled' : ''}`}
              onClick={nextTestimonial}
              disabled={isTransitioning}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="testimonial-carousel">
          <div 
            ref={testimonialTrackRef}
            className="testimonial-track"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="testimonial-slide"
              >
                <div className="testimonial-image">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-avatar"
                    loading="lazy"
                  />
                  <button 
                    className="play-button"
                    onClick={() => handlePlayVideo(testimonial)}
                    aria-label={`Play video testimonial for ${testimonial.name}`}
                  >
                    ▶ Play Video
                  </button>
                </div>

                <div className="testimonial-content">
                  <div className="company-logo">
                    {testimonial.company}
                  </div>
                  <h3 className="testimonial-name">
                    {testimonial.name.split(' ')[0]} <span className="highlight">{testimonial.name.split(' ')[1]}</span>
                  </h3>
                  <p className="testimonial-position">{testimonial.position}</p>
                  <p className="testimonial-text">{testimonial.testimonial}</p>
                  <button 
                    className="case-study-link"
                    onClick={() => handleCaseStudy(testimonial.caseStudyUrl)}
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Partner Logos Section - Outside Container */}
      <div className="partner-logos-section">
       
        <div className="partner-logos">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="partner-logo"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessServices;