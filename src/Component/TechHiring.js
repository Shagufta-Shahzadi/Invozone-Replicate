import React, { useState, useEffect, useRef } from 'react';
import { technologiesData } from '../Data/technologiesData';
import './TechHiring.css';

const TechHiringComponent = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const categories = ['All', 'Front-End', 'Back-End', 'Low/No Code', 'Database', 'DevOps', 'Mobile', 'AI & ML'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentComponent = componentRef.current; // Capture the ref value

    if (currentComponent) {
      observer.observe(currentComponent);
    }

    return () => {
      if (currentComponent) { // Use the captured value
        observer.unobserve(currentComponent);
      }
      observer.disconnect(); // Clean up the observer entirely
    };
  }, []);

  const getAllTechnologies = () => {
    return Object.values(technologiesData).flat();
  };

  const getFilteredTechnologies = () => {
    let technologies = activeCategory === 'All' 
      ? getAllTechnologies() 
      : technologiesData[activeCategory] || [];

    if (searchTerm) {
      technologies = technologies.filter(tech => 
        tech.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return technologies;
  };

  return (
    <div 
      ref={componentRef}
      className={`tech-hiring-container animate-on-scroll ${isVisible ? 'animate' : ''}`}
    >
      <div className="header-section">
        <div className="header-content">
          <h1 className="main-title">Build Your Own Team - <span className="highlight">Hire Developer</span></h1>
          <p className="subtitle">
            We've built our business by assembling a team of skilled developers, experts in 
            the frameworks and technologies driving modern solutions.
          </p>
        </div>
        <div className="search-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="search-icon">🔍</div>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="technologies-grid">
        {getFilteredTechnologies().map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="tech-card">
            <div className="tech-logo">
              <img src={tech.logo} alt={tech.name} />
            </div>
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>

      {getFilteredTechnologies().length === 0 && (
        <div className="no-results">
          <p>No technologies found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default TechHiringComponent;