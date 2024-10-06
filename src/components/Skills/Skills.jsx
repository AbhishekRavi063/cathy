import React, { useState } from 'react';
import './Skills.css'; // Create a CSS file for styles
import python from '../../Assets/python-gif.gif';
import html from '../../Assets/html.png';
import javascript from '../../Assets/js-gif.gif';
import react from '../../Assets/react.png';
import node from '../../Assets/node.png';
import figma from '../../Assets/figma-gif.gif';
import firebase from '../../Assets/firebase.png';
import flask from '../../Assets/flask.png';
import mongo from '../../Assets/mongodb.png';
import aws from '../../Assets/aws.png';
import terraform from '../../Assets/terraform.png'; // Import Terraform image
import three from '../../Assets/three-js.png'; // Import Three.js image
import anaconda from '../../Assets/anaconda.png'; // Import Tailwind CSS image
import wordpress from '../../Assets/wordpress-gif.gif'; // Import WordPress image
import express from '../../Assets/express.png'; // Import Express image
import css from '../../Assets/css.png'; // Import CSS image
import insomnia from '../../Assets/insomnia.svg'; // Import Insomnia image
import restapi from '../../Assets/rest api.png'; // Import REST API image
import postman from '../../Assets/postman.png'; // Import Postman image
import colab from '../../Assets/colab.png'; // Import Colab image


const originalLogosData = [
  { name: 'HTML', img: html },
  { name: 'Python', img: python },
  { name: 'JavaScript', img: javascript },
  { name: 'React', img: react },
  { name: 'Node.js', img: node },
  { name: 'Figma', img: figma },
  { name: 'Firebase', img: firebase },
  { name: 'Flask', img: flask },
  { name: 'Mongo', img: mongo },
  { name: 'AWS', img: aws },
  { name: 'Terraform', img: terraform }, // Add Terraform to the data
  { name: 'Three.js', img: three }, // Add Three.js to the data
  { name: 'Anaconda', img: anaconda }, // Add Tailwind CSS to the data
  { name: 'WordPress', img: wordpress }, // Add WordPress to the data
  { name: 'Express', img: express }, // Add Express to the data
  { name: 'CSS', img: css }, // Add CSS to the data
  { name: 'Insomnia', img: insomnia }, // Add Insomnia to the data
  { name: 'REST API', img: restapi }, // Add REST API to the data
  { name: 'Postman', img: postman }, // Add Postman to the data
  { name: 'Colab', img: colab }, // Add Colab to the data
];

const LogoMatchingGame = () => {
  const [logos, setLogos] = useState(originalLogosData);
  const [points, setPoints] = useState(0); // State to track points
  const [submitted, setSubmitted] = useState(false); // State to track submission
  const [gameStarted, setGameStarted] = useState(false); // State to track if the game has started

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault(); // Prevent default behavior
    const draggedIndex = e.dataTransfer.getData('text/plain');

    // Create a new array for logos
    const newLogos = [...logos];
    const draggedLogo = newLogos[draggedIndex];

    // Swap logos only, not the names
    newLogos[draggedIndex] = newLogos[index];
    newLogos[index] = draggedLogo;

    setLogos(newLogos);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop
  };

  const handleSubmit = () => {
    let score = 0;
    logos.forEach((logo, index) => {
      // Check if the logo name matches the expected name
      if (logo.name === originalLogosData[index].name) {
        score += 1; // Increment score if matched
      }
    });
    setPoints(score);
    setSubmitted(true); // Mark as submitted
  };

  const shuffleLogos = () => {
    const shuffledLogos = [...originalLogosData].sort(() => Math.random() - 0.5);
    setLogos(shuffledLogos);
    setGameStarted(true); // Mark the game as started
  };

  const resetGame = () => {
    shuffleLogos(); // Shuffle logos again on reset
    setPoints(0); // Reset points
    setSubmitted(false); // Reset submission state
    setGameStarted(false); // Reset game state
  };

  return (
    <div className="logo-game-container">

     
      <h1 className="know">Skills </h1>
      
      <div className="logo-grid">
        {/* Row 1 */}
        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 0)}>
          <img src={logos[0].img} alt={logos[0].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 0)} />
          <h3 className="logo-name">HTML</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 1)}>
          <img src={logos[1].img} alt={logos[1].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 1)} />
          <h3 className="logo-name">Python</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 2)}>
          <img src={logos[2].img} alt={logos[2].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 2)} />
          <h3 className="logo-name">JavaScript</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 3)}>
          <img src={logos[3].img} alt={logos[3].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 3)} />
          <h3 className="logo-name">React</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 4)}>
          <img src={logos[4].img} alt={logos[4].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 4)} />
          <h3 className="logo-name">Node.js</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 5)}>
          <img src={logos[5].img} alt={logos[5].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 5)} />
          <h3 className="logo-name">Figma</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 6)}>
          <img src={logos[6].img} alt={logos[6].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 6)} />
          <h3 className="logo-name">Firebase</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 7)}>
          <img src={logos[7].img} alt={logos[7].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 7)} />
          <h3 className="logo-name">Flask</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 8)}>
          <img src={logos[8].img} alt={logos[8].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 8)} />
          <h3 className="logo-name">Mongo</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 9)}>
          <img src={logos[9].img} alt={logos[9].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 9)} />
          <h3 className="logo-name">AWS</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 10)}>
          <img src={logos[10].img} alt={logos[10].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 10)} />
          <h3 className="logo-name">Terraform</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 11)}>
          <img src={logos[11].img} alt={logos[11].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 11)} />
          <h3 className="logo-name">Three.js</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 12)}>
          <img src={logos[12].img} alt={logos[12].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 12)} />
          <h3 className="logo-name">Anaconda</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 13)}>
          <img src={logos[13].img} alt={logos[13].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 13)} />
          <h3 className="logo-name">WordPress</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 14)}>
          <img src={logos[14].img} alt={logos[14].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 14)} />
          <h3 className="logo-name">Express</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 15)}>
          <img src={logos[15].img} alt={logos[15].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 15)} />
          <h3 className="logo-name">CSS</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 16)}>
          <img src={logos[16].img} alt={logos[16].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 16)} />
          <h3 className="logo-name">Insomnia</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 17)}>
          <img src={logos[17].img} alt={logos[17].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 17)} />
          <h3 className="logo-name">REST API</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 18)}>
          <img src={logos[18].img} alt={logos[18].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 18)} />
          <h3 className="logo-name">Postman</h3>
        </div>

        <div className="logo-item" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 19)}>
          <img src={logos[19].img} alt={logos[19].name} className="logo" draggable onDragStart={(e) => handleDragStart(e, 19)} />
          <h3 className="logo-name">Colab</h3>
        </div>
      </div>
      
      <h1 className='match'>Drag the Logos to Their Names!</h1>
     

      {!submitted ? (
        !gameStarted ? (
          <button onClick={shuffleLogos}>Start Game</button>
        ) : (
          <button onClick={handleSubmit}>Submit Answers</button>
        )
      ) : (
        <button onClick={resetGame}>Start the Game Again</button>
      )}
      
      {/* Display points if submitted */}
      {submitted && <h2 className='points'>Your Score: {points} / {logos.length}</h2>}
    </div>
  );
};

export default LogoMatchingGame;
