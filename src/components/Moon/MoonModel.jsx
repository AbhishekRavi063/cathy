import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import moonModel from '../../Assets/photorealistic_moon.glb'; 

const MoonModel = () => {
  const modelRef = useRef();
  const { scene } = useGLTF(moonModel);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[0.25, 0.25, 0.25]} position={[0, 0, 0]} />;
};

export default MoonModel;
