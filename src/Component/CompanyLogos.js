import React, { useEffect, useRef } from 'react';
import './CompanyLogos.css';
// Import Column logo from assets
import columnLogo from '../Assests/Untitled_design__11_-removebg-preview.png'; // Adjust path as needed

const CompanyLogos = () => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const infoRef = useRef(null);

  // Company data with working online logo URLs
  const companies = [
    { 
      name: "MERIDIO", 
      logo: "https://images.squarespace-cdn.com/content/v1/530f9d95e4b00ea78290e192/1549580433323-ULMKJGC8JZL1EQ97D63N/Meridio+Logo.png",
      fallback: "M"
    },
    { 
      name: "Column", 
      logo: columnLogo, // Using imported local asset
      fallback: "≡"
    },
    { 
      name: "GlobalReader", 
      logo: "https://images.squarespace-cdn.com/content/v1/64d49504ec21a0065a7ae0f2/6c022fcc-3819-490e-886f-209de656c2ee/Logo+GR+3.png?format=1500w",
      fallback: "G"
    },
    { 
      name: "Shield Reply", 
      logo: "https://ci6.googleusercontent.com/proxy/BIo7rZYYS3fW6AYpjrXqjVtEr1QfrnUhB2A9XmCQHZCPwMOLCrCqyoH5qZD7hztebWbO-_mt6CAuSJUoWje2AAvYTQmO5g0Q9COT7XT_y3p-uGFQz9IsKAb3f8EUh-4jUpuevqytbmaP=s0-d-e1-ft",
      fallback: "S"
    },
    { 
      name: "Stakester", 
      logo: "https://golden-storage-production.golden-support.com/topic_images/5e08ba44d54845cdb2574a8f70e676fa.png",
      fallback: "$"
    },
    { 
      name: "ANALOG", 
      logo: "https://cdn.salla.sa/NXxVY/dJy9bfy4LOwGUJZb1fXJvXrNXUOywOUPhU2qq4CF.png",
      fallback: "○"
    },
    { 
      name: "freshprep", 
      logo: "https://d1jie5o4kjowzg.cloudfront.net/deli-company-logos/fresh-prep-logo.png?zFDh9YVGZIE4UkpUH6nxPcSKdtU56w9E",
      fallback: "F"
    },
    { 
      name: "NYMCARD", 
      logo: "https://cdn.prod.website-files.com/605f2547102fdbbeff1b21e0/67bc794fc0293f51994a8ba9_Nymcard.png",
      fallback: "N"
    },
    { 
      name: "artefy", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMitLufeWGOTbtJGoQhA1bdYzoKswCaT5yQ&sg",
      fallback: "A"
    },
    { 
      name: "Stitch", 
      logo: "https://www.pikpng.com/pngl/b/48-486584_stitch-logo-logo-de-stitch-png-clipart.png",
      fallback: "⟋"
    }
  ];

  const stats = {
    products: "400+",
    customers: "300+",
    countries: "120+"
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements (only stats and info, not logos)
    if (statsRef.current) observer.observe(statsRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="company-logos-container" ref={containerRef}>
      {/* Stats Header */}
      <div className="stats-header" ref={statsRef}>
        <h2 className="stats-title">
          <span className="stats-number">{stats.products}</span> Products Developed For{' '}
          <span className="stats-number">{stats.customers}</span> Customers Across{' '}
          <span className="stats-number">{stats.countries}</span> Countries.
        </h2>
      </div>

      {/* Company Logos Grid */}
      <div className="logos-grid">
        {companies.map((company, index) => (
          <div key={index} className="logo-item">
            {/* Logo Image */}
            <div className="logo-container">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className={`logo-image ${company.name === 'Column' ? 'column-logo' : ''}`}
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback text logo */}
              <div className="logo-fallback">
                {company.fallback}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;