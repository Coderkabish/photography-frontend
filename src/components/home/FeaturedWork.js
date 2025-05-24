import React from 'react';
import { Link } from 'react-router-dom';
import GalleryItem from './GalleryItem';

const FeaturedWork = () => {
  const featuredItems = [
    {
      id: 1,
      image: '/images/santorini.jpg',
      title: 'Sunset Dreams',
      location: 'Oia, Santorini'
    },
    {
      id: 2,
      image: '/images/tuscany.jpg',
      title: 'Misty Melody',
      location: 'Val d\'Orcia, Tuscany, Italy'
    },
    {
      id: 3,
      image: '/images/japan.jpg',
      title: 'Winds of Inspiration',
      location: 'Mt. Fuji, Japan'
    },
    {
      id: 4,
      image: '/images/cinque-terre.jpg',
      title: 'Song Of The Sea',
      location: 'Vernazza, Cinque Terre, Italy'
    },
    {
      id: 5,
      image: '/images/petra.jpg',
      title: 'Test Of Time',
      location: 'Petra, Jordan'
    },
    {
      id: 6,
      image: '/images/iceland.jpg',
      title: 'Frozen in Time',
      location: 'Southern Iceland'
    },
    {
      id: 7,
      image: '/images/kyoto.jpg',
      title: 'The Forest\'s Awakening',
      location: 'Kyoto Arashiyama, Japan'
    },
    {
      id: 8,
      image: '/images/austria.jpg',
      title: 'Village of Dreams',
      location: 'Hallstatt, Austria'
    },
    {
      id: 9,
      image: '/images/manarola.jpg',
      title: 'Memories Of The Sea',
      location: 'Manarola, Cinque Terre, Italy'
    }
  ];

  return (
    <section className="featured">
      <div className="container">
        <h2>Portfolio</h2>
        <p className="section-description">A collection of moments captured around the world</p>
        <div className="gallery">
          {featuredItems.map(item => (
            <GalleryItem 
              key={item.id}
              image={item.image}
              title={item.title}
              location={item.location}
            />
          ))}
        </div>
        <div className="view-all">
          <Link to="/portfolio" className="btn">View Complete Portfolio</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;