import React from 'react';
import './LoadingScreen.css';
import loadingVideo3 from '../../Assets/loading.mp4'; // Path to your first loading video
import loadingVideo2 from '../../Assets/spaceship.mp4'; // Path to your second loading video
import loadingVideo1 from '../../Assets/sapceship2.mp4'

const LoadingScreen = ({ onLoadComplete }) => {
  // Randomly select one of the two loading videos
  const loadingVideos = [loadingVideo1, loadingVideo2, loadingVideo3];
  const selectedVideo = loadingVideos[Math.floor(Math.random() * loadingVideos.length)];

  return (
    <div className="loading-screen">
      <video 
        autoPlay 
        muted 
        className="loading-video" 
        onEnded={onLoadComplete} // Call onLoadComplete when video ends
      >
        <source src={selectedVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="loading-text">Loading the moon...</p>
    </div>
  );
};

export default LoadingScreen;
