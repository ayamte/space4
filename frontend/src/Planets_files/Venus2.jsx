import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function VenusModel(props) {
  const { nodes, materials } = useGLTF('/venus_files/venus.gltf');
  const venusRef = useRef();

  // Rotation de Vénus
  useFrame(() => {
    if (venusRef.current) {
      venusRef.current.rotation.y += 0.001; // Vitesse de rotation plus lente que Mercure
    }
  });

  return (
    <group ref={venusRef} {...props} dispose={null}>
      <mesh 
        geometry={nodes.Object_4.geometry} 
        material={materials['Scene_-_Root']} 
        scale={2.5} 
      />
    </group>
  );
}

useGLTF.preload('/venus_files/venus.gltf');
