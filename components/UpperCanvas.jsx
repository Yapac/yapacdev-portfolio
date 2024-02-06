"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

const UpperCanvas = ({ areCanvasesLoaded }) => {
  const mount = useRef(null);

  useEffect(() => {
    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("./textures/Gaseous1.png");
    const textsure = textureLoader.load("./textures/NormalMap.jpg");

    // Scene
    const scene = new THREE.Scene();

    // Objects
    const nonRotationalGroup = new THREE.Group();
    scene.add(nonRotationalGroup);

    const planet = new THREE.Group();
    planet.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(2, 32, 32),
        new THREE.MeshPhongMaterial({ map: texture, normalMap: textsure })
      )
    );
    planet.add(
      new THREE.Mesh(
        new THREE.TorusGeometry(3.5, 0.5, 2.5, 100),
        new THREE.MeshPhongMaterial({ color: 0xffffff })
      ).rotateX(Math.PI / 1.7)
    );
    planet.position.z = 125;
    planet.position.x = 3;
    planet.position.y = 20;

    planet.scale.set(0.5, 0.5, 0.5);
    nonRotationalGroup.add(planet);

    // Planet lighting
    const d = new THREE.PointLight(0x0e09dc, 0.4, 15);
    d.position.set(5, 20, 126);
    nonRotationalGroup.add(d);

    const d2 = new THREE.PointLight(0xffffff, 0.4, 15);
    d2.position.set(3, 25, 126);
    nonRotationalGroup.add(d2);

    const initLights = () => {
      const r = 30;
      const y = 10;
      const lightDistance = 300;

      const light1 = new THREE.PointLight(0x0e09dc, 0.4, lightDistance);
      light1.position.set(0, y, r - 60);
      scene.add(light1);

      const light2 = new THREE.PointLight(0x1cd1e1, 0.4, lightDistance);
      light2.position.set(0, -y, -r - 60);
      nonRotationalGroup.add(light2);

      const light3 = new THREE.PointLight(0x18c02c, 0.4, lightDistance);
      light3.position.set(r, y, -60);
      scene.add(light3);

      const light4 = new THREE.PointLight(0xee3bcf, 0.4, lightDistance);
      light4.position.set(-r, y, -60);
      nonRotationalGroup.add(light4);
    };
    initLights();

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Camera
    const camera = new THREE.PerspectiveCamera(
      80,
      sizes.width / sizes.height,
      0.01,
      500
    );
    camera.position.x = 0;
    camera.position.y = 75;
    camera.position.z = 325;
    nonRotationalGroup.add(camera);

    if (areCanvasesLoaded) {
      setTimeout(() => {
        gsap.to(camera.position, {
          duration: 1,
          delay: 1,
          z: 128.6,
          y: 20,
        });
      }, 750);
    }

    /**
     * Scroll Animation
     */
    const handleScroll = () => {
      const t = document.body.getBoundingClientRect().top;

      camera.position.z = 128 - t * -0.025;
    };
    window.addEventListener("scroll", handleScroll);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    if (areCanvasesLoaded) {
      mount.current.appendChild(renderer.domElement);
    }

    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update Objects
      nonRotationalGroup.rotation.y = elapsedTime / 15;
      planet.rotation.y = elapsedTime / 3;

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      requestAnimationFrame(tick);
    };

    tick();

    // Cleanup function
    return () => {
      // Dispose resources, remove event listeners, etc.
      window.removeEventListener("scroll", handleScroll);
    };
  }, [areCanvasesLoaded]); // empty dependency array to run the effect only once

  return <div className="upper" ref={mount} />;
};

export default UpperCanvas;
