import React from 'react';
import '../styles/AboutChillGuy.css'; // Import the updated CSS for artistic styling

const AboutChillGuy = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about-heading">Discover Chill Guy</h2>
        
        {/* Chill Guy's bio */}
        <div className="bio">
          <p>
            Chill Guy is all about embracing life's simple pleasures. With his laid-back attitude, he effortlessly embodies calmness and positivity. Whether it's lounging with a book or enjoying a relaxing walk, Chill Guy finds peace in the chaos. Get to know his vibe, and you'll see that tranquility is a lifestyle.
          </p>
        </div>

        {/* Chill Guy's avatar */}
        {/* <div className="avatar"></div> */}

        {/* Fun Stats about Chill Guy */}
        <div className="stats">
          <div className="stat-card">
            <h3>Chill Factor</h3>
            <p>Ultimate Calm</p>
          </div>
          <div className="stat-card">
            <h3>Favorite Drink</h3>
            <p>Chilled Lemonade</p>
          </div>
          <div className="stat-card">
            <h3>Relaxation Level</h3>
            <p>Infinity</p>
          </div>
          <div className="stat-card">
            <h3>Hobbies</h3>
            <p>Sunset Watching</p>
          </div>
        </div>

        {/* Call to Action */}
        <button className="cta">Join the Chill Vibe</button>
      </div>
    </section>
  );
};

export default AboutChillGuy;
