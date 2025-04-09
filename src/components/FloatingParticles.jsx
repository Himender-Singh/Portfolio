import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Particle = ({ x, y, size, id, mousePosition }) => {
  const controls = useAnimation();

  useEffect(() => {
    const dx = mousePosition.x - x;
    const dy = mousePosition.y - y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 100) {
      controls.start({
        x: x - dx * 0.1,
        y: y - dy * 0.1,
        scale: 1.5,
        transition: { duration: 0.3 },
      });
    } else {
      controls.start({
        x,
        y,
        scale: 1,
        transition: { duration: 1 },
      });
    }
  }, [mousePosition]);

  return (
    <motion.div
      key={id}
      className="absolute rounded-full bg-white/10"
      style={{
        width: size,
        height: size,
      }}
      initial={{
        opacity: 0.5,
      }}
      animate={controls}
      transition={{
        duration: Math.random() * 10 + 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
};

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const generateParticles = () => {
      const arr = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 8 + 4,
      }));
      setParticles(arr);
    };

    generateParticles();
    window.addEventListener("resize", generateParticles);
    return () => window.removeEventListener("resize", generateParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} mousePosition={mousePosition} />
      ))}
    </div>
  );
};

export default FloatingParticles;
