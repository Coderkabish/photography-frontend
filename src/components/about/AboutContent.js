import React from 'react';

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="about-image">
        <img src="images/about-photo.jpg" alt="Your Name" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>I am a professional travel photographer, videographer, writer, public speaker, and educator who spends my life shooting some of the most beautiful locations in the world.</p>
        <p>Since I began traveling full-time in [year], I have visited more than [number] countries, flown over [number] miles, and collaborated with major companies, brands, countries, and tourism agencies all over the world.</p>
        <p>Using a combination of traditional in-camera techniques, targeted times of day, and advanced post-processing methods, I have developed a unique style of photography that has become recognized around the world.</p>
        <p>With each photograph, my goal is to share my vision so others can see the world as I do, full of color, texture, beauty, depth, and emotion.</p>
      </div>
    </div>
  );
};

export default AboutContent;