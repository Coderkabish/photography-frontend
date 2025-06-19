import React from "react";
import { Link } from "react-router-dom";
import GalleryItem from "./GalleryItem";

const FeaturedWork = () => {
  const featuredItems = [
    {
      id: 1,
      image: "/images/santorini.jpg",
      title: "Sunset Dreams",
      location: "Oia, Santorini",
    },
    {
      id: 2,
      image: "/images/tuscany.jpg",
      title: "Misty Melody",
      location: "Val d'Orcia, Tuscany, Italy",
    },
    {
      id: 3,
      image: "/images/japan.jpg",
      title: "Winds of Inspiration",
      location: "Mt. Fuji, Japan",
    },
    {
      id: 4,
      image: "/images/cinque-terre.jpg",
      title: "Song Of The Sea",
      location: "Vernazza, Cinque Terre, Italy",
    },
    {
      id: 5,
      image: "/images/petra.jpg",
      title: "Test Of Time",
      location: "Petra, Jordan",
    },
    {
      id: 6,
      image: "/images/iceland.jpg",
      title: "Frozen in Time",
      location: "Southern Iceland",
    },
    {
      id: 7,
      image: "/images/kyoto.jpg",
      title: "The Forest's Awakening",
      location: "Kyoto Arashiyama, Japan",
    },
    {
      id: 8,
      image: "/images/austria.jpg",
      title: "Village of Dreams",
      location: "Hallstatt, Austria",
    },
    {
      id: 9,
      image: "/images/manarola.jpg",
      title: "Memories Of The Sea",
      location: "Manarola, Cinque Terre, Italy",
    },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#2b537a" }}>
            Photography Tutorials
          </h2>
          <p className="text-xl" style={{ color: "#2b537a" }}>
            Premium educational resources for photographers of all levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <GalleryItem
              key={item.id}
              image={item.image}
              title={item.title}
              location={item.location}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/portfolio"
            className="inline-block bg-white text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-accent transition-colors duration-300"
          >
            View Complete Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
