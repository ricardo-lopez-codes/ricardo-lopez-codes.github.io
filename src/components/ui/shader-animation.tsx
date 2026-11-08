"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface ShaderAnimationProps {
  className?: string
  style?: React.CSSProperties
  active?: boolean
  duration?: number // duration in seconds (default 2.0s)
}

export function ShaderAnimation({ className, style, active = true, duration = 2.0 }: ShaderAnimationProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
    startTime: number | null
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment shader with smooth fadeout in sync with total duration
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float progress; // 0.0 to 1.0

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = progress;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i = 0; i < 5; i++){
            color[j] += lineWidth * float(i * i) / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.2));
          }
        }

        // Smooth fade out towards the 2.0s mark (between 80% and 100% of duration)
        float fade = 1.0 - smoothstep(0.8, 1.0, progress);
        color *= clamp(fade, 0.0, 1.0);
        
        gl_FragColor = vec4(color[0], color[1], color[2], 1.0);
      }
    `

    // Initialize Three.js scene
    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      progress: { type: "f", value: 0.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    container.appendChild(renderer.domElement)

    // Handle window resize
    const onWindowResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    // Initial resize
    onWindowResize()
    window.addEventListener("resize", onWindowResize, false)

    const durationMs = duration * 1000

    // Animation loop timed precisely to duration (2.0s)
    const animate = (timestamp: number) => {
      if (!sceneRef.current) return

      if (sceneRef.current.startTime === null) {
        sceneRef.current.startTime = timestamp
      }

      const elapsed = timestamp - sceneRef.current.startTime
      const currentProgress = Math.min(elapsed / durationMs, 1.0)

      uniforms.progress.value = currentProgress
      renderer.render(scene, camera)

      if (currentProgress < 1.0) {
        sceneRef.current.animationId = requestAnimationFrame(animate)
      }
    }

    // Store scene references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
      startTime: null,
    }

    if (active) {
      sceneRef.current.animationId = requestAnimationFrame(animate)
    }

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement)
        }

        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, [active, duration])

  return (
    <div
      ref={containerRef}
      className={className || "w-full h-screen"}
      style={{
        background: "#000",
        overflow: "hidden",
        ...style,
      }}
    />
  )
}
