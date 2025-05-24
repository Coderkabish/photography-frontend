import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedWork from '../components/home/FeaturedWork';
import Tutorials from '../components/home/Tutorials';
import '../styles/home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Tutorials />
    </>
  );
};

export default Home;