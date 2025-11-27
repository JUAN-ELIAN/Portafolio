import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { servicesData } from '../../data/services';
import ServiceCard from '../shared/ServiceCard';

interface ServicesSectionProps {
  staticMode?: boolean;
  disableExitAnimation?: boolean;
}

const ServicesSection = ({ staticMode = false, disableExitAnimation = false }: ServicesSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 0.8], staticMode ? ["0%", "0%"] : ["0%", "-66%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0.8, 1], [0, 15]);
  const y = useTransform(scrollYProgress, [0.8, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0.9]);
  const backgroundColor = useTransform(scrollYProgress, [0.8, 1], ["#0f172a", "#334155"]);
  const borderRadius = useTransform(scrollYProgress, [0.8, 1], ["0px", "40px"]);

  return (
    <section
      id="services-section"
      ref={containerRef}
      className={`relative bg-slate-900 ${disableExitAnimation ? 'min-h-screen' : 'h-[300vh]'}`}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-start shadow-2xl"
        style={{
          scale: disableExitAnimation ? 1 : scale,
          rotateX: disableExitAnimation ? 0 : rotateX,
          y: disableExitAnimation ? 0 : y,
          opacity: disableExitAnimation ? 1 : opacity,
          backgroundColor: disableExitAnimation ? "#0f172a" : backgroundColor,
          borderRadius: disableExitAnimation ? "0px" : borderRadius,
          transformOrigin: "center bottom"
        }}
      >
        <div className="absolute top-0 left-0 w-full z-50 pt-40 pb-8 text-center bg-gradient-to-b from-black/60 to-transparent">
          <Link to="/services" className="inline-block group">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-2 cursor-pointer group-hover:text-green-400 transition-colors select-text">Servicios</h2>
          </Link>
          <p className="text-gray-400 mb-6 select-text">{staticMode ? 'Nuestras áreas de expertise' : 'Desliza para explorar'}</p>

          {!staticMode && (
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden max-w-md mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                style={{ width: progressWidth }}
              />
            </div>
          )}
        </div>

        <motion.div
          className={`flex ${staticMode ? 'justify-center items-center gap-8 px-8 pt-64' : 'justify-center items-center gap-8 px-8 pt-64'}`}
          style={{ x: staticMode ? 0 : x }}
        >
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              linkTo={staticMode ? "/services" : undefined}
            />
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ServicesSection;
