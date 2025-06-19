import React from "react";
import { Link } from "react-router-dom";

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      image: "/images/tutorial-landscape.jpg",
      title: "Photographing The World: Landscape Photography",
      description:
        "Learn advanced techniques for capturing stunning landscapes from Iceland to New Zealand",
    },
    {
      id: 2,
      image: "/images/tutorial-cityscape.jpg",
      title: "Photographing The World: Cityscape Photography",
      description: "Master the art of urban photography from Rome to Hong Kong",
    },
    {
      id: 3,
      image: "/images/tutorial-postprocessing.jpg",
      title: "Advanced Post-Processing Techniques",
      description:
        "Create compelling visual imagery with professional editing workflows",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Photography Tutorials
          </h2>
          <p className="text-xl text-gray-300">
            Premium educational resources for photographers of all levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="bg-primary rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {tutorial.title}
                </h3>
                <p className="text-gray-300 mb-4">{tutorial.description}</p>
                <Link
                  to="/tutorials"
                  className="inline-flex items-center text-white hover:text-accent transition-colors duration-300"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
