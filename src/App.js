import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file for styling
import Moon from './components/Moon/Moon.jsx';


import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import NftCard from './components/Project/Projects.jsx';
import Intro from './components/intro copy/Intro.jsx';
import Skills from './components/Skills/Skills.jsx';
import About from './components/About/About.jsx';



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading && <LoadingScreen />} {/* Show loading screen if isLoading is true */}
      <div className={`content ${isLoading ? 'hidden' : ''}`}>
        
        <Moon />
        
        <About/>
        
        <Intro/>
      
      
      
        <Skills/>
        <NftCard/>
       
      </div>
    </div>
  );
}

export default App;
