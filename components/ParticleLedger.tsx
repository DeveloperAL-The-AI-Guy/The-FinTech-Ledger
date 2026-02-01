import React, { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 800; // Dense but performant
const TRAIL_LENGTH = 12;
const COLORS = {
  silver: 'rgba(192, 192, 192, 0.5)',
  blue: 'rgba(45, 107, 255, 0.6)',
  gold: 'rgba(212, 175, 55, 0.8)',
};

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  history: { x: number; y: number }[];
  color: string;
  size: number;
}

const ParticleLedger: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const rand = Math.random();
        let color = COLORS.silver;
        let size = Math.random() * 1.5 + 0.5;
        
        // 15% Blue, 5% Gold, 80% Silver
        if (rand > 0.95) {
          color = COLORS.gold;
          size = 2; // Gold nodes are larger
        } else if (rand > 0.80) {
          color = COLORS.blue;
        }

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5, // Fast speed
          vy: (Math.random() - 0.5) * 1.5,
          history: [],
          color,
          size,
        });
      }
    };

    const draw = () => {
      // Layer 1: Signal Noise & Void clearing (with slight trail effect)
      ctx.fillStyle = 'rgba(11, 11, 21, 0.2)'; // Low opacity clears for trail fade
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Update history
        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > TRAIL_LENGTH) {
          p.history.shift();
        }

        // Draw Trails (No connection lines between particles, only history)
        if (p.history.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.history[0].x, p.history[0].y);
          for (let i = 1; i < p.history.length; i++) {
            ctx.lineTo(p.history[i].x, p.history[i].y);
          }
          ctx.strokeStyle = p.color;
          // Fade alpha based on trail position is handled by overlay clearing mostly, 
          // but we can enforce lineWidth taper
          ctx.lineWidth = p.size * 0.5;
          ctx.stroke();
        }

        // Draw Head
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ pointerEvents: 'none' }}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-80"
    />
  );
};

export default ParticleLedger;