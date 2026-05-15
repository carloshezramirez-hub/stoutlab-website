"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    THREE: any
  }
}

export function ShaderAnimation({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    camera: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    scene: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderer: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    geometry: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    material: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    uniforms: any
    animationId: number | null
    resizeHandler?: () => void
  }>({
    camera: null,
    scene: null,
    renderer: null,
    geometry: null,
    material: null,
    uniforms: null,
    animationId: null,
  })

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false
    const isMobile =
      typeof window !== "undefined" ? window.innerWidth < 768 : false

    const start = () => {
      if (containerRef.current && window.THREE) {
        initThreeJS(prefersReducedMotion, isMobile)
      }
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-three-shader="true"]'
    )

    if (existingScript && window.THREE) {
      start()
    } else if (!existingScript) {
      const script = document.createElement("script")
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js"
      script.dataset.threeShader = "true"
      script.onload = start
      document.head.appendChild(script)
    } else {
      // script exists but THREE not yet loaded
      existingScript.addEventListener("load", start)
    }

    return () => {
      const current = sceneRef.current
      if (current.animationId) cancelAnimationFrame(current.animationId)
      if (current.resizeHandler)
        window.removeEventListener("resize", current.resizeHandler)
      if (current.geometry) current.geometry.dispose()
      if (current.material) current.material.dispose()
      if (current.renderer) {
        current.renderer.dispose()
        const el = current.renderer.domElement
        if (el?.parentNode) el.parentNode.removeChild(el)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function initThreeJS(prefersReducedMotion: boolean, isMobile: boolean) {
    if (!containerRef.current || !window.THREE) return
    const THREE = window.THREE
    const container = containerRef.current
    container.innerHTML = ""

    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneBufferGeometry(2, 2)

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    }

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      float random(in float x) {
        return fract(sin(x) * 1e4);
      }

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

        vec2 vScreenSize = vec2(256.0, 256.0);
        vec2 fMosaicScal = vec2(4.0, 2.0);
        uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
        uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);

        float t = time * 0.055 + random(uv.x) * 0.32;
        float lineWidth = 0.00072;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i = 0; i < 5; i++){
            color[j] += lineWidth * float(i * i) /
              abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 1.0 - length(uv));
          }
        }

        // STOUTLAB: deep navy + electric blue + icy highlight
        vec3 blue = vec3(color[2] * 0.75, color[1] * 0.55, color[0] * 1.4);
        blue += vec3(0.010, 0.028, 0.065);

        float vignette = smoothstep(1.4, 0.2, length(uv));
        blue *= vignette;

        gl_FragColor = vec4(blue, 1.0);
      }
    `

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: isMobile ? "low-power" : "high-performance",
    })

    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.5)
    renderer.setPixelRatio(dpr)
    renderer.domElement.style.width = "100%"
    renderer.domElement.style.height = "100%"
    renderer.domElement.style.display = "block"
    container.appendChild(renderer.domElement)

    const onResize = () => {
      const rect = container.getBoundingClientRect()
      renderer.setSize(rect.width, rect.height, false)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }
    onResize()
    window.addEventListener("resize", onResize, false)

    const speedNormal = isMobile ? 0.018 : 0.042
    const speedReduced = 0.003

    const animate = () => {
      sceneRef.current.animationId = requestAnimationFrame(animate)
      uniforms.time.value += prefersReducedMotion ? speedReduced : speedNormal
      renderer.render(scene, camera)
    }

    sceneRef.current = {
      camera,
      scene,
      renderer,
      geometry,
      material,
      uniforms,
      animationId: null,
      resizeHandler: onResize,
    }

    animate()
  }

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 h-full w-full overflow-hidden ${className}`}
      aria-hidden="true"
    />
  )
}
