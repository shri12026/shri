import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x061539, 0.035);

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.domElement.style.touchAction = 'pan-y';
    container.appendChild(renderer.domElement);

    // Group for all rotating objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- MATERIALS ---
    // Luxury Royal Gold Material
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xF2A900,
      metalness: 0.88,
      roughness: 0.22,
      emissive: 0x241700,
    });

    const goldTrimMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFD54F,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x332000,
    });

    // Navy Architectural Material
    const navyGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0B2A6F,
      metalness: 0.3,
      roughness: 0.1,
      transmission: 0.5,
      transparent: true,
      opacity: 0.9,
    });

    // Leaf Green Growth Material
    const greenMaterial = new THREE.MeshStandardMaterial({
      color: 0x1E7B34,
      metalness: 0.7,
      roughness: 0.25,
      emissive: 0x0A3614,
    });

    // Glowing Window Material
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFF1B8,
    });

    // --- 1. ROTATING GOLDEN COIN STACK ---
    const coinGroup = new THREE.Group();
    const coinCount = 6;
    const coinRadius = 0.95;
    const coinHeight = 0.14;

    const coinGeo = new THREE.CylinderGeometry(coinRadius, coinRadius, coinHeight, 36);
    const coinRimGeo = new THREE.TorusGeometry(coinRadius - 0.05, 0.04, 16, 36);

    for (let i = 0; i < coinCount; i++) {
      const coinMesh = new THREE.Mesh(coinGeo, goldMaterial);
      coinMesh.position.y = (i - coinCount / 2) * (coinHeight + 0.04);
      // Stagger slight rotation offset
      coinMesh.rotation.y = (i * 0.3);
      coinGroup.add(coinMesh);

      // Add embossed gold rim to each coin
      const rimTop = new THREE.Mesh(coinRimGeo, goldTrimMaterial);
      rimTop.rotation.x = Math.PI / 2;
      rimTop.position.y = coinMesh.position.y + coinHeight / 2;
      coinGroup.add(rimTop);
    }

    coinGroup.position.set(-1.8, -0.2, 0.5);
    coinGroup.rotation.x = 0.35;
    coinGroup.rotation.z = -0.15;
    mainGroup.add(coinGroup);

    // --- 2. 3D STYLIZED HOUSE ---
    const houseGroup = new THREE.Group();

    // House Base (walls)
    const houseBaseGeo = new THREE.BoxGeometry(1.6, 1.3, 1.4);
    const houseBase = new THREE.Mesh(houseBaseGeo, navyGlassMaterial);
    houseGroup.add(houseBase);

    // House Pitched Roof (triangular prism / cone approximation or cylinder with 3-4 segments)
    const roofGeo = new THREE.ConeGeometry(1.45, 0.9, 4);
    const roof = new THREE.Mesh(roofGeo, goldMaterial);
    roof.position.y = 1.05;
    roof.rotation.y = Math.PI / 4;
    houseGroup.add(roof);

    // Glowing Windows
    const winGeo = new THREE.PlaneGeometry(0.35, 0.45);
    
    // Front window left
    const win1 = new THREE.Mesh(winGeo, glowMaterial);
    win1.position.set(-0.4, 0.1, 0.71);
    houseGroup.add(win1);

    // Front window right
    const win2 = new THREE.Mesh(winGeo, glowMaterial);
    win2.position.set(0.4, 0.1, 0.71);
    houseGroup.add(win2);

    // Front Door
    const doorGeo = new THREE.PlaneGeometry(0.4, 0.7);
    const door = new THREE.Mesh(doorGeo, goldTrimMaterial);
    door.position.set(0, -0.3, 0.71);
    houseGroup.add(door);

    houseGroup.position.set(0.6, 0.4, -0.2);
    houseGroup.rotation.y = -0.4;
    houseGroup.rotation.x = 0.15;
    mainGroup.add(houseGroup);

    // --- 3. RISING BAR-CHART COLUMNS (GROWTH) ---
    const chartGroup = new THREE.Group();
    const barData = [
      { height: 0.9, x: -0.6, color: 0x0B2A6F },
      { height: 1.5, x: -0.1, color: 0x1E7B34 },
      { height: 2.2, x: 0.4, color: 0x0B2A6F },
      { height: 3.0, x: 0.9, color: 0xF2A900 },
    ];

    barData.forEach((bar) => {
      const barGeo = new THREE.BoxGeometry(0.38, bar.height, 0.38);
      const barMat = new THREE.MeshStandardMaterial({
        color: bar.color,
        metalness: 0.75,
        roughness: 0.25,
        emissive: bar.color === 0xF2A900 ? 0x332000 : 0x000000,
      });
      const barMesh = new THREE.Mesh(barGeo, barMat);
      barMesh.position.set(bar.x, bar.height / 2 - 1.5, 0);
      chartGroup.add(barMesh);

      // Gold top cap on each bar
      const capGeo = new THREE.BoxGeometry(0.4, 0.06, 0.4);
      const capMesh = new THREE.Mesh(capGeo, goldTrimMaterial);
      capMesh.position.set(bar.x, bar.height - 1.5 + 0.03, 0);
      chartGroup.add(capMesh);
    });

    chartGroup.position.set(2.0, -0.1, 0.8);
    chartGroup.rotation.y = -0.35;
    mainGroup.add(chartGroup);

    // --- 4. UPWARD GROWTH ARROW / CURVE ---
    const curvePoints = [];
    for (let t = 0; t <= 1; t += 0.05) {
      const x = -2.2 + t * 4.2;
      const y = -1.2 + Math.pow(t, 1.8) * 3.2;
      const z = Math.sin(t * Math.PI) * 0.8;
      curvePoints.push(new THREE.Vector3(x, y, z));
    }
    const curvePath = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curvePath, 40, 0.08, 12, false);
    const growthTube = new THREE.Mesh(tubeGeo, greenMaterial);
    mainGroup.add(growthTube);

    // Arrowhead at the end
    const coneHeadGeo = new THREE.ConeGeometry(0.24, 0.6, 16);
    const arrowHead = new THREE.Mesh(coneHeadGeo, greenMaterial);
    arrowHead.position.set(2.0, 2.0, 0.1);
    arrowHead.rotation.z = -Math.PI / 4;
    mainGroup.add(arrowHead);

    // --- 5. FLOATING GOLD PARTICLES ---
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
      particleSpeeds[i / 3] = 0.2 + Math.random() * 0.8;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xF2A900,
      size: 0.07,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.85);
    scene.add(ambientLight);

    // Warm Gold Key Light
    const keyLight = new THREE.DirectionalLight(0xFFD700, 2.2);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    // Cool Navy Fill Light
    const fillLight = new THREE.DirectionalLight(0x4A77D4, 1.4);
    fillLight.position.set(-5, -2, -3);
    scene.add(fillLight);

    // Rim Light (Gold separation highlight)
    const rimLight = new THREE.DirectionalLight(0xFFE484, 1.8);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // WebGL Context recovery
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      setWebglSupported(false);
    };

    const handleContextRestored = () => {
      setWebglSupported(true);
    };

    const canvasElement = renderer.domElement;
    canvasElement.addEventListener('webglcontextlost', handleContextLost, false);
    canvasElement.addEventListener('webglcontextrestored', handleContextRestored, false);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        // Continuous gentle rotation of coins
        coinGroup.rotation.y += 0.8 * delta;
        coinGroup.position.y = -0.2 + Math.sin(elapsedTime * 1.5) * 0.08;

        // Floating house subtle hover
        houseGroup.position.y = 0.4 + Math.sin(elapsedTime * 1.2 + 1) * 0.06;
        houseGroup.rotation.y = -0.4 + Math.sin(elapsedTime * 0.6) * 0.08;

        // Pulsing growth bars
        chartGroup.position.y = -0.1 + Math.sin(elapsedTime * 1.8 + 2) * 0.05;

        // Particle floating drift
        const positions = particleGeo.attributes.position.array as Float32Array;
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] += delta * 0.15 * particleSpeeds[Math.floor(i / 3)];
          if (positions[i] > 4) {
            positions[i] = -4;
          }
        }
        particleGeo.attributes.position.needsUpdate = true;

        // Mouse Parallax applied to mainGroup
        mainGroup.rotation.y = mouseX * 0.35;
        mainGroup.rotation.x = -mouseY * 0.25;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      canvasElement.removeEventListener('webglcontextlost', handleContextLost);
      canvasElement.removeEventListener('webglcontextrestored', handleContextRestored);

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js geometries and materials
      coinGeo.dispose();
      coinRimGeo.dispose();
      houseBaseGeo.dispose();
      roofGeo.dispose();
      winGeo.dispose();
      doorGeo.dispose();
      tubeGeo.dispose();
      coneHeadGeo.dispose();
      particleGeo.dispose();
      goldMaterial.dispose();
      goldTrimMaterial.dispose();
      navyGlassMaterial.dispose();
      greenMaterial.dispose();
      glowMaterial.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="relative w-64 h-64 rounded-2xl bg-gradient-to-br from-[#0B2A6F] to-[#061539] border border-[#F2A900]/30 flex flex-col items-center justify-center text-center p-6 shadow-2xl">
          <div className="w-20 h-20 rounded-full bg-[#F2A900]/20 flex items-center justify-center text-[#F2A900] text-3xl font-serif mb-4">
            ₹
          </div>
          <span className="font-serif-display font-bold text-white text-lg">Financial Prosperity</span>
          <span className="text-xs text-amber-200/80 mt-1">120+ Banking Partners</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[300px] sm:min-h-[420px] lg:min-h-[560px] cursor-grab active:cursor-grabbing pointer-events-auto touch-pan-y select-none"
      aria-label="Interactive 3D visualization showing golden coins, modern home, and rising growth chart"
    />
  );
};
