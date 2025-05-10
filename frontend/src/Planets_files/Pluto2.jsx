import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function PlutoModel(props) {
  const { nodes, materials } = useGLTF('/pluto_files/pluto.gltf');
  const plutoRef = useRef();

  // Rotation de la Terre
  useFrame(() => {
    if (plutoRef.current) {
      plutoRef.current.rotation.y += 0.002; // vitesse de rotation
    }
  });

  return (
    <group ref={plutoRef} {...props} dispose={null}>
      <mesh 
        geometry={nodes.Object_4.geometry} 
        material={materials['Scene_-_Root']} 
        scale={2.5} 
      />
    </group>
  );
}

useGLTF.preload('/pluto_files/pluto.gltf');
