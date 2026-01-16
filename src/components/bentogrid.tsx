"use client"
import Image from "next/image";
import AmazonLogo from "../assets/images/logo-amazon.png";
import AppleLogo from "../assets/images/logo-apple.png";
import WiseLogo from "../assets/images/logo-wise.png";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";

// Replace these with your own partner logos.
const logos = [
  {
    src: AmazonLogo,
    alt: "Amazon logo",
  },
  {
    src: AppleLogo,
    alt: "Apple logo",
  },
  {
    src: WiseLogo,
    alt: "Wise logo",
  },
];

// Adjust the beam size if you want thicker or longer connectors.
const lineWidth = 80; 
const lineHeight = 2; 

const LogoBeam = () => {
  return (
    <div className="flex items-center justify-center min-h-52">
      <div className="relative flex items-center">
        <div className="bg-(--surface) border border-white/20 rounded-2xl flex items-center justify-center w-14 h-14 p-4">
          <Image src={logos[0].src} alt={logos[0].alt} width={24} height={24} sizes="24px" className="filter invert brightness-0" />
        </div>
        <div className="relative" style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, backgroundColor: 'rgba(255,255,255,0.5)', overflow: 'hidden' }}>
          <motion.div
            className="absolute top-0 left-0 h-full w-10 bg-linear-to-r from-transparent via-(--brand-3) to-transparent opacity-75"
            initial={{ x: '-40px' }}
            animate={{ x: `calc(${lineWidth}px + 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 2.5,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative bg-(--surface) border border-white/40 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_rgba(20,184,166,0.3)]">
          <Image src={logos[1].src} alt={logos[1].alt} width={32} height={32} sizes="32px" className="filter invert brightness-0" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative" style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, backgroundColor: 'rgba(255,255,255,0.5)', overflow: 'hidden' }}>
          <motion.div
            className="absolute top-0 right-0 h-full w-10 bg-linear-to-r from-transparent via-(--brand-3) to-transparent opacity-75"
            initial={{ x: '40px' }}
            animate={{ x: `calc(-${lineWidth}px - 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 3.5,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="bg-(--surface) border border-white/20 rounded-2xl flex items-center justify-center w-14 h-14 p-4">
          <Image src={logos[2].src} alt={logos[2].alt} width={24} height={24} sizes="24px" className="filter invert brightness-0" />
        </div>
      </div>
    </div>
  );
};

// Replace this data to change the chart shape.
const data = [50, 40, 300, 320, 500, 350, 200, 230, 500];
const maxData = Math.max(...data);
const chartHeight = 400;
const chartWidth = 800;

// Card wrapper with the glow effect - tweak the colors here if needed.
const CardWithEffect = ({ children }: { children: ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative bg-(--surface) flex-1 rounded-xl border border-white/20 p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: 'transform' }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: '300px',
            height: '300px',
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: 'var(--brand-1)',
            filter: 'blur(100px)',
            transform: 'translate(-0%, -0%)',
            zIndex: 10, // Ensure the effect is on top
            willChange: 'transform, top, left',
          }}
        />
      )}
      {children}
    </div>
  );
};

const AWSIcon = () => {
  return (
    <div className="flex flex-col justify-center h-full items-center relative">
         <div className="flex flex-row gap-8 justify-center h-full items-center relative">
         <div className="relative bg-(--surface) border border-white/40 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_rgba(20,184,166,0.3)]">
          <Image src={logos[0].src} alt={logos[0].alt} width={32} height={32} sizes="32px" className="filter invert brightness-0" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative bg-(--surface) border border-white/40 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_rgba(20,184,166,0.3)]">
          <Image src={logos[1].src} alt={logos[1].alt} width={32} height={32} sizes="32px" className="filter invert brightness-0" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative bg-(--surface) border border-white/40 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_rgba(20,184,166,0.3)]">
          <Image src={logos[2].src} alt={logos[2].alt} width={32} height={32} sizes="32px" className="filter invert brightness-0" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        </div>

      
      <div className="text-left p-6 mt-4">
        {/* Pillar card title + copy. */}
        <h3 className="text-white text-2xl font-bold mb-2">Pillar: Focus</h3>
        <p className="text-white/70 text-lg">Design that protects deep work and clear priorities.</p>
      </div>
    </div>
  );
};

const BentoBox1 = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    const chartElement = chartRef.current;
    if (!chartElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsChartVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(chartElement);

    return () => {
      observer.unobserve(chartElement);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-180 p-5 rounded-lg sm:py-24 bg-(--ink)">
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl min-h-200 md:min-h-200 md:h-200">
        <CardWithEffect>
          <div className="flex flex-col justify-between h-full">
            <div className="mb-4 px-6 mt-6">
              <div className="flex justify-between items-center mb-6 pb-2">
                {/* Chart title goes here. */}
                <h3 className="text-white/70 text-xl">Long-term signal</h3>
                <div className="flex items-center">
                  <div className="h-1 bg-white/20 w-8 rounded-lg"></div>
                  <span className="ml-2 text-white/70 text-sm">Quality</span>
                </div>
              </div>
              <div ref={chartRef} className="relative w-full mt-12" style={{ height: chartHeight }}>
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full pl-11">
                  <defs>
                    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--brand-1)" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  <polyline
                    fill="url(#gradient)"
                    stroke="none"
                    points={`${(0 / (data.length - 1)) * chartWidth},${chartHeight} ${data
                      .map(
                        (value, index) =>
                          `${(index / (data.length - 1)) * chartWidth},${chartHeight - (value / maxData) * chartHeight}`
                      )
                      .join(' ')} ${(data.length - 1) * (chartWidth / (data.length - 1))},${chartHeight}`}
                  />
                  <motion.polyline
                    fill="none"
                    stroke="var(--brand-1)"
                    strokeWidth="3"
                    className=""
                    points={data
                      .map(
                        (value, index) =>
                          `${(index / (data.length - 1)) * chartWidth},${chartHeight - (value / maxData) * chartHeight}`
                      )
                      .join(' ')}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isChartVisible ? 1 : 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                  />
                </svg>
                <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
                  {Array.from(Array(7).keys()).map((i) => (
                    <div
                      key={i}
                      className="absolute left-0 w-full flex items-center text-white/30 text-sm"
                      style={{ top: `${(100 / 6) * i}%` }}
                    >
                      <span className="mr-4">{`${10 + i * 10}%`}</span>
                      <div className="w-full border-t border-white/70"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-left p-6 mt-4">
              <h3 className="text-white text-2xl font-bold mb-2">Pillar: Craft</h3>
              <p className="text-white/70 text-lg">We ship deliberately and refine with care.</p>
            </div>
          </div>
        </CardWithEffect>
        <div className="flex flex-col w-full md:w-1/2 gap-5 h-full md:h-200">
          <CardWithEffect>
            <div className="flex flex-col justify-center h-full">
              <LogoBeam />
              <div className="text-left p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Pillar: Clarity</h3>
                <p className="text-white/70 text-lg">Shared understanding without the noise.</p>
              </div>
            </div>
          </CardWithEffect>
          <CardWithEffect>
            <AWSIcon />
          </CardWithEffect>
        </div>
      </div>
    </div>
  );
};


function BentoDemo() {
  return (
    <div className="flex w-full items-center justify-center">
      {/* This whole block is your "about/product highlights" grid. */}
      <BentoBox1 />
    </div>
  );
}

export default BentoDemo;
          
