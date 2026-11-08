"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroVisualizer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || 300;
    const height = containerRef.current.clientHeight || 300;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Group for containing everything (to easily rotate and tilt)
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Central Core Microchip structure (octahedron & wireframe)
    const coreGeometry = new THREE.OctahedronGeometry(1.2, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xDC143C,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    masterGroup.add(coreMesh);

    // Inner solid core
    const innerGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    masterGroup.add(innerMesh);

    // 2. Concentric Particle Rings
    const createRing = (radius: number, count: number, color: number, tiltX: number, tiltY: number) => {
      const ringGroup = new THREE.Group();
      ringGroup.rotation.x = tiltX;
      ringGroup.rotation.y = tiltY;
      
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        // Introduce small random variations to create a fuzzy particle wave cloud
        const variance = (Math.random() - 0.5) * 0.15;
        const r = radius + variance;
        
        positions[i * 3] = Math.cos(angle) * r;
        positions[i * 3 + 1] = Math.sin(angle) * r;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Draw custom round glowing particle map
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(0.3, 'rgba(220,20,60,0.8)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 16, 16);
      }
      const texture = new THREE.CanvasTexture(canvas);

      const material = new THREE.PointsMaterial({
        color: color,
        size: 0.18,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        map: texture
      });

      const points = new THREE.Points(geometry, material);
      ringGroup.add(points);
      masterGroup.add(ringGroup);

      return ringGroup;
    };

    // Construct 3 distinct concentric particle rings
    const ring1 = createRing(2.0, 120, 0xDC143C, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(2.8, 180, 0x555555, -Math.PI / 4, Math.PI / 4);
    const ring3 = createRing(3.5, 240, 0xDC143C, Math.PI / 2.5, -Math.PI / 5);

    // Handle mouse move interactive tilting
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse positions
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;

      // Map to target tilting angles
      targetRotation.x = y * 0.75;
      targetRotation.y = x * 0.75;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow rotation of central core meshes
      coreMesh.rotation.x = elapsedTime * 0.25;
      coreMesh.rotation.y = elapsedTime * 0.35;
      
      innerMesh.rotation.x = -elapsedTime * 0.45;
      innerMesh.rotation.y = elapsedTime * 0.15;

      // Orbit rotations on concentric rings
      ring1.rotation.z = elapsedTime * 0.12;
      ring2.rotation.z = -elapsedTime * 0.08;
      ring3.rotation.z = elapsedTime * 0.05;

      // Smooth lerp interactive camera tilt offsets
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

      masterGroup.rotation.x = currentRotation.x;
      masterGroup.rotation.y = currentRotation.y;

      renderer.render(scene, camera);
    };

    animate();

    // Responsive window resizer
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

    // Cleanup routines on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose geometries & materials
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();

      ring1.traverse((object) => {
        if (object instanceof THREE.Points) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      ring2.traverse((object) => {
        if (object instanceof THREE.Points) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      ring3.traverse((object) => {
        if (object instanceof THREE.Points) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[300px] flex items-center justify-center relative cursor-crosshair"
    />
  );
}
