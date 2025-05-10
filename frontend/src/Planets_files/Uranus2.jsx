import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function UranusModel(props) {
  const { nodes, materials } = useGLTF('/uranus_files/uranus.gltf');
  const uranusRef = useRef();

  // Rotation de la Terre
  useFrame(() => {
    if (uranusRef.current) {
      uranusRef.current.rotation.y += 0.002; // vitesse de rotation
    }
  });

  return (
    <group ref={uranusRef} {...props} dispose={null}>
      <mesh 
        geometry={nodes.Object_4.geometry} 
        material={materials['Scene_-_Root']} 
        scale={2.5} 
      />
    </group>
  );
}

useGLTF.preload('/uranus_files/uranus.gltf');
