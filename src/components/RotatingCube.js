import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';

const gradientBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const CubeContainer = styled.div`
  width: 500px;
  height: 500px;
  background: linear-gradient(270deg, black, grey, black);
  background-size: 600% 600%;
  animation: ${gradientBackground} 16s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px; /* Rounded corners */
`;

const RotatingCube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Adjusted aspect ratio
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(500, 500); // Fixed size for the cube container
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1,
      roughness: 0.5,
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.geometry = new THREE.BoxGeometry(2, 2, 2, 5, 5, 5);
    scene.add(cube);

    const light1 = new THREE.PointLight(0xffffff, 100, 100);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xffffff, 100, 100);
    light2.position.set(-5, 5, 5);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xffffff, 100, 100);
    light3.position.set(5, -5, 5);
    scene.add(light3);

    const light4 = new THREE.PointLight(0xffffff, 100, 100);
    light4.position.set(-5, -5, 5);
    scene.add(light4);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <CubeContainer ref={mountRef} />;
};

export default RotatingCube;
