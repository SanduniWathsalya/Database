import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-section">
      <div className="about-image">
        <img src="About.jpg" alt="Students" />
      </div>
      <div className="about-content">
        <h2>About ABC</h2>
        
        <p><strong>Our school's mission is</strong></p>
        <div className="about-para">
        
          To learn leadership, the common core, and relationships for life.
          Our mission is to provide a safe, disciplined learning environment
          that empowers all students to develop their full potential.
          To learn leadership, the common core, and relationships for life.
          Our mission is to provide a safe, disciplined learning environment
          that empowers all students to develop their full potential.
        <br/>
        <button>See more</button>
        </div>
    </div>
    </div>

  );
}

export default About;
