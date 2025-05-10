import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function MercuryModel(props) {
  const { nodes, materials } = useGLTF('/mercury_files/mercury.gltf');
  const mercuryRef = useRef();

  // Rotation de la Terre
  useFrame(() => {
    if (mercuryRef.current) {
      mercuryRef.current.rotation.y += 0.002; // vitesse de rotation
    }
  });

  return (
    <group ref={mercuryRef} {...props} dispose={null}>
      <mesh 
        geometry={nodes.Object_4.geometry} 
        material={materials['Scene_-_Root']} 
        scale={2.5} 
      />
    </group>
  );
}

useGLTF.preload('/mercury_files/mercury.gltf');
