import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import backgroundVideo from '../../Assets/earth3.mp4'; 

import dinosaur from '../../Assets/lustt.glb';
import './Intro.css'; // Import CSS file

const DinosaurModel = () => {
  const modelRef = useRef();
  const { scene, animations } = useGLTF(dinosaur); // Load model and animations
  const { actions } = useAnimations(animations, modelRef); // Initialize animations with useAnimations
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

  // Function to handle playing specific animations
  const playAnimation = (animationName) => {
    if (actions[animationName]) {
      actions[animationName].reset().play();
    }
  };

  // Automatically play the first animation on mount
  useEffect(() => {
    playAnimation(animations[currentAnimationIndex].name);
  }, []); // Empty dependency array ensures this effect runs once on mount

  // Function to change animation on click
  const handleClick = () => {
    const nextAnimationIndex = (currentAnimationIndex + 1) % animations.length;
    setCurrentAnimationIndex(nextAnimationIndex);
    playAnimation(animations[nextAnimationIndex].name);
  };

  return (
    <group onClick={handleClick} position={[1.5, -0.6, 0]}>
      <primitive ref={modelRef} object={scene} scale={[0.50, 0.50, 0.50]} />
    </group>
  );
};

const CameraControls = () => {
  const { camera } = useThree();
  camera.position.set(1, 1, 5); // Set the initial camera position
  return null;
};

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textRef.current.classList.add('fade-in-up');
        } else {
          textRef.current.classList.remove('fade-in-up');
        }
      },
      observerOptions
    );

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="introm">
      {/* Glass-like background */}

      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={35} />
          <directionalLight
            position={[10, 10, 10]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            color="white"
          />
          
          <CameraControls />
        </Canvas>
      </div>

      <div className="text-container">
        <h1 className="hhh">AKA</h1>
        <h2 className="hh2" ref={textRef}>The WEBMASTER</h2>
      </div>
       
    </div>
  );
}

export default Intro;
