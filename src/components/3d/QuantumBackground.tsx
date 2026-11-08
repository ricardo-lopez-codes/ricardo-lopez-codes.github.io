"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function QuantumBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dimensions
    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
    // Initial camera position looking slightly down
    let baseCameraY = 48;
    let baseCameraZ = 85;
    camera.position.set(0, baseCameraY, baseCameraZ);
    camera.lookAt(0, -5, 0);

    // Renderer - True deep black background (#000000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    containerRef.current.appendChild(renderer.domElement);

    // ----------------------------------------------------
    // 1. GRID OF NODES & CONNECTION CIRCUIT PATHWAYS
    // ----------------------------------------------------
    const cols = 28;
    const rows = 28;
    const spacing = 7.0;
    const count = cols * rows;

    const basePositions = new Float32Array(count * 3);
    const activePositions = new Float32Array(count * 3);
    const displacements = new Float32Array(count * 3); // For spring damping cursor magnetism
    const velocities = new Float32Array(count * 3);    // Magnetic node velocity

    // Generate grid coordinates
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        // Centered grid on XZ plane
        const x = (c - cols / 2) * spacing + (Math.random() - 0.5) * 1.5;
        const z = (r - rows / 2) * spacing + (Math.random() - 0.5) * 1.5;
        const y = 0; // Starts flat

        basePositions[i * 3] = x;
        basePositions[i * 3 + 1] = y;
        basePositions[i * 3 + 2] = z;

        activePositions[i * 3] = x;
        activePositions[i * 3 + 1] = y;
        activePositions[i * 3 + 2] = z;
      }
    }

    // Proximity connections mapping
    const connections: [number, number][] = [];
    const neighbors: number[][] = Array.from({ length: count }, () => []);

    const addConnection = (i1: number, i2: number) => {
      connections.push([i1, i2]);
      neighbors[i1].push(i2);
      neighbors[i2].push(i1);
    };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        // Horizontal connection
        if (c < cols - 1) addConnection(i, i + 1);
        // Vertical connection
        if (r < rows - 1) addConnection(i, i + cols);
        // Diagonal circuit pathways with small random chance (creates realistic PCB look)
        if (c < cols - 1 && r < rows - 1 && Math.random() < 0.12) {
          addConnection(i, i + cols + 1);
        }
      }
    }

    // Nodes visual points geometry and materials
    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(activePositions, 3));

    // Simple smooth circle texture for nodes
    const nodeCanvas = document.createElement('canvas');
    nodeCanvas.width = 16;
    nodeCanvas.height = 16;
    const nodeCtx = nodeCanvas.getContext('2d');
    if (nodeCtx) {
      const gradient = nodeCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, 'rgba(161, 161, 170, 0.8)'); // Light grey center
      gradient.addColorStop(0.5, 'rgba(63, 63, 70, 0.4)');   // Dark grey mid
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      nodeCtx.fillStyle = gradient;
      nodeCtx.fillRect(0, 0, 16, 16);
    }
    const nodeTexture = new THREE.CanvasTexture(nodeCanvas);

    const nodeMaterial = new THREE.PointsMaterial({
      size: 1.6,
      sizeAttenuation: true,
      map: nodeTexture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    // Deep Dark Grey Circuit Lines
    const linePositions = new Float32Array(connections.length * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    // Dark grey material representing silent hardware pathways
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x27272a, // Deep zinc grey
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });

    const circuitLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(circuitLines);

    // ----------------------------------------------------
    // 2. CRIMSON RED (#DC143C) PULSATING DATA EMITTERS
    // ----------------------------------------------------
    const pulseCount = 38;
    interface Pulse {
      currNode: number;
      targetNode: number;
      progress: number; // 0.0 to 1.0
      speed: number;
    }

    const pulses: Pulse[] = [];
    const pulsePositions = new Float32Array(pulseCount * 3);

    // Initialize random pulses starting at nodes with neighbors
    for (let p = 0; p < pulseCount; p++) {
      let startNode = Math.floor(Math.random() * count);
      while (neighbors[startNode].length === 0) {
        startNode = Math.floor(Math.random() * count);
      }
      const targetNode = neighbors[startNode][Math.floor(Math.random() * neighbors[startNode].length)];

      pulses.push({
        currNode: startNode,
        targetNode: targetNode,
        progress: Math.random(), // Stagger starts
        speed: 0.015 + Math.random() * 0.02,
      });
    }

    const pulseGeometry = new THREE.BufferGeometry();
    pulseGeometry.setAttribute('position', new THREE.BufferAttribute(pulsePositions, 3));

    // Glow crimson texture for signal pulses
    const pulseCanvas = document.createElement('canvas');
    pulseCanvas.width = 32;
    pulseCanvas.height = 32;
    const pulseCtx = pulseCanvas.getContext('2d');
    if (pulseCtx) {
      const gradient = pulseCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');     // White hot core
      gradient.addColorStop(0.2, 'rgba(220, 20, 60, 1.0)');      // Crimson body
      gradient.addColorStop(0.6, 'rgba(220, 20, 60, 0.45)');     // Crimson aura
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      pulseCtx.fillStyle = gradient;
      pulseCtx.fillRect(0, 0, 32, 32);
    }
    const pulseTexture = new THREE.CanvasTexture(pulseCanvas);

    const pulseMaterial = new THREE.PointsMaterial({
      size: 3.2,
      sizeAttenuation: true,
      map: pulseTexture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const dataSignals = new THREE.Points(pulseGeometry, pulseMaterial);
    scene.add(dataSignals);

    // ----------------------------------------------------
    // 3. INTERACTIVITY & EVENTS (SCROLL & CURSOR)
    // ----------------------------------------------------
    // Cursor normalized device position
    let mouse = new THREE.Vector2(-9999, -9999); // Offscreen initially
    let targetMouse3D = new THREE.Vector3(-9999, 0, -9999);
    let mouse3D = new THREE.Vector3(-9999, 0, -9999);

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Project mouse screen coordinates to XZ plane at y = 0
      // An approximation based on our camera range
      const scaleX = mouse.x * 110;
      const scaleZ = -mouse.y * 70;
      targetMouse3D.set(scaleX, 0, scaleZ);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll progress tracker
    let targetScrollY = 0;
    let smoothedScrollY = 0;
    let lastScrollY = 0;
    let scrollVelocity = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ----------------------------------------------------
    // 4. MAIN ANIMATION & SIMULATION LOOP
    // ----------------------------------------------------
    let animationFrameId: number;
    const clock = new THREE.Clock();

    // Physics parameters for spring cursor push/pull
    const magneticRadius = 32.0;
    const pushForce = 0.52;
    const springStiffness = 0.08;
    const damping = 0.88;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Proportional scroll tracking
      smoothedScrollY += (targetScrollY - smoothedScrollY) * 0.06;
      
      // Calculate scroll speed/velocity to add dynamic wave amplitude shifts
      scrollVelocity = Math.abs(targetScrollY - lastScrollY);
      lastScrollY = targetScrollY;

      // Interpolate projected mouse coordinate
      if (mouse.x !== -9999) {
        mouse3D.lerp(targetMouse3D, 0.08);
      }

      // Continuous wave morph parameters (scroll speed triggers faster undulations)
      const waveSpeed = time * 0.95 + (scrollVelocity * 0.005);
      const waveAmp = 4.8 + Math.min(scrollVelocity * 0.04, 5.0);

      // Loop nodes and update position matrices
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        const bx = basePositions[idx];
        const bz = basePositions[idx + 2];

        // Fluid mechanics Wave Formula (undulating sin/cos heights)
        const waveY = Math.sin(waveSpeed + bx * 0.035) * Math.cos(waveSpeed * 0.6 + bz * 0.035) * waveAmp;

        // Calculate cursor displacement force
        let targetDisplacementX = 0;
        let targetDisplacementY = 0;
        let targetDisplacementZ = 0;

        if (mouse.x !== -9999) {
          const dx = bx - mouse3D.x;
          const dz = bz - mouse3D.z;
          const distSq = dx * dx + dz * dz;
          const dist = Math.sqrt(distSq);

          if (dist < magneticRadius && dist > 0.1) {
            // Magnetic force push factor (strongest at center, drops to zero at boundary)
            const force = (1.0 - dist / magneticRadius) * pushForce;
            targetDisplacementX = (dx / dist) * force * 15.0;
            targetDisplacementZ = (dz / dist) * force * 15.0;
            // Crimson energy pushes nodes upwards slightly
            targetDisplacementY = force * 6.0;
          }
        }

        // Apply Spring-Damp physical forces to displacements
        const ax = (targetDisplacementX - displacements[idx]) * springStiffness;
        const ay = (targetDisplacementY - displacements[idx + 1]) * springStiffness;
        const az = (targetDisplacementZ - displacements[idx + 2]) * springStiffness;

        velocities[idx] = (velocities[idx] + ax) * damping;
        velocities[idx + 1] = (velocities[idx + 1] + ay) * damping;
        velocities[idx + 2] = (velocities[idx + 2] + az) * damping;

        displacements[idx] += velocities[idx];
        displacements[idx + 1] += velocities[idx + 1];
        displacements[idx + 2] += velocities[idx + 2];

        // Assign actual active node coordinates
        activePositions[idx] = bx + displacements[idx];
        activePositions[idx + 1] = waveY + displacements[idx + 1];
        activePositions[idx + 2] = bz + displacements[idx + 2];
      }

      // Notify points buffer of coordinates changes
      nodeGeometry.attributes.position.needsUpdate = true;

      // ----------------------------------------------------
      // UPDATE CONNECTIONS (CIRCUIT LINES)
      // ----------------------------------------------------
      let lineIdx = 0;
      for (let c = 0; c < connections.length; c++) {
        const [i1, i2] = connections[c];

        const x1 = activePositions[i1 * 3];
        const y1 = activePositions[i1 * 3 + 1];
        const z1 = activePositions[i1 * 3 + 2];

        const x2 = activePositions[i2 * 3];
        const y2 = activePositions[i2 * 3 + 1];
        const z2 = activePositions[i2 * 3 + 2];

        // Assign start node coordinates
        linePositions[lineIdx++] = x1;
        linePositions[lineIdx++] = y1;
        linePositions[lineIdx++] = z1;

        // Assign end node coordinates
        linePositions[lineIdx++] = x2;
        linePositions[lineIdx++] = y2;
        linePositions[lineIdx++] = z2;
      }

      // Notify line segments buffer of changes
      lineGeometry.attributes.position.needsUpdate = true;

      // ----------------------------------------------------
      // UPDATE PULSATING RED SIGNALS
      // ----------------------------------------------------
      for (let p = 0; p < pulseCount; p++) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1.0) {
          // Transfer to new target
          pulse.progress = 0.0;
          pulse.currNode = pulse.targetNode;

          const nList = neighbors[pulse.currNode];
          if (nList && nList.length > 0) {
            pulse.targetNode = nList[Math.floor(Math.random() * nList.length)];
          } else {
            // Fallback to random node
            let fallback = Math.floor(Math.random() * count);
            while (neighbors[fallback].length === 0) {
              fallback = Math.floor(Math.random() * count);
            }
            pulse.currNode = fallback;
            pulse.targetNode = neighbors[fallback][Math.floor(Math.random() * neighbors[fallback].length)];
          }
        }

        // Interpolate signal coordinate
        const n1Idx = pulse.currNode * 3;
        const n2Idx = pulse.targetNode * 3;

        const x1 = activePositions[n1Idx];
        const y1 = activePositions[n1Idx + 1];
        const z1 = activePositions[n1Idx + 2];

        const x2 = activePositions[n2Idx];
        const y2 = activePositions[n2Idx + 1];
        const z2 = activePositions[n2Idx + 2];

        const pIdx = p * 3;
        pulsePositions[pIdx] = x1 + (x2 - x1) * pulse.progress;
        pulsePositions[pIdx + 1] = y1 + (y2 - y1) * pulse.progress + 0.15; // Raised slightly above line to avoid WebGL clipping
        pulsePositions[pIdx + 2] = z1 + (z2 - z1) * pulse.progress;
      }

      // Notify signals Points buffer of position updates
      pulseGeometry.attributes.position.needsUpdate = true;

      // ----------------------------------------------------
      // SCROLL SYNC CAMERA MORPHING (PERSPECTIVE PARALLAX)
      // ----------------------------------------------------
      // Camera tilts, pitches, and flies upwards as user scrolls down
      const scrollFactor = smoothedScrollY * 0.032;
      camera.position.y = baseCameraY + scrollFactor;
      camera.position.z = baseCameraZ - scrollFactor * 0.35;
      camera.lookAt(0, -scrollFactor * 0.4, 0);

      // Soft continuous rotation on Y-axis
      nodePoints.rotation.y = time * 0.012;
      circuitLines.rotation.y = time * 0.012;
      dataSignals.rotation.y = time * 0.012;

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
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      nodeGeometry.dispose();
      nodeMaterial.dispose();
      nodeTexture.dispose();

      lineGeometry.dispose();
      lineMaterial.dispose();

      pulseGeometry.dispose();
      pulseMaterial.dispose();
      pulseTexture.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10 w-full h-full bg-black overflow-hidden pointer-events-none"
    />
  );
}
