import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero" style={{backgroundImage: 'url("/images/hero-bg.jpg")'}}>
      <div className="hero-content">
        <h1>Elia Locardi</h1>
        <p>Internationally acclaimed travel photographer capturing the world's most beautiful locations</p>
        <p className="hero-subtitle">70+ countries | 2 million miles | 50+ terabytes of photographs</p>
        <Link to="/portfolio" className="btn">Explore Portfolio</Link>
      </div>
    </section>
  );
};

export default Hero;