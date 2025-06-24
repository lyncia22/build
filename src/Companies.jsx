import React from 'react';
import './Companies.css';
import akImage from './assets/ak.jpg'; // make sure this path is correct

const Companies = () => {
  return (
    <section className="companies">
      <div className="companies-content">
        <img src={akImage} alt="AK Construction" className="company-image" />
        
        <div className="company-text">
          <h3>About AK Construction</h3>
          <p>
            AK Construction is a trusted name in the industry, known for high-quality
            workmanship and reliable service. From residential projects to large-scale
            commercial jobs, their team delivers excellence at every stage of construction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Companies;
