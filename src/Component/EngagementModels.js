import React, { useState, useEffect, useRef } from 'react';
import './EngagementModels.css';

const EngagementModels = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);

  const engagementData = [
    {
      id: 0,
      title: "Product Development",
      subtitle: "Transforming your ideas into ready-to-launch products.",
      features: [
        "Early Growth Stage or Stealth Startup",
        "Product Development Roadmap", 
        "MVP Development",
        "Prototypes / POC"
      ],
      diagram: "product"
    },
    {
      id: 1,
      title: "Managed IT Systems",
      subtitle: "Streamlined IT management for smooth operations.",
      features: [
        "Scale and ongoing of live products",
        "Refining Product Roadmaps for scalability", 
        "Completing Backlogs or Features",
        "Defined Technology Stacks"
      ],
      diagram: "managed"
    },
    {
      id: 2,
      title: "Team Augmentation",
      subtitle: "Upgrade your team with specialized skills & expertise.",
      features: [
        "Operational team efficiency is high and nimble",
        "Quick Turn-around times",
        "Access to the global talent pool", 
        "Collaborate with in-house & Outsourced Teams"
      ],
      diagram: "augmentation"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementClass = entry.target.className;
            if (elementClass.includes('EngagementModels-wrapper')) {
              setIsVisible(true);
            } else {
              // Add animation class when element comes into view
              entry.target.classList.add('EngagementModels-animate');
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    // Observe the main wrapper
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(
      '.EngagementModels-slide-up, .EngagementModels-slide-up-delay, .EngagementModels-card-slide, .EngagementModels-text-focus, .EngagementModels-text-fade, .EngagementModels-list-slide, .EngagementModels-button-rise'
    );
    
    animatableElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Reset animations when tab changes
  useEffect(() => {
    const animatableElements = document.querySelectorAll('.EngagementModels-list-slide');
    animatableElements.forEach((el, index) => {
      el.classList.remove('EngagementModels-animate');
      setTimeout(() => {
        el.classList.add('EngagementModels-animate');
      }, index * 100);
    });
  }, [activeTab]);

  const renderDiagram = (type) => {
    switch (type) {
      case 'product':
        return (
          <div className="EngagementModels-diagram-product">
            <div className="EngagementModels-center-circle EngagementModels-pulse">
              <span>InnoZone</span>
            </div>
            <div className="EngagementModels-surrounding-icons">
              <div className="EngagementModels-icon-node EngagementModels-icon-1 EngagementModels-float">💼</div>
              <div className="EngagementModels-icon-node EngagementModels-icon-2 EngagementModels-float-delay">📱</div>
              <div className="EngagementModels-icon-node EngagementModels-icon-3 EngagementModels-float">💡</div>
              <div className="EngagementModels-icon-node EngagementModels-icon-4 EngagementModels-float-delay">⚙️</div>
              <div className="EngagementModels-icon-node EngagementModels-icon-5 EngagementModels-float">🎯</div>
            </div>
            <div className="EngagementModels-pm-circle EngagementModels-bounce">
              <div className="EngagementModels-pm-avatar">👤</div>
              <span>Your PM</span>
            </div>
          </div>
        );
      case 'managed':
        return (
          <div className="EngagementModels-diagram-managed">
            <div className="EngagementModels-team-circle EngagementModels-slide-right">
              <div className="EngagementModels-team-avatar">👨‍💻</div>
            </div>
            <div className="EngagementModels-connection-bar EngagementModels-draw"></div>
            <div className="EngagementModels-you-circle EngagementModels-slide-left">
              <div className="EngagementModels-you-avatar">👤</div>
              <span>You</span>
            </div>
          </div>
        );
      case 'augmentation':
        return (
          <div className="EngagementModels-diagram-augmentation">
            <div className="EngagementModels-invozone-circle EngagementModels-rotate">
              <div className="EngagementModels-company-avatar">🏢</div>
              <span>InnoZone</span>
            </div>
            <div className="EngagementModels-team-hub EngagementModels-scale">
              <span>YOUR TEAM</span>
              <div className="EngagementModels-hub-lines">
                <div className="EngagementModels-line EngagementModels-line-1 EngagementModels-draw"></div>
                <div className="EngagementModels-line EngagementModels-line-2 EngagementModels-draw-delay"></div>
                <div className="EngagementModels-line EngagementModels-line-3 EngagementModels-draw"></div>
                <div className="EngagementModels-line EngagementModels-line-4 EngagementModels-draw-delay"></div>
              </div>
            </div>
            <div className="EngagementModels-question-marks">
              <div className="EngagementModels-q-mark EngagementModels-q-1 EngagementModels-bounce">?</div>
              <div className="EngagementModels-q-mark EngagementModels-q-2 EngagementModels-bounce-delay">?</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      ref={wrapperRef}
      className={`EngagementModels-wrapper ${isVisible ? 'EngagementModels-visible' : ''}`}
    >
      <div className="EngagementModels-section-header">
        <h2 className="EngagementModels-section-title EngagementModels-slide-up">
          Engagement <span className="EngagementModels-blue-text">Models</span>
        </h2>
        <p className="EngagementModels-section-description EngagementModels-slide-up-delay">
          Choose from flexible engagement models tailored to your needs, ensuring
          seamless collaboration with time & material or dedicated teams.
        </p>
      </div>

      <div className="EngagementModels-tabs-navigation">
        {engagementData.map((item, index) => (
          <button
            key={item.id}
            className={`EngagementModels-nav-tab ${activeTab === index ? 'EngagementModels-active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="EngagementModels-engagement-card EngagementModels-card-slide">
        <div className="EngagementModels-card-layout">
          <div className="EngagementModels-content-section">
            <h3 className="EngagementModels-card-title EngagementModels-text-focus">
              {engagementData[activeTab].title}
            </h3>
            <p className="EngagementModels-card-subtitle EngagementModels-text-fade">
              {engagementData[activeTab].subtitle}
            </p>
            
            <div className="EngagementModels-features-grid">
              {engagementData[activeTab].features.map((feature, index) => (
                <div 
                  key={index} 
                  className="EngagementModels-feature-row EngagementModels-list-slide"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="EngagementModels-check-mark">✓</div>
                  <span className="EngagementModels-feature-text">{feature}</span>
                </div>
              ))}
            </div>

            <button className="EngagementModels-details-button EngagementModels-button-rise">
              View Details →
            </button>
          </div>

          <div className="EngagementModels-diagram-section">
            {renderDiagram(engagementData[activeTab].diagram)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementModels;