import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/hero-bg.jpg")',
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Elia Locardi
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-4 max-w-3xl mx-auto">
          Internationally acclaimed travel photographer capturing the world's
          most beautiful locations
        </p>
        <p className="text-lg text-gray-300 mb-8">
          70+ countries | 2 million miles | 50+ terabytes of photographs
        </p>
        <Link
          to="/portfolio"
          className="inline-block bg-white text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-accent transition-colors duration-300"
        >
          Explore Portfolio
        </Link>
      </div>
    </section>
  );
};

export default Hero;
