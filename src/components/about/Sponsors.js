import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { id: 1, image: 'images/sponsor1.png', name: 'Sponsor 1' },
    { id: 2, image: 'images/sponsor2.png', name: 'Sponsor 2' },
    { id: 3, image: 'images/sponsor3.png', name: 'Sponsor 3' },
    { id: 4, image: 'images/sponsor4.png', name: 'Sponsor 4' },
    { id: 5, image: 'images/sponsor5.png', name: 'Sponsor 5' }
  ];

  return (
    <div className="sponsors">
      <h3>Official Partners and Sponsors</h3>
      <div className="sponsor-logos">
        {sponsors.map(sponsor => (
          <img 
            key={sponsor.id}
            src={sponsor.image} 
            alt={sponsor.name} 
            className="sponsor-logo" 
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;