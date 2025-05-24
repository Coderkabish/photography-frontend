import React from 'react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ image, title, location }) => {
  return (
    <div className="gallery-item">
      <Link to="/portfolio">
        <img src={image} alt={title} />
        <div className="overlay">
          <div className="overlay-content">
            <h3>{title}</h3>
            <p>{location}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GalleryItem;