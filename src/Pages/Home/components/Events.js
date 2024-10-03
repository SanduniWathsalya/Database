import React, { useState, useEffect } from 'react';
import './Events.css';

function Events() {
  const images = [
    "event1.jpg",
    "event2.jpg",
    "event3.jpg",
    "event4.jpg",
    "event5.jpg"

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="events-section">
      <h2>Events</h2>
      <div className="event-item">
        <img src={images[currentIndex]} alt={`Event ${currentIndex + 1}`} />
      </div>
    </div>
  );
}

export default Events;
