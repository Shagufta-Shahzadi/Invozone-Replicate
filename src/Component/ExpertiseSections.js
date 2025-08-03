import React, { useState, useEffect, useRef } from 'react';
import { industriesData, dataSets } from '../Data/industriesData';
import './ExpertiseSections.css';

const ExpertiseSections = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const observerRef = useRef(null);

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
    if (!isPaused && isVisible) {
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
  }, [isPaused, isVisible]);

  // Enhanced Intersection Observer for scroll animation
  useEffect(() => {
    const options = {
      threshold: [0.1, 0.2, 0.3],
      rootMargin: '-20px 0px -20px 0px'
    };

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        const intersectionRatio = entry.intersectionRatio;
        
        console.log('Container visible:', isIntersecting, 'Ratio:', intersectionRatio);
        
        setIsVisible(isIntersecting);
        
        // Trigger animation when component becomes visible
        if (isIntersecting && intersectionRatio >= 0.2 && !hasAnimated) {
          setHasAnimated(true);
          console.log('Animation triggered');
        }
        
        // Reset animation when component goes out of view completely
        if (!isIntersecting && intersectionRatio === 0) {
          setTimeout(() => {
            setHasAnimated(false);
            console.log('Animation reset for re-trigger');
          }, 200);
        }
      },
      options
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observerRef.current.observe(currentContainer);
    }

    return () => {
      if (observerRef.current && currentContainer) {
        observerRef.current.unobserve(currentContainer);
      }
    };
  }, [hasAnimated]);

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

  // Touch handlers for mobile swipe support
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNavigation('next');
    } else if (isRightSwipe) {
      handleNavigation('prev');
    }
  };

  return (
    <div 
      className={`expertise-container ${hasAnimated ? 'animate-in' : ''} ${isVisible ? 'visible' : ''}`} 
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
        <div 
          className="expertise-sections"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
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
                      backgroundImage: isHovered ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${section.bgImage})` : 'none',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="section-content">
                      <h3 className="section-title">{section.title}</h3>
                      <ul className="section-items">
                        {section.items.map((item, itemIndex) => (
                          <li 
                            key={itemIndex} 
                            className="section-item"
                            style={{ animationDelay: `${(index * 0.1) + (itemIndex * 0.05)}s` }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <button 
                        className="explore-btn"
                        onClick={() => handleExploreClick(key)}
                        aria-label={`Explore ${section.title}`}
                        style={{ animationDelay: `${(index * 0.1) + 0.3}s` }}
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

      {/* Progress indicators for mobile */}
      <div className="progress-indicators">
        {dataSets.map((_, index) => (
          <button
            key={index}
            className={`progress-dot ${index === currentSetIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentSetIndex(index);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSections;