import React, { useState, useEffect, useRef } from 'react';
import { industriesData, dataSets } from '../Data/industriesData';
import './ExpertiseSections.css';

const ExpertiseSections = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Debug: Log current data to console
  useEffect(() => {
    console.log('Total dataSets:', dataSets.length);
    console.log('Current set index:', currentSetIndex);
    console.log('Current set data:', dataSets[currentSetIndex]);
    dataSets.forEach((set, index) => {
      console.log(`Set ${index}:`, set.map(key => industriesData[key]?.title));
    });
  }, [currentSetIndex]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSetIndex((prev) => {
          const nextIndex = (prev + 1) % dataSets.length;
          console.log('Auto switching from', prev, 'to', nextIndex);
          return nextIndex;
        });
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        console.log('Container visible:', entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  const handleMouseEnter = (sectionId) => {
    setHoveredSection(sectionId);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
    setIsPaused(false);
  };

  const handleNavigation = (direction) => {
    setIsPaused(true);
    
    if (direction === 'next') {
      setCurrentSetIndex((prev) => {
        const nextIndex = (prev + 1) % dataSets.length;
        console.log('Manual next: from', prev, 'to', nextIndex);
        return nextIndex;
      });
    } else {
      setCurrentSetIndex((prev) => {
        const nextIndex = (prev - 1 + dataSets.length) % dataSets.length;
        console.log('Manual prev: from', prev, 'to', nextIndex);
        return nextIndex;
      });
    }
    
    // Resume auto-slide after 3 seconds
    setTimeout(() => setIsPaused(false), 3000);
  };

  const handleExploreClick = (sectionKey) => {
    console.log('Exploring section:', sectionKey);
    // Add your navigation logic here
    // Example: navigate to detailed page or open modal
  };

  return (
    <div 
      className={`expertise-container ${isVisible ? 'animate-in' : ''}`} 
      ref={containerRef}
    >
      <div className="expertise-header">
        <h2>Expertise in Software Development Across Multiple <span className="highlight">Industries</span></h2>
        <div className="navigation-arrows">
          <button 
            className="nav-arrow" 
            onClick={() => handleNavigation('prev')}
            aria-label="Previous section"
          >
            ‹
          </button>
          <button 
            className="nav-arrow" 
            onClick={() => handleNavigation('next')}
            aria-label="Next section"
          >
            ›
          </button>
        </div>
      </div>

      <div className="expertise-sections-wrapper">
        <div className="expertise-sections">
          {dataSets.map((set, setIndex) => (
            <div 
              key={setIndex} 
              className={`section-set ${setIndex === currentSetIndex ? 'active' : ''}`}
            >
              {set.map((key, index) => {
                const section = industriesData[key];
                const isHovered = hoveredSection === key;
                const isAlternate = index % 2 === 1;
                
                if (!section) {
                  console.warn(`Missing section data for key: ${key}`);
                  return null;
                }
                
                return (
                  <div 
                    key={`${key}-${setIndex}`}
                    className={`section-card bg-custom ${isHovered ? 'hovered' : ''} ${isAlternate ? 'alternate' : ''}`}
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      backgroundImage: isHovered ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${section.bgImage})` : 'none'
                    }}
                  >
                    <div className="section-content">
                      <h3 className="section-title">{section.title}</h3>
                      <ul className="section-items">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="section-item">{item}</li>
                        ))}
                      </ul>
                      <button 
                        className="explore-btn"
                        onClick={() => handleExploreClick(key)}
                        aria-label={`Explore ${section.title}`}
                      >
                        Explore More
                        <span className="arrow-icon">→</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default ExpertiseSections;