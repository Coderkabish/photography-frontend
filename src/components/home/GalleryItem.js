import React from "react";
import { Link } from "react-router-dom";

const GalleryItem = ({ image, title, location }) => {
  return (
    <div className="gallery-item group">
      <Link to="/portfolio" className="block h-full">
        <img src={image} alt={title} className="gallery-image" loading="lazy" />
        <div className="gallery-overlay">
          <div className="gallery-content">
            <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
            <p className="text-lg text-center text-text-secondary">
              {location}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GalleryItem;
