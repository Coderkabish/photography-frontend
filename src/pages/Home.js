import React from "react";
import FeaturedWork from "../components/home/FeaturedWork";
import Hero from "../components/home/Hero";
import Tutorials from "../components/home/Tutorials";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedWork />
      <Tutorials />
    </div>
  );
};

export default Home;
