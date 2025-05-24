import React from 'react';
import { Link } from 'react-router-dom';

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      image: '/images/tutorial-landscape.jpg',
      title: 'Photographing The World: Landscape Photography',
      description: 'Learn advanced techniques for capturing stunning landscapes from Iceland to New Zealand'
    },
    {
      id: 2,
      image: '/images/tutorial-cityscape.jpg',
      title: 'Photographing The World: Cityscape Photography',
      description: 'Master the art of urban photography from Rome to Hong Kong'
    },
    {
      id: 3,
      image: '/images/tutorial-postprocessing.jpg',
      title: 'Advanced Post-Processing Techniques',
      description: 'Create compelling visual imagery with professional editing workflows'
    }
  ];

  return (
    <section className="tutorials">
      <div className="container">
        <h2>Photography Tutorials</h2>
        <p className="section-description">Premium educational resources for photographers of all levels</p>
        <div className="tutorials-grid">
          {tutorials.map(tutorial => (
            <div key={tutorial.id} className="tutorial-item">
              <div className="tutorial-image">
                <img src={tutorial.image} alt={tutorial.title} />
              </div>
              <div className="tutorial-content">
                <h3>{tutorial.title}</h3>
                <p>{tutorial.description}</p>
                <Link to="/tutorials" className="tutorial-link">Learn More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorials;