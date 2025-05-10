import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function JupiterModel(props) {
  const { nodes, materials } = useGLTF('/jupiter_files/jupiter.gltf');
  const jupiterRef = useRef();

  // Rotation de la Terre
  useFrame(() => {
    if (jupiterRef.current) {
      jupiterRef.current.rotation.y += 0.002; // vitesse de rotation
    }
  });

  return (
    <group ref={jupiterRef} {...props} dispose={null}>
      <mesh 
        geometry={nodes.Object_4.geometry} 
        material={materials['Scene_-_Root']} 
        scale={2.5} 
      />
    </group>
  );
}

useGLTF.preload('/jupiter_files/jupiter.gltf');
