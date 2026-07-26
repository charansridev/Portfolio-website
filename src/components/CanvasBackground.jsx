import { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = -1000;
    let mouseY = -1000;

    const DOT_SPACING = 15;
    const DOT_SIZE = 1.5;
    const RADIUS = 150;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    resize();

    let animationId;
    const draw = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      const cols = Math.ceil(width / DOT_SPACING);
      const rows = Math.ceil(height / DOT_SPACING);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * DOT_SPACING;
          const y = j * DOT_SPACING;

          const dx = mouseX - x;
          const dy = mouseY - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let opacity = 0.1;
          if (distance < RADIUS) {
            // Smooth radial falloff calculation
            const ratio = 1 - (distance / RADIUS);
            opacity = 0.1 + (0.9 * ratio);
          }

          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, DOT_SIZE / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
}
