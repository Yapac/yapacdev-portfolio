"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { createNoise4D } from "simplex-noise";
import gsap from "gsap";

const MainCanvas = () => {
  const mount = useRef(null);

  useEffect(() => {
    const loadingBar = document.querySelector(".loading-bar");

    // 0.Loading Manager
    const loadingManager = new THREE.LoadingManager(
      () => {
        let hero = document.querySelector(".holder-hero");
        let header = document.querySelector("header");
        hero.classList.add("hidden");
        header.classList.add("invisible");

        setTimeout(() => {
          window.scrollTo(0, 0);

          hero.classList.remove("hidden");

          header.classList.remove("invisible");
          header.classList.add("header-ready");

          document.querySelector("#root").classList.remove("overflow-hidden");

          document.querySelector("#loading-container").classList.add("fadeOut");

          gsap.to(camera.position, {
            duration: 1,
            delay: 1,
            z: 128,
            y: 20,
          });

          gsap.from(densityOfGathering, {
            duration: 1,
            delay: 2.75,
            value: 10,
          });
          for (let i = 0; i < materials.length; i++) {
            gsap.from(materials[i].uniforms.alpha, {
              duration: 1,
              delay: 3.5,
              value: 0,
            });
          }
        }, 50);
      },
      (itemUrl, itemsLoaded, itemsTotal) => {
        const progressRatio = itemsLoaded / itemsTotal;
        loadingBar.style.transform = "scaleX(" + progressRatio + ")";

        document.querySelector("#root").classList.add("overflow-hidden");
      }
    );

    // 1.Cube Texture Loading
    const cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager);
    const envMap = cubeTextureLoader.load([
      "./cubemaps/px.webp",
      "./cubemaps/nx.webp",
      "./cubemaps/py.webp",
      "./cubemaps/ny.webp",
      "./cubemaps/pz.webp",
      "./cubemaps/nz.webp",
    ]);

    // 2.Scene
    const scene = new THREE.Scene();
    scene.background = envMap;

    // 3.Objects
    const Group = new THREE.Group();
    scene.add(Group);

    const LambertMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });

    //--------------------------------------------------------------------
    // Plane
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(
        window.innerWidth * 1.25,
        window.innerHeight * 1.25,
        window.innerWidth / 2,
        window.innerHeight / 2
      ),
      LambertMaterial
    );
    Group.add(plane);
    plane.rotation.x = -Math.PI / 2 - 0.2;
    plane.position.y = -25;
    plane.position.z = -60;

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

    //--------------------------------------------------------------------
    // Interactive circles
    const interactiveWorld = new THREE.Object3D();

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
        "#395d7f", //
        "#395d7f", //
        "#4e6e8b", //
        "#395d7f", //
      ];

      // Create shader materials with different colors
      for (let i = 0; i < colorOptions.length; i++) {
        const material = new THREE.ShaderMaterial({
          uniforms: {
            color: { value: new THREE.Color(colorOptions[i]) },
            distanceFactor: { value: 1.0 },
            maxDistance: { value: 10.0 },
            alpha: { value: 0.95 },
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
      let circle_start = 7;

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

        interactiveWorld.add(circle);
      }
      interactiveWorld.children[0].scale.set(0, 0, 0);
      interactiveWorld.children[1].scale.set(0, 0, 0);
      //---
      let object_pos = interactiveWorld.children[0];
      let object_pos_range = 0.25;
      setInterval(function () {
        object_pos.position.x =
          -Math.random() * object_pos_range + Math.random() * object_pos_range;
        object_pos.position.y =
          -Math.random() * object_pos_range + Math.random() * object_pos_range;
        object_pos.position.z =
          -Math.random() * object_pos_range + Math.random() * object_pos_range;
      }, 1000);

      // Setting position
      interactiveWorld.position.z = 124;
      interactiveWorld.position.x = 2.5;
      interactiveWorld.position.y = 20;
      Group.add(interactiveWorld);
    };
    createParticleWord();

    //--------------------------------------------------------------------

    // The less the value the more is the gathering
    let densityOfGathering = { value: 700 };
    function circlesAnimation() {
      let time = Date.now() * 0.003;
      interactiveWorld.rotation.y = (Math.sin(time) * Math.PI) / 100;
      interactiveWorld.rotation.z = (Math.cos(time) * Math.PI) / 100;
      let object_place = interactiveWorld.children[0];
      //---
      for (let i = 0, l = interactiveWorld.children.length; i < l; i++) {
        let object = interactiveWorld.children[i];
        let object_left = interactiveWorld.children[i - 1];
        if (i > 1) {
          //---
          gsap.to(object.position, {
            duration: 2.5,
            x: Math.cos(object_left.position.x * Math.PI) * 1,
            y: Math.sin(object_left.position.y * Math.PI) * 1,
            z: Math.cos(object_left.position.z * Math.PI) * 1,
            //ease:Expo.easeOut
          });

          //---
        }
        if (2 == Math.floor(Math.random() * densityOfGathering.value) + 1) {
          // Calculate direction vector from circle's position to cursor's position
          let direction = new THREE.Vector3()
            .copy(center)
            .sub(interactiveWorld.children[i].position)
            .normalize();
          // Calculate push distance based on pushStrength
          let pushDistance =
            100 * interactiveWorld.children[i].geometry.parameters.radius;
          // Calculate target position away from the cursor
          let targetPosition = new THREE.Vector3()
            .copy(interactiveWorld.children[i].position)
            .addScaledVector(direction, pushDistance);

          targetPosition.y = Math.min(targetPosition.y, -10);
          targetPosition.z = Math.min(targetPosition.z, camera.position.z - 10);
          // Tween position to the target position
          gsap.to(interactiveWorld.children[i].position, {
            duration: 0.5,
            x:
              "+=" +
              (targetPosition.x - interactiveWorld.children[i].position.x),
            y:
              "+=" +
              (targetPosition.y - interactiveWorld.children[i].position.y),
            z:
              "+=" +
              (targetPosition.z - interactiveWorld.children[i].position.z),
            ease: "power2.out",
          });
        }
      }
      //---
      let object_guide = interactiveWorld.children[1];
      object_guide.position.x +=
        Math.sin(object_place.position.x) - object_guide.position.x * 0.5;
      object_guide.position.y +=
        Math.cos(object_place.position.y) - object_guide.position.y * 0.5;
      object_guide.position.z +=
        object_place.position.z - object_guide.position.z * 0.5;
    }

    const raycaster = new THREE.Raycaster();
    const center = new THREE.Vector3(0, 0, 0);
    function checkIntersects() {
      // Update the raycaster with the mouse position
      raycaster.setFromCamera(mouse, camera);

      // Calculate objects intersecting the ray
      const intersects = raycaster.intersectObjects(interactiveWorld.children);

      if (intersects.length > 0) {
        document.querySelector(".cursor").classList.add("link-grow");
      } else {
        document.querySelector(".cursor").classList.remove("link-grow");
      }
    }
    //--------------------------------------------------------------------

    // 4.Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // 5.Lights
    const initLights = () => {
      const r = 30;
      const y = 10;
      const lightDistance = 500;

      const light1 = new THREE.PointLight(0x0e09dc, 0.4, lightDistance);
      light1.position.set(0, y, r - 60);
      scene.add(light1);

      const light2 = new THREE.PointLight(0x1cd1e1, 0.4, lightDistance);
      light2.position.set(0, -y, -r - 60);
      Group.add(light2);

      const light3 = new THREE.PointLight(0x18c02c, 0.4, lightDistance);
      light3.position.set(r, y, -60);
      scene.add(light3);

      const light4 = new THREE.PointLight(0xee3bcf, 0.4, lightDistance);
      light4.position.set(-r, y, -60);
      Group.add(light4);
    };
    initLights();

    // 6.Camera
    const camera = new THREE.PerspectiveCamera(
      80,
      sizes.width / sizes.height,
      0.1,
      400
    );
    camera.position.set(0, 75, 325);
    Group.add(camera);

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

      // Check for intersects on hover
      if (window.screenY < 768) {
        checkIntersects();
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Scroll Listener ( On Scroll / End Scroll )
    let t = 0;
    const handleScroll = () => {
      t = document.body.getBoundingClientRect().top;

      camera.position.z = 128 - t * -0.025;

      console.log(t);
      if (interactiveWorld.position.y < 30) {
        interactiveWorld.position.y = 20 + t * -0.015;
      }
      if (t < -100 && t > -1000) {
        densityOfGathering.value = 25;
      }
    };
    window.addEventListener("scroll", handleScroll);

    const handleScrollEnd = () => {
      densityOfGathering.value = 700;
    };
    window.addEventListener("scrollend", handleScrollEnd);

    // Plane Animation
    const noise4D = createNoise4D();

    const animatePlane = () => {
      let gArray = plane.geometry.attributes.position.array;
      const time = Date.now() * 0.0002;
      for (let i = 0; i < gArray.length; i += 3) {
        gArray[i + 2] =
          noise4D(
            gArray[i] / 25,
            gArray[i + 1] / 25,
            time,
            mouse.x / 2 + mouse.y / 2
          ) * 6;
      }
      plane.geometry.attributes.position.needsUpdate = true;
    };

    // 9.Animation loop
    const clock = new THREE.Clock();
    const canvasRect = renderer.domElement.getBoundingClientRect();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update Objects
      animatePlane();
      Group.rotation.y = elapsedTime / 15;

      // Animating the interactiveworld
      if (interactiveWorld.position.y < 30) {
        circlesAnimation();
      }
      if (t > -50 && canvasRect.width > 600) {
        let newPos = new THREE.Vector2(
          interactiveWorld.position.x,
          interactiveWorld.position.y
        );
        newPos.x +=
          (mouse.x * canvasRect.width - canvasRect.width / 2 + 500) / 22500;
        newPos.y += (mouse.y * canvasRect.height) / 22500;

        newPos.x = Math.min(Math.max(2.25, newPos.x), 3.25);
        newPos.y = Math.min(Math.max(19.5, newPos.y), 20.5);

        interactiveWorld.position.x = newPos.x;
        interactiveWorld.position.y = newPos.y;
      }

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    // Dispose assets
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        object.material.dispose();
      }
    });

    for (let i = 0; i < materials.length; i++) {
      materials[i].dispose();
    }
    return () => {
      // Clean up code here (if needed)
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);

      // Dispose assets
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });

      // Clean Up unmounts component
      if (mount.current) {
        mount.current.destroy();
      }
    };
  }, []); // empty dependency array ensures that the effect runs once on mount

  return (
    <>
      <div ref={mount} />
    </>
  );
};

export default MainCanvas;
