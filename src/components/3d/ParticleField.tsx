"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dimensions
    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 85;
    camera.position.y = 40;
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particles Parameters
    const count = 1800;
    const positions = new Float32Array(count * 3);
    const originalY = new Float32Array(count);
    const randomSpeed = new Float32Array(count);

    // Populate positions
    for (let i = 0; i < count; i++) {
      // Create a grid/spread of particles
      const x = (Math.random() - 0.5) * 260;
      const z = (Math.random() - 0.5) * 260;
      const y = (Math.sin(x * 0.04) + Math.cos(z * 0.04)) * 6 + (Math.random() - 0.5) * 4;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalY[i] = y;
      randomSpeed[i] = 0.4 + Math.random() * 1.2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle material with soft glowing points
    // Let's create a circular glowing texture dynamically
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(167, 139, 250, 0.8)'); // Violet light accent
      gradient.addColorStop(0.6, 'rgba(99, 102, 241, 0.3)');  // Indigo mid-tone
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 1.8,
      sizeAttenuation: true,
      map: texture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse movement response
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX - window.innerWidth / 2) * 0.04;
      targetMouseY = (event.clientY - window.innerHeight / 2) * 0.04;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation variables
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();
      const positionsAttr = geometry.attributes.position as THREE.BufferAttribute;

      // Update particle positions in a wave
      for (let i = 0; i < count; i++) {
        const x = positionsAttr.getX(i);
        const z = positionsAttr.getZ(i);

        // Fluid wave formula (sine/cosine combination)
        const newY = originalY[i] + 
          Math.sin(time * randomSpeed[i] + x * 0.04) * 4.5 + 
          Math.cos(time * 0.6 * randomSpeed[i] + z * 0.04) * 4.5;

        positionsAttr.setY(i, newY);
      }
      positionsAttr.needsUpdate = true;

      // Soft camera/scene mouse lagging logic
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      particles.rotation.y = time * 0.012 + mouseX * 0.003;
      particles.rotation.x = mouseY * 0.003;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10 w-full h-full bg-zinc-950 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #09090b 0%, #030014 60%, #02000a 100%)',
      }}
    />
  );
}
