import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface AmbientParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const createSpherePoints = (count: number, radius: number): Point3D[] => {
  const points: Point3D[] = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;

  for (let i = 0; i < count; i++) {
    const theta = (2 * Math.PI * i) / goldenRatio;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    points.push({
      x: radius * Math.cos(theta) * Math.sin(phi),
      y: radius * Math.sin(theta) * Math.sin(phi),
      z: radius * Math.cos(phi),
    });
  }

  return points;
};

const DatasphereParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useMousePosition();
  const mouseRef = useRef(mouse);

  useEffect(() => {
    mouseRef.current = mouse;
  }, [mouse]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;

    const spherePoints = createSpherePoints(72, 1);
    const connectionThreshold = 0.38;
    const ambientCount = 40;
    const ambient: AmbientParticle[] = Array.from({ length: ambientCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00008,
      vy: (Math.random() - 0.5) * 0.00008,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.35 + 0.15,
    }));

    let rotationX = 0;
    let rotationY = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener("resize", resize);

    const project = (
      point: Point3D,
      cx: number,
      cy: number,
      radius: number,
      rotX: number,
      rotY: number,
      parallaxX: number,
      parallaxY: number,
    ) => {
      let { x, y, z } = point;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      const fov = 2.8;
      const scale = fov / (fov + z2);

      return {
        x: cx + x1 * radius * scale + parallaxX * 30,
        y: cy + y2 * radius * scale + parallaxY * 30,
        z: z2,
        scale,
      };
    };

    const draw = (time: number) => {
      if (prefersReducedMotion) {
        ctx.clearRect(0, 0, width, height);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x / width - 0.5;
      const my = mouseRef.current.y / height - 0.5;

      rotationY += 0.0012;
      rotationX += 0.0006;

      const spheres = [
        { cx: width * 0.72, cy: height * 0.38, radius: Math.min(width, height) * 0.22, rotOffset: 0 },
        { cx: width * 0.18, cy: height * 0.72, radius: Math.min(width, height) * 0.1, rotOffset: Math.PI },
      ];

      spheres.forEach((sphere) => {
        const projected = spherePoints.map((p) =>
          project(
            p,
            sphere.cx,
            sphere.cy,
            sphere.radius,
            rotationX + sphere.rotOffset * 0.2,
            rotationY + sphere.rotOffset,
            mx,
            my,
          ),
        );

        for (let i = 0; i < spherePoints.length; i++) {
          for (let j = i + 1; j < spherePoints.length; j++) {
            const dx = spherePoints[i].x - spherePoints[j].x;
            const dy = spherePoints[i].y - spherePoints[j].y;
            const dz = spherePoints[i].z - spherePoints[j].z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < connectionThreshold) {
              const a = projected[i];
              const b = projected[j];
              const depth = (a.z + b.z) / 2;
              const alpha = Math.max(0, (1 - dist / connectionThreshold) * (0.12 + (depth + 1) * 0.08));

              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(178, 34, 34, ${alpha})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }

        projected.forEach((p) => {
          const depthAlpha = 0.25 + (p.z + 1) * 0.35;
          const glow = p.scale * 2.2;

          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glow * 3);
          gradient.addColorStop(0, `rgba(198, 40, 40, ${depthAlpha * 0.5})`);
          gradient.addColorStop(0.4, `rgba(139, 0, 0, ${depthAlpha * 0.2})`);
          gradient.addColorStop(1, "rgba(139, 0, 0, 0)");

          ctx.beginPath();
          ctx.arc(p.x, p.y, glow * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, glow, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245, 245, 245, ${depthAlpha * 0.7})`;
          ctx.fill();
        });

        ctx.beginPath();
        ctx.arc(sphere.cx, sphere.cy, sphere.radius * 0.15, 0, Math.PI * 2);
        const coreGlow = ctx.createRadialGradient(
          sphere.cx,
          sphere.cy,
          0,
          sphere.cx,
          sphere.cy,
          sphere.radius * 0.5,
        );
        coreGlow.addColorStop(0, "rgba(139, 0, 0, 0.12)");
        coreGlow.addColorStop(1, "rgba(139, 0, 0, 0)");
        ctx.fillStyle = coreGlow;
        ctx.fill();
      });

      ambient.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        const px = p.x * width + mx * 20;
        const py = p.y * height + my * 20;
        const pulse = 0.5 + Math.sin(time * 0.001 + p.x * 10) * 0.5;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(178, 34, 34, ${p.opacity * pulse})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
};

export default DatasphereParticles;
