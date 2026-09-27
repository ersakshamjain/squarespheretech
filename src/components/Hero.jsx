import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        mouse.targetX = (e.clientX - rect.left - width / 2) * 0.35;
        mouse.targetY = (e.clientY - rect.top - height / 2) * 0.35;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const numParticles = Math.min(Math.floor((width * height) / 11000), 75);
    const particles = [];
    const fov = 380;
    const colors = ['#12C2E9', '#2A4CF0', '#C471ED', '#38BDF8'];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.4,
        y: (Math.random() - 0.5) * height * 1.4,
        z: Math.random() * 800 + 100,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.7,
        baseRadius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let angleY = 0;
    let angleX = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      angleY += 0.0018;
      angleX = Math.sin(angleY * 0.7) * 0.12 + mouse.y * 0.0003;
      const rotY = angleY + mouse.x * 0.0003;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.y < -height) p.y = height;
        if (p.y > height) p.y = -height;
        if (p.z < 80) p.z = 800;
        if (p.z > 800) p.z = 80;

        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX + 500;

        if (z2 > 10) {
          const scale = fov / z2;
          const px = width / 2 + x1 * scale;
          const py = height / 2 + y2 * scale;
          const alpha = Math.min(Math.max(1 - (z2 - 200) / 850, 0.15), 0.85);

          projected.push({
            x: px,
            y: py,
            z: z2,
            radius: p.baseRadius * scale * 1.2,
            alpha: alpha,
            color: p.color
          });
        }
      }

      const maxDist = 125;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * Math.min(p1.alpha, p2.alpha) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(18, 194, 233, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.radius, 1.2), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        if (p.z < 420) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha * 0.22;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#030712] text-white hero-glow subtle-grid overflow-hidden">
      {/* 3D Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-75" />

      {/* Decorative stars */}
      <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-cyan-400 opacity-60 animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-purple-400 opacity-50"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-blue-400 opacity-40"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900/90 border border-gray-800 text-xs sm:text-sm text-gray-300 mb-8 backdrop-blur-md shadow-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="font-bold text-cyan-400 tracking-wide uppercase text-[11px]">SquareSphere</span>
          <span className="text-gray-400 font-medium">Global IT Partner For Growing Brands</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] font-heading">
          Your Business, Our Priority.<br className="hidden sm:inline" />
          <span className="text-gradient">We Engineer Digital Commerce That Scales</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-normal">
          From bespoke Shopify Plus &amp; Magento builds to high-speed web platforms — we engineer scalable digital experiences that convert visitors into compounding revenue.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-black font-bold text-base hover:bg-cyan-50 hover:text-blue-950 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,255,255,0.35)] active:translate-y-0 flex items-center justify-center gap-2 shadow-lg"
          >
            Start Your Project
            <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gray-900/70 border border-gray-700 text-white font-semibold text-base hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(18,194,233,0.2)] active:translate-y-0 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
