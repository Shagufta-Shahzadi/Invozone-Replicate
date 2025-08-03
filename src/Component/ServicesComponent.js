import React, { useState, useEffect, useRef } from 'react';
import { 
  Settings, 
  Database, 
  Users, 
  Cloud, 
  Layers, 
  Blocks,
  Code,
  Cpu,
  Smartphone,
  Globe
} from 'lucide-react';
import { servicesData, navigationItems } from '../Data/servicesData';
import './ServicesComponent.css';

const ServicesComponent = () => {
  const [activeService, setActiveService] = useState(1);
  const [imageErrors, setImageErrors] = useState({});
  
  // Refs for scroll animation
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const navigationGridRef = useRef(null);
  const detailSectionRef = useRef(null);

  const currentService = servicesData.find(service => service.id === activeService);

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
    // Reset image errors when switching services
    setImageErrors({});
  };

  // Professional icons mapping for navigation items
  const getServiceIcon = (id) => {
    const iconMap = {
      1: <Settings className="services-nav-icon" />,
      2: <Database className="services-nav-icon" />,
      3: <Users className="services-nav-icon" />,
      4: <Cloud className="services-nav-icon" />,
      5: <Layers className="services-nav-icon" />,
      6: <Blocks className="services-nav-icon" />
    };
    return iconMap[id] || <Settings className="services-nav-icon" />;
  };

  // Fallback icon mapping for tech icons
  const getFallbackIcon = (techName) => {
    const fallbackMap = {
      'React': <Code className="w-8 h-8 text-blue-500" />,
      'Vue.js': <Code className="w-8 h-8 text-green-500" />,
      'Angular': <Code className="w-8 h-8 text-red-500" />,
      'Node.js': <Cpu className="w-8 h-8 text-green-600" />,
      'JavaScript': <Code className="w-8 h-8 text-yellow-500" />,
      'Python': <Code className="w-8 h-8 text-blue-600" />,
      'Laravel': <Code className="w-8 h-8 text-red-600" />,
      'PHP': <Code className="w-8 h-8 text-purple-600" />,
      'GitHub': <Code className="w-8 h-8 text-gray-800" />,
      'Docker': <Cpu className="w-8 h-8 text-blue-400" />,
      'AWS': <Cloud className="w-8 h-8 text-orange-500" />,
      'Google Cloud': <Cloud className="w-8 h-8 text-blue-500" />,
      'Azure': <Cloud className="w-8 h-8 text-blue-600" />,
      'Kubernetes': <Cpu className="w-8 h-8 text-blue-700" />,
      'React Native': <Smartphone className="w-8 h-8 text-blue-500" />,
      'Swift': <Smartphone className="w-8 h-8 text-orange-500" />,
      'Kotlin': <Smartphone className="w-8 h-8 text-purple-500" />,
      'TensorFlow': <Cpu className="w-8 h-8 text-orange-600" />,
      'PyTorch': <Cpu className="w-8 h-8 text-red-500" />,
      'Solidity': <Blocks className="w-8 h-8 text-gray-700" />,
      'Ethereum': <Blocks className="w-8 h-8 text-purple-600" />,
      'Web3.js': <Globe className="w-8 h-8 text-orange-500" />
    };
    
    return fallbackMap[techName] || <Code className="w-8 h-8 text-gray-500" />;
  };

  // Handle image error
  const handleImageError = (techName, index) => {
    setImageErrors(prev => ({
      ...prev,
      [`${activeService}-${index}`]: true
    }));
  };

  // Handle image load success
  const handleImageLoad = (techName, index) => {
    setImageErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[`${activeService}-${index}`];
      return newErrors;
    });
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Special handling for navigation grid to animate cards individually
          if (entry.target === navigationGridRef.current) {
            const navCards = entry.target.querySelectorAll('.services-nav-card');
            navCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 80); // Stagger animation by 80ms
            });
          }

          // Special handling for detail section to animate features and tech items
          if (entry.target === detailSectionRef.current) {
            const featureItems = entry.target.querySelectorAll('.services-feature-item');
            const techItems = entry.target.querySelectorAll('.services-tech-item');
            
            featureItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-in');
              }, index * 60);
            });

            techItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-in');
              }, (index * 40) + 200); // Start after features
            });
          }
        } else {
          // Remove animation class when out of view to re-trigger on scroll back
          entry.target.classList.remove('animate-in');
          
          if (entry.target === navigationGridRef.current) {
            const navCards = entry.target.querySelectorAll('.services-nav-card');
            navCards.forEach(card => card.classList.remove('animate-in'));
          }

          if (entry.target === detailSectionRef.current) {
            const featureItems = entry.target.querySelectorAll('.services-feature-item');
            const techItems = entry.target.querySelectorAll('.services-tech-item');
            
            featureItems.forEach(item => item.classList.remove('animate-in'));
            techItems.forEach(item => item.classList.remove('animate-in'));
          }
        }
      });
    }, observerOptions);

    // Observe elements
    if (headerRef.current) observer.observe(headerRef.current);
    if (navigationGridRef.current) observer.observe(navigationGridRef.current);
    if (detailSectionRef.current) observer.observe(detailSectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Re-trigger animations when service changes (simplified)
  useEffect(() => {
    if (detailSectionRef.current) {
      // Just add a small delay for smooth transition, don't remove classes
      setTimeout(() => {
        const featureItems = detailSectionRef.current.querySelectorAll('.services-feature-item');
        const techItems = detailSectionRef.current.querySelectorAll('.services-tech-item');
        
        featureItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animate-in');
          }, index * 60);
        });

        techItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animate-in');
          }, (index * 40) + 200);
        });
      }, 50);
    }
  }, [activeService]);

  return (
    <div className="services-main-container" ref={containerRef}>
      <div className="services-main-header" ref={headerRef}>
        <div className="services-header-content">
          <h1 className="services-main-title">Software Development Services</h1>
          <h2 className="services-sub-title">Forward Planners</h2>
        </div>
        <button className="services-view-all-btn">
          View All
          <span className="services-arrow">→</span>
        </button>
      </div>

      <div className="services-main-content">
        <div className="services-navigation-grid" ref={navigationGridRef}>
          {navigationItems.map((item) => (
            <div
              key={item.id}
              className={`services-nav-card ${activeService === item.id ? 'services-active' : ''}`}
              onClick={() => handleServiceClick(item.id)}
            >
              {getServiceIcon(item.id)}
              <h3 className="services-nav-title">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="services-detail-section" ref={detailSectionRef}>
          <h2 className="services-detail-title">{currentService?.title}</h2>
          <p className="services-detail-description">{currentService?.description}</p>

          <div className="services-features-grid">
            {currentService?.services.map((service, index) => (
              <div key={index} className="services-feature-item">
                <span className="services-feature-dot"></span>
                <span className="services-feature-text">{service}</span>
              </div>
            ))}
          </div>

          <div className="services-tech-grid">
            {currentService?.technologies.map((tech, index) => (
              <div key={`${activeService}-${index}`} className="services-tech-item" title={tech.name}>
                {imageErrors[`${activeService}-${index}`] ? (
                  // Show fallback icon if image failed to load
                  <div className="services-tech-fallback">
                    {getFallbackIcon(tech.name)}
                  </div>
                ) : (
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="services-tech-icon"
                    onLoad={() => handleImageLoad(tech.name, index)}
                    onError={() => handleImageError(tech.name, index)}
                    style={{ display: 'block' }} // Always keep visible
                  />
                )}
              </div>
            ))}
          </div>

          <button className="services-view-more-btn">
            View More
            <span className="services-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;