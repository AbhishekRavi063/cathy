import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import moonModel from '../../Assets/moon2.glb'; 
import './Moon.css';

const MoonModel = () => {
  const modelRef = useRef();
  const { scene } = useGLTF(moonModel); // Load GLTF model

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001; // Rotate model
    }
  });

  return scene ? <primitive ref={modelRef} object={scene} scale={[0.25, 0.25, 0.25]} position={[0, 0, 0]} /> : null;
};

const CameraControls = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, 5); // Set initial camera position
  }, [camera]);
  return null;
};

function Moon() {
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = document.querySelector('.canvas-container canvas');
      if (canvas) {
        canvas.style.width = '100%';
        canvas.style.height = '100%';
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial call

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="moonm">
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.15} />
          <directionalLight
            position={[35, -0.1, 2]}
            intensity={4}
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
          <MoonModel /> {/* Moon model will load here */}
          <CameraControls />
          <OrbitControls enableZoom={false} />
        </Canvas>
        <div className="overlay-text top">Hello, this is the</div>
        <div className="overlay-text bottom">moon!</div>
        <div className="arrow-icon">spin &#10148;</div>
      </div>
    </div>
  );
}

export default Moon;
