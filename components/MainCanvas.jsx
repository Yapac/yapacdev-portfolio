"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

import gsap from "gsap";
import useStore from "@/store/store";

const MainCanvas = () => {
  const mount = useRef(null);

  const setCanvasLoaded = useStore((state) => state.setCanvasLoaded);
  const setFirstLoaded = useStore((state) => state.setFirstLoaded);

  useEffect(() => {
    const loadingBar = document.querySelector(".loading-bar");
    const loadingValue = document.querySelector(".loading-value");

    // 0.Loading Manager
    const loadingManager = new THREE.LoadingManager(
      () => {
        let hero = document.querySelector(".holder-hero");
        let header = document.querySelector("header");
        hero.classList.add("hidden");
        header.classList.add("invisible");

        setCanvasLoaded();
        setTimeout(() => {
          window.scrollTo(0, 0);

          hero.classList.remove("hidden");

          header.classList.remove("invisible");
          header.classList.add("header-ready");

          document.querySelector("#root").classList.remove("overflow-hidden");

          document.querySelector("#loading-container").classList.add("fadeOut");

          gsap.to(camera.position, {
            duration: 1,
            delay: 0,
            z: 128,
            y: 20,
          });
          gsap.from(densityOfGathering, {
            duration: 1,
            value: 10,
          });

          for (let i = 0; i < materials.length; i++) {
            gsap.from(materials[i].uniforms.alpha, {
              duration: 1,
              delay: 3.5,
              value: 0,
            });
          }
        }, 25);
        setTimeout(() => {
          setFirstLoaded();
        }, 2000);
      },
      (itemUrl, itemsLoaded, itemsTotal) => {
        const progressRatio = Math.floor((itemsLoaded / itemsTotal) * 100);
        loadingBar.style.width = progressRatio + "%";
        loadingValue.textContent = progressRatio + "%";
        document.querySelector("#root").classList.add("overflow-hidden");
      }
    );

    // 1.Cube Texture Loading
    const cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager);
    const envMap = cubeTextureLoader.load([
      "./skybox/px.png",
      "./skybox/nx.png",
      "./skybox/py.png",
      "./skybox/py.png",
      "./skybox/pz.png",
      "./skybox/nz.png",
    ]);

    // 2.Scene
    const scene = new THREE.Scene();
    scene.background = envMap;

    // 3.Objects
    const nonRotationalGroup = new THREE.Group();
    scene.add(nonRotationalGroup);

    //--------------------------------------------------------------------
    // Interactive circles
    const particlesWorld = new THREE.Object3D();

    // Array to hold the shader materials
    const materials = [];

    const createParticleWord = () => {
      // Vertex shader
      const vertexShader = `
            varying vec3 vNormal;
            varying vec3 vPosition;
            varying float vDistance;

            void main() {
                vNormal = normal;
                vPosition = position;

                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * mvPosition;

                // Calculate distance from camera to fragment
                vDistance = length(-mvPosition.xyz);
            }
        `;

      // Fragment shader
      const fragmentShader = `
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying float vDistance;

        uniform vec3 color;
        uniform float distanceFactor;
        uniform float maxDistance;
        uniform float alpha;

        void main() {
            // Calculate the direction vector pointing towards the positive Z-axis
            vec3 lightDirection = vec3(0.0, 0.0, 1.0);

            // Normalize the normal and the light direction
            vec3 normal = normalize(vNormal);
            vec3 lightDir = normalize(lightDirection);

            // Calculate the intensity based on the absolute value of the dot product of the normal and the light direction
            float intensity = abs(dot(normal, lightDir));

            // Calculate the darkness based on distance
            float darkness = 1.0 - (vDistance / maxDistance);

            // Clamp darkness to ensure it's not negative
            darkness = max(darkness, 0.0);

            // Calculate the final color
            vec3 finalColor = color * intensity * distanceFactor * darkness;

            gl_FragColor = vec4(finalColor, alpha);
        }
    `;

      // Define color options
      const colorOptions = [
        "#536677", //
        "#536677", //
        "#627281", //
        "#536677", //
      ];

      // Create shader materials with different colors
      for (let i = 0; i < colorOptions.length; i++) {
        const material = new THREE.ShaderMaterial({
          uniforms: {
            color: { value: new THREE.Color(colorOptions[i]) },
            distanceFactor: { value: 1.0 },
            maxDistance: { value: 4.5 },
            alpha: { value: 0.1 },
          },
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
          // flatShading: true,
          transparent: true,
        });

        materials.push(material);
      }

      // Create objects
      const geometry = new THREE.CircleGeometry(0.7, 32);
      let circle_start = 70;

      for (let i = 0; i < 120; i++) {
        // Randomly select a color from the options
        const material =
          materials[Math.floor(Math.random() * materials.length)];

        let circle = new THREE.Mesh(geometry, material);

        circle.position.set(
          -Math.random() * circle_start + Math.random() * circle_start,
          -Math.random() * circle_start + Math.random() * circle_start,
          -Math.random() * circle_start + Math.random() * circle_start
        );

        let circle_scale = Math.random() * 1;
        circle.scale.set(circle_scale, circle_scale, circle_scale);

        particlesWorld.add(circle);
      }
      particlesWorld.children[0].scale.set(0, 0, 0);
      particlesWorld.children[1].scale.set(0, 0, 0);
      //---
      let object_pos = particlesWorld.children[0];
      let object_pos_range = 500;
      setInterval(function () {
        object_pos.position.x =
          -Math.random() * object_pos_range + Math.random() * object_pos_range;
        object_pos.position.y =
          -Math.random() * object_pos_range + Math.random() * object_pos_range;
        object_pos.position.z =
          -Math.random() * object_pos_range + Math.random() * object_pos_range;
      }, 1000);

      // Setting position
      particlesWorld.position.z = 124;
      particlesWorld.position.x = 0;
      particlesWorld.position.y = 20;

      nonRotationalGroup.add(particlesWorld);
    };
    createParticleWord();

    //--------------------------------------------------------------------

    // The less the value the more is the gathering
    let densityOfGathering = { value: 500 };
    const center = new THREE.Vector3(0, 0, 0);

    function circlesAnimation() {
      let time = Date.now() * 0.003;
      particlesWorld.rotation.y = (Math.sin(time) * Math.PI) / 1000;
      particlesWorld.rotation.z = (Math.cos(time) * Math.PI) / 1000;

      //---
      for (let i = 0, l = particlesWorld.children.length; i < l; i++) {
        let object = particlesWorld.children[i];
        let object_left = particlesWorld.children[i - 1];
        if (i > 1) {
          //---
          gsap.to(object.position, {
            duration: 20,
            x: Math.cos(object_left.position.x * Math.PI) * 3,
            y: Math.sin(object_left.position.y * Math.PI) * 3,
            z: Math.cos(object_left.position.z * Math.PI) * 3,
            //ease:Expo.easeOut
          });
        }

        if (2 == Math.floor(Math.random() * densityOfGathering.value) + 1) {
          // Calculate direction vector from circle's position to cursor's position
          let direction = new THREE.Vector3()
            .copy(center)
            .sub(particlesWorld.children[i].position)
            .normalize();
          // Calculate push distance based on pushStrength
          let pushDistance =
            100 * particlesWorld.children[i].geometry.parameters.radius;
          // Calculate target position away from the cursor
          let targetPosition = new THREE.Vector3()
            .copy(particlesWorld.children[i].position)
            .addScaledVector(direction, pushDistance);

          // Introduce randomness in x-coordinate
          targetPosition.x += Math.random() * 200 - 100; // Adjust the range as needed

          targetPosition.y =
            Math.min(targetPosition.y, -10) + Math.random() * 20;
          targetPosition.z =
            Math.min(targetPosition.z, camera.position.z - 10) +
            Math.random() * 20;
          // Tween position to the target position
          gsap.to(particlesWorld.children[i].position, {
            duration: 0.5,
            x:
              "+=" + (targetPosition.x - particlesWorld.children[i].position.x),
            y:
              "+=" + (targetPosition.y - particlesWorld.children[i].position.y),
            z:
              "+=" + (targetPosition.z - particlesWorld.children[i].position.z),
            ease: "power2.out",
          });
        }
      }
      //---
    }

    //------------------------------------------------------------------------------------------

    // 4.Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // 6.Camera
    const camera = new THREE.PerspectiveCamera(
      80,
      sizes.width / sizes.height,
      0.1,
      400
    );
    camera.position.set(0, 75, 325);
    nonRotationalGroup.add(camera);

    // 7.Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    mount.current.appendChild(renderer.domElement);

    // 8.Events Handlers

    // Resize Listener
    const handleResize = () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update canvas size
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // Mouse Listener
    const mouse = new THREE.Vector2();

    const handleMouseMove = (e) => {
      const v = new THREE.Vector3();
      camera.getWorldDirection(v);
      v.normalize();
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Scroll Listener ( On Scroll / End Scroll )
    let t = 0;
    const handleScroll = () => {
      t = document.body.getBoundingClientRect().top;

      if (particlesWorld.position.y < 30) {
        particlesWorld.position.y = 20 + t * -0.15;
      }

      camera.position.z = 128 - t * -0.025;
    };
    window.addEventListener("scroll", handleScroll);

    // 9.Animation loop
    const clock = new THREE.Clock();
    const canvasRect = renderer.domElement.getBoundingClientRect();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update Objects
      nonRotationalGroup.rotation.y = elapsedTime / 15;

      // Animating the particlesWorld
      /** TO FIX : NOW IT DOESNT WORK BECAUSE THE POSITION.Y DONT CHANGE, FUX IT
       * BY GETTING THE SCROLL POS
       */
      if (particlesWorld.position.y < 30) {
        circlesAnimation();

        if (t > -50 && canvasRect.width > 600) {
          let newPos = new THREE.Vector2(
            particlesWorld.position.x,
            particlesWorld.position.y
          );
          newPos.x += (mouse.x * canvasRect.width) / 22500;
          newPos.y += (mouse.y * canvasRect.height) / 22500;

          newPos.x = Math.min(Math.max(-0.25, newPos.x), 0.25);
          newPos.y = Math.min(Math.max(19.5, newPos.y), 20.5);

          particlesWorld.position.x = newPos.x;
          particlesWorld.position.y = newPos.y;
        }
      }
      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    /* CLEAN UP */
    for (let i = 0; i < materials.length; i++) {
      materials[i].dispose();
    }

    // Dispose assets
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        object.material.dispose();
      }
    });

    return () => {
      // Clean up code here (if needed)
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Dispose assets
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
    };
  }, []); // empty dependency array ensures that the effect runs once on mount

  return (
    <>
      <div ref={mount} />
    </>
  );
};

export default MainCanvas;
