"use client";
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { createNoise4D } from "simplex-noise";
import gsap from "gsap";
import $ from "jquery";
import useStore, { getMenuState } from "@/store/store";

const MainCanvas = () => {
  const mount = useRef(null);

  const toggleMenu = useStore((state) => state.toggleMenu);

  // Sizes
  const sizes = useMemo(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }, []);

  const init = () => {
    // Loaders
    if (document) {
    }
    const loadingBar = document.querySelector(".loading-bar");

    const loadingManager = new THREE.LoadingManager(
      () => {
        setTimeout(() => {
          window.scrollTo(0, 0);

          document.querySelector("#home").classList.remove("hidden");

          document.querySelector("header").classList.remove("invisible");
          document.querySelector("header").classList.add("header-ready");

          document.querySelector("#main-nav").classList.remove("invisible");

          document.querySelector("#root").classList.remove("overflow-hidden");

          document.querySelector("#loading-container").classList.add("fadeOut");

          gsap.to(camera.position, {
            duration: 1,
            delay: 1,
            z: 128,
            y: 20,
          });
        }, 750);
      },
      (itemUrl, itemsLoaded, itemsTotal) => {
        const progressRatio = itemsLoaded / itemsTotal;
        loadingBar.style.transform = "scaleX(" + progressRatio + ")";
      }
    );

    const cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager);
    const envMap = cubeTextureLoader.load([
      "./cubemaps/px.jpg",
      "./cubemaps/nx.jpg",
      "./cubemaps/py.jpg",
      "./cubemaps/ny.jpg",
      "./cubemaps/pz.jpg",
      "./cubemaps/nz.jpg",
    ]);

    // Scene
    const scene = new THREE.Scene();
    scene.background = envMap;

    // Objects
    const Group = new THREE.Group();
    scene.add(Group);

    const LambertMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });

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

    // Lights
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

    // Camera
    const camera = new THREE.PerspectiveCamera(
      80,
      sizes.width / sizes.height,
      0.1,
      400
    );
    camera.position.set(0, 75, 325);
    Group.add(camera);

    /**
     * Scroll Animation
     */

    const handleScroll = () => {
      const t = document.body.getBoundingClientRect().top;

      camera.position.z = 125 - t * -0.025;
    };
    window.addEventListener("scroll", handleScroll);

    /**
     * MENU FUNCTION
     */

    const burgerMenu = (cameraPos) => {
      const toggleButton = document.querySelector(".js-colorlib-nav-toggle");

      $(".js-colorlib-nav-toggle").on("click", function () {
        if (document.body.classList.contains("menu-show")) {
          document.body.classList.remove("menu-show");
          // toggleButton.colorlib-nav-toggle.remove("show");
          // gsap.from(cameraPos, { duration: 1, delay: 0, z: -50 });
        } else {
          document.body.classList.add("menu-show");
          setTimeout(() => {
            // toggleButton.classList.add("show");
          }, 900);
        }
      });

      $(".navig-link").on("click", function () {
        toggleMenu();
        document.querySelector("li.active").classList.remove("active");
        this.parentElement.classList.add("active");
        document.body.classList.remove("menu-show");
        // toggleButton.classList.remove("show");

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    };
    burgerMenu(camera.position);

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.current.appendChild(renderer.domElement);

    // Update Resizes
    const handleResize = () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // Animate
    const mouse = new THREE.Vector2();

    const handleMouseMove = (e) => {
      const v = new THREE.Vector3();
      camera.getWorldDirection(v);
      v.normalize();
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    document.addEventListener("mousemove", handleMouseMove);

    const clock = new THREE.Clock();
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

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update Objects
      animatePlane();
      Group.rotation.y = elapsedTime / 15;

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      requestAnimationFrame(tick);
    };

    tick();
  };

  useEffect(() => {
    init();

    return () => {
      // Clean up code here (if needed)
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);

      // Dispose assets
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
    };
  }, []); // empty dependency array ensures that the effect runs once on mount

  return <div ref={mount} />;
};

export default MainCanvas;
