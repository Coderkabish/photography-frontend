import React from "react";
import GalleryItem from "../components/home/GalleryItem";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop&q=60",
      title: "Sunset Dreams",
      location: "Oia, Santorini",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60",
      title: "Misty Melody",
      location: "Val d'Orcia, Tuscany, Italy",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=60",
      title: "Winds of Inspiration",
      location: "Mt. Fuji, Japan",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60",
      title: "Song Of The Sea",
      location: "Vernazza, Cinque Terre, Italy",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop&q=60",
      title: "Test Of Time",
      location: "Petra, Jordan",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=60",
      title: "Frozen in Time",
      location: "Southern Iceland",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60",
      title: "The Forest's Awakening",
      location: "Kyoto Arashiyama, Japan",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop&q=60",
      title: "Village of Dreams",
      location: "Hallstatt, Austria",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=60",
      title: "Memories Of The Sea",
      location: "Manarola, Cinque Terre, Italy",
    },
  ];

  return (
    <section className="section bg-primary pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-4">Portfolio</h1>
          <p className="text-xl text-text-secondary">
            A collection of moments captured around the world
          </p>
        </div>

        <div className="gallery-grid">
          {portfolioItems.map((item) => (
            <GalleryItem
              key={item.id}
              image={item.image}
              title={item.title}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
