import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file for styling
import Moon from './components/Moon/Moon.jsx';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import NftCard from './components/Project/Projects.jsx';
import Intro from './components/intro copy/Intro.jsx';
import Skills from './components/Skills/Skills.jsx';
import About from './components/About/About.jsx';
import Roles from './components/Roles/Roles.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Function to be called when loading is complete
  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="app">
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />} {/* Show loading screen if isLoading is true */}
      <div className={`content ${isLoading ? 'hidden' : ''}`}>
        <Moon />
        <About />
        <Intro />
        <Skills />
        <NftCard />
        <Roles/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
