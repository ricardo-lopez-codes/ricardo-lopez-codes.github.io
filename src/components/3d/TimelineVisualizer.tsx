"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface TimelineVisualizerProps {
  activeId: number | null;
}

export default function TimelineVisualizer({ activeId }: TimelineVisualizerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIdRef = useRef<number | null>(activeId);

  // Sync prop to ref for access in animation frame loop without re-triggering useEffect
  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || 80;
    const height = containerRef.current.clientHeight || 600;

    const scene = new THREE.Scene();

    // Camera setup - orthographic fits vertical linear tracks perfectly
    const camera = new THREE.OrthographicCamera(-2, 2, 5, -5, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 1. Vertical Line Axis (Timeline rail)
    const linePoints = [
      new THREE.Vector3(0, 5, 0),
      new THREE.Vector3(0, -5, 0)
    ];
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x1E1E20,
      linewidth: 2 
    });
    const verticalLine = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(verticalLine);

    // 2. Milestone Node Spheres (representing the 4 timeline accomplishments)
    // Heights mapped matching the 4 events layout: +3.2, +1.1, -1.0, -3.1
    const nodeHeights = [3.2, 1.1, -1.0, -3.1];
    
    interface SphereNode {
      mesh: THREE.Mesh;
      glowRing: THREE.Mesh;
      baseScale: number;
      targetScale: number;
      glowScale: number;
      id: number;
    }

    const sphereNodes: SphereNode[] = [];

    nodeHeights.forEach((yPos, idx) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.y = yPos;

      // Inner Core Node sphere
      const sphereGeometry = new THREE.SphereGeometry(0.25, 16, 16);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0xDC143C,
        transparent: true,
        opacity: 0.6
      });
      const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
      nodeGroup.add(sphereMesh);

      // Outer Glowing Ring (expanding pulse wave)
      const ringGeometry = new THREE.RingGeometry(0.3, 0.38, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xDC143C,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.0
      });
      const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
      nodeGroup.add(ringMesh);

      scene.add(nodeGroup);

      sphereNodes.push({
        mesh: sphereMesh,
        glowRing: ringMesh,
        baseScale: 1.0,
        targetScale: 1.0,
        glowScale: 1.0,
        id: idx + 1 // matches event.id in Timeline.tsx
      });
    });

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const currentActiveId = activeIdRef.current;

      sphereNodes.forEach((node) => {
        const isActive = node.id === currentActiveId;

        // Base idle breathing pulse frequency
        const breathingOffset = Math.sin(elapsedTime * 2.5 + node.id * 1.5) * 0.08;
        node.targetScale = isActive ? 1.6 : 1.0 + breathingOffset;

        // Smoothly scale core mesh
        node.mesh.scale.x += (node.targetScale - node.mesh.scale.x) * 0.12;
        node.mesh.scale.y += (node.targetScale - node.mesh.scale.y) * 0.12;
        node.mesh.scale.z += (node.targetScale - node.mesh.scale.z) * 0.12;

        // Adjust core opacity dynamically
        if (node.mesh.material instanceof THREE.MeshBasicMaterial) {
          const targetOpacity = isActive ? 0.95 : 0.45;
          node.mesh.material.opacity += (targetOpacity - node.mesh.material.opacity) * 0.1;
        }

        // Animate outer expanding pulse wave
        if (isActive) {
          node.glowScale += 0.035;
          if (node.glowScale > 2.2) {
            node.glowScale = 1.0;
          }
          node.glowRing.scale.set(node.glowScale, node.glowScale, 1);
          
          if (node.glowRing.material instanceof THREE.MeshBasicMaterial) {
            // Fade out as it expands
            node.glowRing.material.opacity = Math.max(0, 0.7 * (1.0 - (node.glowScale - 1.0) / 1.2));
          }
        } else {
          // Slowly hide glow ring when idle
          node.glowScale = 1.0;
          node.glowRing.scale.set(1, 1, 1);
          if (node.glowRing.material instanceof THREE.MeshBasicMaterial) {
            node.glowRing.material.opacity += (0.0 - node.glowRing.material.opacity) * 0.15;
          }
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize observer
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      
      // Keep aspect ratio
      camera.top = 5;
      camera.bottom = -5;
      camera.left = -2 * (w / 80);
      camera.right = 2 * (w / 80);
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);

    // Unmount Disposing
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      lineGeometry.dispose();
      lineMaterial.dispose();

      sphereNodes.forEach((node) => {
        node.mesh.geometry.dispose();
        if (node.mesh.material instanceof THREE.Material) {
          node.mesh.material.dispose();
        }
        node.glowRing.geometry.dispose();
        if (node.glowRing.material instanceof THREE.Material) {
          node.glowRing.material.dispose();
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[500px] relative pointer-events-none"
    />
  );
}
