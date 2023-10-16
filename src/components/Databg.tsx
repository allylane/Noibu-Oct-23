import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function DataFlowBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    // Particle data
    const particles = 500;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const velocities = [];

    for (let i = 0; i < particles; i++) {
      positions.push((Math.random() - 0.5) * 10);  // x
      positions.push((Math.random() - 0.5) * 10);  // y
      positions.push((Math.random() - 0.5) * 10);  // z
      velocities.push(0.01 + Math.random() * 0.05);  // speed
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.1 });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particlesMesh.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i / 3];
        if (positions[i] > 5.5) positions[i] = -5.5;  // Resetting position
      }
      particlesMesh.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    return () => {
      window.removeEventListener('resize', this);
      ref.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={ref} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}></div>
  );
}

export default DataFlowBackground;
