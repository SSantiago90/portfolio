"use client";

import { useEffect } from "react";
import "./background.css";
import { useUiContext } from "@/storage/UIcontext/UIcontext";
import { useTheme } from "next-themes";

export default function Background() {
  const { bgEffectsOn } = useUiContext();
  const { theme } = useTheme();

  useEffect(() => {
    if (!bgEffectsOn) {
      const particles = document.querySelectorAll(".particle");
      particles.forEach((particle) => particle.remove());
      return;
    }
    // Create particle effect
    const particlesContainer = document.getElementById("particles-container");
    if (particlesContainer === null) return;

    const particleCount = 18;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    function createParticle() {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size =
        Math.random() > 0.5
          ? // Random size (small)
            Math.random() * 10 + 1
          : Math.random() > 0.8
          ? // random size (big)
            Math.random() * 10 + 20
          : // random size (very big)
            Math.random() * 10 + 70;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      if (size > 50) {
        particle.style.filter = `blur(${Number(size.toFixed(0)) * 1}px)`;
        particle.style.opacity = "0.7";
      } else if (size > 20) {
        particle.style.filter = `blur(${Number(size.toFixed(0)) * 0.5}px)`;
      } else {
        particle.style.filter = `blur(${Number(size.toFixed(0)) * 0.2}px)`;
      }

      // Initial position
      resetParticle(particle);

      particlesContainer.appendChild(particle);

      // Animate
      animateParticle(particle);
    }

    function resetParticle(particle) {
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = "0";

      return {
        x: posX,
        y: posY,
      };
    }

    function animateParticle(particle) {
      // Initial position
      const pos = resetParticle(particle);

      // Random animation properties
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      // Animate with GSAP-like timing
      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;

        // Move in a slight direction
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30; // Move upwards

        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        // Reset after animation completes
        setTimeout(() => {
          animateParticle(particle);
        }, duration * 1000);
      }, delay * 1000);
    }
  }, [bgEffectsOn]);

  if (!bgEffectsOn) {
    return (
      <div className="gradient-background">
        <div className="noise-overlay"></div>
        <div className="grid-overlay"></div>
        {theme === "dark" && (
          <>
            <div className="noise-overlay"></div>

            <div className="grid-overlay"></div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="gradient-background">
      {theme === "light" && <div className="white-overlay"></div>}
      <div className="spheres-container animate-appear">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
        <div className="glow"></div>
        <div className="glow-bottom"></div>
      </div>
      <div className="noise-overlay"></div>
      <div className="grid-overlay"></div>
      <div className="particles-container" id="particles-container"></div>
    </div>
  );
}
