import React from 'react';
import AboutContent from '../components/about/AboutContent';
import Sponsors from '../components/about/Sponsors';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about-section">
      <AboutContent />
      <Sponsors />
    </section>
  );
};

export default About;