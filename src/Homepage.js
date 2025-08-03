import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import './Homepage.css';
import logo from '../src/Assests/company Logo.png'; // Add your logo import path here
import CompanyLogos from './Component/CompanyLogos';
import Footer from './Component/Footer';
import BusinessServices from './Component/BusinessServices';
import ExpertiseSections from './Component/ExpertiseSections';
import TechHiringComponent from './Component/TechHiring';
import EngagementModels from './Component/EngagementModels';
import ServicesComponent from './Component/ServicesComponent';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.header') && !event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'What We Do', hasDropdown: true },
    { name: 'Who We Serve', hasDropdown: true },
    { name: 'How We Engage', hasDropdown: true },
    { name: 'Hire Dev', hasDropdown: true },
    { name: 'Company', hasDropdown: true },
    { name: 'Careers', hasDropdown: false },
  ];

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(false);
  };

  return (
    <div className="homepage">
      {/* Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="Invozone" className="logo-image" />
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item, index) => (
              <div key={index} className="nav-item">
                <button className="nav-link">
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </button>
              </div>
            ))}
          </nav>

          {/* CTA Buttons - Desktop Only */}
          <div className="header-cta desktop-only">
            <button className="contact-btn">Contact Us</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
            onClick={closeMobileMenu}
          />
        )}
        <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          {/* Mobile Menu Header with Logo and Close Button */}
          <div className="mobile-menu-header">
            <div className="mobile-menu-logo">
              <img src={logo} alt="Invozone" className="logo-image" />
            </div>
            <button 
              className="mobile-menu-close"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Mobile Menu Content */}
          <div className="mobile-menu-content">
            <nav className="mobile-nav">
              {navItems.map((item, index) => (
                <button 
                  key={index}
                  className="mobile-nav-link"
                  onClick={handleMobileNavClick}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={18} />}
                </button>
              ))}
            </nav>
            
            <div className="mobile-menu-cta">
              <button 
                className="mobile-contact-btn"
                onClick={handleMobileNavClick}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        {/* Background Image with Overlay */}
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span>Software Development Consulting</span>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Future-Driven</span>
              <span className="title-line">Innovations.</span>
            </h1>
            
            <p className="hero-subtitle">
              Fostering Growth For Startups, Enterprises, And Innovators.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary">
                Get Started
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          
        </div>
      </section>

      <CompanyLogos/>
      <ServicesComponent/>
      <BusinessServices/>
      <EngagementModels/>
      <ExpertiseSections/>
      <TechHiringComponent/>
      <Footer/>
    
    </div>
  );
};

export default Homepage;