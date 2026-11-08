"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GateVisualizerProps {
  type?: 'cube' | 'octahedron' | 'torus';
  color?: number;
}

export default function GateVisualizer({ type = 'cube', color = 0xDC143C }: GateVisualizerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || 60;
    const height = containerRef.current.clientHeight || 60;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 3.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Geometries based on type representing hardware components/gates
    let geometry: THREE.BufferGeometry;

    if (type === 'octahedron') {
      // Represents a logic gate cell
      geometry = new THREE.OctahedronGeometry(0.8, 1);
    } else if (type === 'torus') {
      // Represents an inductive filter core / capacitor ring
      geometry = new THREE.TorusGeometry(0.5, 0.15, 8, 24);
    } else {
      // Represents a chip resistor / microcontroller block
      geometry = new THREE.BoxGeometry(0.7, 0.7, 0.7);
    }

    // Material with subtle glowing wireframe
    const material = new THREE.MeshBasicMaterial({
      color: color,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Dynamic floating translation offset helpers
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Gentle floating hover (translation on Y)
      mesh.position.y = Math.sin(elapsedTime * 2.0) * 0.12;

      // Dynamic slow rotation on multiple axes
      if (type === 'torus') {
        mesh.rotation.x = elapsedTime * 0.6;
        mesh.rotation.y = elapsedTime * 0.4;
      } else if (type === 'octahedron') {
        mesh.rotation.x = elapsedTime * 0.4;
        mesh.rotation.z = elapsedTime * 0.5;
      } else {
        mesh.rotation.x = elapsedTime * 0.5;
        mesh.rotation.y = elapsedTime * 0.5;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [type, color]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[50px] relative pointer-events-none"
    />
  );
}
