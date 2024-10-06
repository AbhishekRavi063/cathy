import React from 'react';
import './LoadingScreen.css';
import loadingVideo from '../../Assets/loading.mp4'; // Path to your loading video

const LoadingScreen = ({ onLoadComplete }) => {
  return (
    <div className="loading-screen">
      <video 
        autoPlay 
        muted 
        className="loading-video" 
        onEnded={onLoadComplete} // Call onLoadComplete when video ends
      >
        <source src={loadingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="loading-text">Loading the moon...</p>
    </div>
  );
};

export default LoadingScreen;
