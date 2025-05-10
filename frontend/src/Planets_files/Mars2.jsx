import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function MarsModel(props) {
  const { nodes, materials } = useGLTF('/mars_files/mars.gltf');
  const marsRef = useRef();

  // Rotation de la Terre
  useFrame(() => {
    if (marsRef.current) {
      marsRef.current.rotation.y += 0.002; // vitesse de rotation
    }
  });

  return (
    <group ref={marsRef} {...props} dispose={null}>
      <mesh 
        geometry={nodes.Object_4.geometry} 
        material={materials['Scene_-_Root']} 
        scale={2.5} 
      />
    </group>
  );
}

useGLTF.preload('/mars_files/mars.gltf');
