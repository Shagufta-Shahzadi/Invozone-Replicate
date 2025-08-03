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
    company: "Kinde",
    logo: "https://images.seeklogo.com/logo-png/35/1/clutch-logo-png_seeklogo-352148.png",
    position: "Kindle Product Manager",
    image: "https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_81dcf601de.webp",
    testimonial: "We partnered with InvoZone to enhance our Elixir SDK, and the process was seamless. Consistent communication and timely status updates, even with minor estimate shifts, allowed us to adapt efficiently. Their proactive approach kept us informed, and the code quality exceeded our expectations, reducing extensive testing. Overall, InvoZone's clear communication and high-quality delivery made them a standout partner, ensuring smooth collaboration throughout the project.",
    caseStudyUrl: "#case-study-kinde"
  },
  {
    id: 2,
    name: "Ron Zabel",
    company: "Crytool.io",
    
    position: "CEO - Crytool.io",
    image: "https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_1_77a08bad66.png", // (replace with actual image if you have it)
    testimonial: "InvoZone has been a game-changer for us, bringing fresh ideas and genuine support to our projects. This was not the first time we outsourced, but for sure the smoothest experience we had.",
    caseStudyUrl: "#case-study-crytool"
  },
  {
    id: 3,
    name: "Ryan Carter",
    company: "Shield Republic",
    position: "Co-Founder - Shield Republic",
    image: "https://invozone-backend.s3.us-east-1.amazonaws.com/ryan_98b623518c.webp",
    testimonial: "We were initially hesitant to outsource overseas, especially after our previous experience with another company that provided average services. Since partnering with InvoZone, we’ve seen no decline in quality. The team is responsive, easy to work with, and possesses comprehensive knowledge of web app development and API integrations.",
    caseStudyUrl: "#case-study-shieldrepublic"
  },
  {
    id: 4,
    name: "David Smith",
    company: "Easyfill.ai",
    position: "CEO & Co-Founder - Easyfill",
    image: "https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_81dcf601de.webp", // (replace with actual image if you have it)
    testimonial: "InvoZone has been a game-changer for us, offering fresh ideas and genuine support. This wasn’t our first outsourcing experience, but it has definitely been the smoothest.",
    caseStudyUrl: "#case-study-easyfill"
  },
  {
    id: 5,
    name: "Chris Dominguez",
    company: "StorageChain",
    position: "CEO - StorageChain",
    image: "https://invozone-backend.s3.us-east-1.amazonaws.com/Chris_Dominguez_8fb4bfa290.webp", // (replace with actual image if you have it)
    testimonial: "Every member of the InvoZone team has been diligent and focused, fostering a genuine partnership on the technology front.",
    caseStudyUrl: "#case-study-storagechain"
  }
];

  const partners = [
    { 
      name: "Clutch", 
      logo: "https://images.seeklogo.com/logo-png/35/1/clutch-logo-png_seeklogo-352148.png",
      color: "#00C4CC"
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

  

  // Enhanced Intersection Observer for scroll animations
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
            entry.target.classList.add('BusinessServices-animate-in');
          } else {
            // Add animation classes based on data attributes
            const animationType = entry.target.getAttribute('data-animation');
            if (animationType) {
              entry.target.classList.add('BusinessServices-visible');
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
    <div ref={componentRef} className={`BusinessServices-container ${isVisible ? 'BusinessServices-animate-in' : ''}`}>
      {/* Header Section */}
      <div className="BusinessServices-header-section" data-animation="BusinessServices-fade-in-on-scroll">
        <h1 className="BusinessServices-main-title">
          Backing Your Up At <span className="BusinessServices-highlight">Every Stage Of Your Progress</span>
        </h1>
        <p className="BusinessServices-subtitle">
          From launching startups to expanding enterprises, or recovering from setbacks, we help 
          businesses overcome every challenge on their journey.
        </p>
      </div>

      {/* Service Cards */}
      <div className="BusinessServices-services-grid">
        <div className="BusinessServices-service-card BusinessServices-startup-card" data-animation="BusinessServices-slide-in-left">
          <div className="BusinessServices-card-content">
            <h2 className="BusinessServices-card-title">
              I'm A<br />
              <span className="BusinessServices-card-highlight">Startup.</span>
            </h2>
            <p className="BusinessServices-card-description">
              Remarkable ideas often stall without the right team to bring them to life
            </p>
            <button className="BusinessServices-card-button">
              Get Started
              <span className="BusinessServices-button-arrow">→</span>
            </button>
          </div>
          <div className="BusinessServices-card-bg-shape"></div>
        </div>

        <div className="BusinessServices-service-card BusinessServices-enterprise-card" data-animation="BusinessServices-fade-in-on-scroll">
          <div className="BusinessServices-card-content">
            <h2 className="BusinessServices-card-title">
              I'm An<br />
              <span className="BusinessServices-card-highlight">Enterprise.</span>
            </h2>
            <p className="BusinessServices-card-description">
              Scaling without the right infrastructure and expertise can lead to costly bottlenecks.
            </p>
            <button className="BusinessServices-card-button BusinessServices-dark">
              Explore More
              <span className="BusinessServices-button-arrow">→</span>
            </button>
          </div>
          <div className="BusinessServices-card-bg-shape BusinessServices-enterprise-shape"></div>
        </div>

        <div className="BusinessServices-service-card BusinessServices-rescue-card" data-animation="BusinessServices-slide-in-right">
          <div className="BusinessServices-card-content">
            <h2 className="BusinessServices-card-title">
              I Need A<br />
              <span className="BusinessServices-card-highlight">Rescue.</span>
            </h2>
            <p className="BusinessServices-card-description">
              A messy codebase and tech debt are suffocating your progress.
            </p>
            <button className="BusinessServices-card-button">
              Need a Fix
              <span className="BusinessServices-button-arrow">→</span>
            </button>
          </div>
          <div className="BusinessServices-card-bg-shape"></div>
        </div>
      </div>

      {/* Discussion CTA */}
      <div className="BusinessServices-discussion-cta" data-animation="BusinessServices-fade-in-on-scroll">
        <div className="BusinessServices-cta-content">
          <h2 className="BusinessServices-cta-title">
            Got An Idea Or Concerns?<br />
            Let's Discuss.
          </h2>
          <button className="BusinessServices-cta-button">
            Explore More
            <span className="BusinessServices-button-arrow">→</span>
          </button>
        </div>
        <div className="BusinessServices-cta-bg-pattern"></div>
      </div>

      {/* Enhanced Partner Success Stories Section */}
      <div 
        ref={partnerSectionRef} 
        className="BusinessServices-partner-success-section"
        data-animation="BusinessServices-fade-in-on-scroll"
      >
        <div className="BusinessServices-section-header">
          <div>
            <h2 className="BusinessServices-section-title">
              Partner's <span className="BusinessServices-highlight">Success Stories</span>
            </h2>
          </div>
          
          <div className="BusinessServices-navigation-controls">
            <button 
              className={`BusinessServices-nav-button ${currentTestimonial === 0 ? 'BusinessServices-disabled' : ''}`}
              onClick={prevTestimonial}
              disabled={isTransitioning}
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <button 
              className={`BusinessServices-nav-button ${currentTestimonial === testimonials.length - 1 ? 'BusinessServices-disabled' : ''}`}
              onClick={nextTestimonial}
              disabled={isTransitioning}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="BusinessServices-testimonial-carousel">
          <div 
            ref={testimonialTrackRef}
            className="BusinessServices-testimonial-track"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="BusinessServices-testimonial-slide"
              >
                <div className="BusinessServices-testimonial-image">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="BusinessServices-testimonial-avatar"
                    loading="lazy"
                  />
                  <button 
                    className="BusinessServices-play-button"
                    onClick={() => handlePlayVideo(testimonial)}
                    aria-label={`Play video testimonial for ${testimonial.name}`}
                  >
                    ▶ Play Video
                  </button>
                </div>

                <div className="BusinessServices-testimonial-content">
                  <div className="BusinessServices-company-logo">
                    {testimonial.company}
                  </div>
                  <h3 className="BusinessServices-testimonial-name">
                    {testimonial.name.split(' ')[0]} <span className="BusinessServices-highlight">{testimonial.name.split(' ')[1]}</span>
                  </h3>
                  <p className="BusinessServices-testimonial-position">{testimonial.position}</p>
                  <p className="BusinessServices-testimonial-text">{testimonial.testimonial}</p>
                  <button 
                    className="BusinessServices-case-study-link"
                    onClick={() => handleCaseStudy(testimonial.caseStudyUrl)}
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>

      {/* Partner Logos Section - Outside Container */}
      <div className="BusinessServices-partner-logos-section" data-animation="BusinessServices-fade-in-on-scroll">
        <div className="BusinessServices-partner-logos">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="BusinessServices-partner-logo"
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