import React from 'react';

const PortfolioItem = ({ image, title, description }) => {
  return (
    <div className="portfolio-item">
      <img src={image} alt={title} />
      <div className="portfolio-caption">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;