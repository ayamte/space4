import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function SaturnModel(props) {
  const { nodes, materials } = useGLTF('/saturn_files/saturn.gltf');
  const saturnRef = useRef();

  // Rotation de la Terre
  useFrame(() => {
    if (saturnRef.current) {
      saturnRef.current.rotation.y += 0.002; // vitesse de rotation
    }
  });

  return (
    <group ref={saturnRef} {...props} dispose={null}>
      <mesh 
        geometry={nodes.Object_4.geometry} 
        material={materials['Scene_-_Root']} 
        scale={2.5} 
      />
    </group>
  );
}

useGLTF.preload('/saturn_files/saturn.gltf');
