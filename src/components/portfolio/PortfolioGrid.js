import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioGrid = () => {
  const portfolioItems = [
    {
      id: 1,
      image: 'images/placeholder1.jpg',
      title: 'Sleeping Giants || Location',
      description: 'Description of the image and the story behind it'
    },
    {
      id: 2,
      image: 'images/placeholder2.jpg',
      title: 'Dragon\'s Breath || Location',
      description: 'Description of the image and the story behind it'
    },
    {
      id: 3,
      image: 'images/placeholder3.jpg',
      title: 'Breath of Life || Location',
      description: 'Description of the image and the story behind it'
    },
    {
      id: 4,
      image: 'images/placeholder4.jpg',
      title: 'Winds of Inspiration || Location',
      description: 'Description of the image and the story behind it'
    },
    {
      id: 5,
      image: 'images/placeholder5.jpg',
      title: 'Sunset Dreams || Location',
      description: 'Description of the image and the story behind it'
    },
    {
      id: 6,
      image: 'images/placeholder6.jpg',
      title: 'Misty Melody || Location',
      description: 'Description of the image and the story behind it'
    }
  ];

  return (
    <div className="portfolio-grid">
      {portfolioItems.map(item => (
        <PortfolioItem 
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;