import React from 'react';
import './App.css';


import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Journey from './components/Journey';
import Team from './components/Team';
import ChooseUs from './components/ChooseUs';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
     
   
      <Hero />
      <About />
      <Vision />
      <Journey />
      <Team />
      <ChooseUs />
      <Box/>
     
    
    </div>
  );
}

export default App;
