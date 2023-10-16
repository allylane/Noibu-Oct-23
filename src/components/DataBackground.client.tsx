import React, { useEffect, useRef } from 'react';

const DataBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const numDots = 5000;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function createDot() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        maxOpacity: Math.random() * 0.5 + 0.2,
        opacityDirection: 1,
        currentOpacity: Math.random() * 0.5 + 0.2,
      };
    }

    const dots = Array.from({ length: numDots }, createDot);

    function animateDots() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        ctx!.fillStyle = `rgba(128, 128, 128, ${dot.currentOpacity})`;
        ctx!.beginPath();
        ctx!.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI);
        ctx!.fill();

        if (dot.currentOpacity >= dot.maxOpacity || dot.currentOpacity <= 0) {
          dot.opacityDirection *= -1;
        }
        
        dot.currentOpacity += dot.pulseSpeed * dot.opacityDirection;
      });

      requestAnimationFrame(animateDots);
    }

    animateDots();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };

  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }} />
  );
};

export default DataBackground;
