"use client";

import {  useEffect, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Suspense } from "react";
import * as THREE from "three";

function MeshComponent() {
  const fileUrl = "milk.glb";
  const gltf = useLoader(GLTFLoader, fileUrl);
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = mouse.current.x * Math.PI / 16; // Adjust the multiplier as needed
      meshRef.current.rotation.x = mouse.current.y * Math.PI / 8; // Adjust the multiplier as needed
    }
  });

  return gltf ? (
    <mesh ref={meshRef} position={[0, -20, -10]} rotation={[0,0, 0]}>
      <primitive object={gltf.scene} />
    </mesh>
  ) : null;
}

export const ModelViewer: React.FC = () => {
  return (
    <div className="md:flex justify-center items-center lg:h-screen lg:w-screen md:w-[80vw] md:h-[80vh] hidden absolute z-20 md:top-0 lg:-top-20">
      <Canvas camera={{ position: [20, 46, 100], fov: 14 }}> 
        {/* Change this camera position for different position  */}
        <Suspense>
          <ambientLight intensity={1.2} />
          <directionalLight position={[0, 1, 0]} intensity={5} />
          <MeshComponent />
        </Suspense>
      </Canvas>
    </div>
  );
};
