import React from 'react';
import Header from './components/Header';
import Hero from './components/HomePage';
import About from './components/About';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <Hero />
      <About />
      <Events />
     
    </div>
  );
}

export default App;
