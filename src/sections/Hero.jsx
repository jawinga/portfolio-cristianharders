import { useState, useEffect } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { Float } from "@react-three/drei";
import { Spinner } from "../components/Spinner";
import { BackgroundBeamsWithCollision } from "../components/BackgroundBeamsWithCollision";

function Rig({ damp = 3, max = 0.6 }) {
  useFrame(({ camera, mouse }, dt) => {
    const tx = mouse.x * max;
    const ty = mouse.y * max;
    camera.position.x += (tx - camera.position.x) * Math.min(1, dt * damp);
    camera.position.y += (ty - camera.position.y) * Math.min(1, dt * damp);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Hero() {
  const [ready, setReady] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />

      {/* <div className="absolute right-0 top-0 w-1/2 h-full">
        {!ready ? (
          <div className="flex items-center justify-center h-full">
            <Spinner />
          </div>
        ) : (
          <Canvas camera={{ position: [0, 1, 3] }}>
            <Suspense fallback={<Spinner />}>
              <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.8}>
                <Astronaut
                  scale={isMobile ? 0.23 : 0.3}
                  position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
                />
              </Float>
              <Rig />
            </Suspense>
          </Canvas>
        )}
      </div> */}
    </section>
  );
}