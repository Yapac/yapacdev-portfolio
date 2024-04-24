"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import useStore, { getCanvasLoaded } from "@/store/store";

const UpperCanvas = () => {
  const mount = useRef(null);
  const isCanvasLoaded = useStore(getCanvasLoaded);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Objects
    const nonRotationalGroup = new THREE.Group();
    scene.add(nonRotationalGroup);

    const LambertMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });

    //--------------------------------------------------------------------
    // Rocks
    const donutGeometry = new THREE.BufferGeometry(0.3, 0.2, 20, 45);
    const dodecahedronGeometry = new THREE.OctahedronGeometry(0.4, 0);
    const sphereBufferGeometry = new THREE.OctahedronGeometry(0.7, 7);

    let obj;
    for (let i = 0; i < 125; i++) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          obj = new THREE.Mesh(donutGeometry, LambertMaterial);
          break;
        case 1:
          obj = new THREE.Mesh(dodecahedronGeometry, LambertMaterial);
          break;
        case 2:
          obj = new THREE.Mesh(sphereBufferGeometry, LambertMaterial);
          break;
        default:
          obj = new THREE.Mesh(dodecahedronGeometry, LambertMaterial);
          break;
      }

      obj.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 10 + 5,
        (Math.random() - 0.5) * 200
      );

      obj.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

      scene.add(obj);
    }

    // 5.Lights
    const initLights = () => {
      const r = 30;
      const y = 10;
      const lightDistance = 500;

      const light1 = new THREE.PointLight(0x204f6d, 0.4, lightDistance);
      light1.position.set(0, y, r - 60);
      scene.add(light1);

      const light2 = new THREE.PointLight(0xc0c0c0, 0.4, lightDistance);
      light2.position.set(0, -y, -r - 60);
      nonRotationalGroup.add(light2);

      const light3 = new THREE.PointLight(0x808080, 0.4, lightDistance);
      light3.position.set(r, y, -60);
      scene.add(light3);

      const light4 = new THREE.PointLight(0x204f6d, 0.4, lightDistance);
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
    camera.position.set(0, 75, 325);

    nonRotationalGroup.add(camera);

    /**
     *   Scroll Listener ( On Scroll )
     */
    let t = 0;
    const handleScroll = () => {
      t = document.body.getBoundingClientRect().top;

      camera.position.z = 128 - t * -0.025;
    };
    window.addEventListener("scroll", handleScroll);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /* ON LOAD */
    if (isCanvasLoaded) {
      mount.current.appendChild(renderer.domElement);

      setTimeout(() => {
        gsap.to(camera.position, {
          duration: 1,
          delay: 1,
          z: 128.6,
          y: 20,
        });
      }, 750);
    }

    /* ANIMATIONS */
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update Objects
      nonRotationalGroup.rotation.y = elapsedTime / 15;

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
  }, [isCanvasLoaded]); // empty dependency array to run the effect only once

  return <div className="upper" ref={mount} />;
};

export default UpperCanvas;
