import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DigitalBeam from '../shared/DigitalBeam';
import DecryptedText from '../shared/DecryptedText';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transformaciones de Salida (Efecto Card Retreat)
  // Se anima durante todo el scroll del contenedor extra (0 a 1)
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]); // Desaparece al final
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);

  // Transición de Fondo (Oscuro -> Claro)
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "radial-gradient(ellipse at center, #0a2818 0%, #000000 100%)",
      "radial-gradient(ellipse at center, #1a4830 0%, #334155 100%)"
    ]
  );

  return (
    // CONTENEDOR EXTERIOR: Altura extra para permitir scroll sin moverse (Sticky)
    <section ref={containerRef} className="relative h-[150vh] bg-slate-900" style={{ perspective: '1000px' }}>

      {/* TARJETA INTERIOR: Sticky para quedarse fija mientras se anima */}
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-start items-center text-center px-4 pt-20"
        style={{
          scale,
          rotateX,
          y,
          opacity,
          background,
          transformOrigin: "center bottom"
        }}
      >
        <div className="w-full flex flex-col items-center">
          {/* Viga Superior - I-Beam 3D */}
          <DigitalBeam />

          {/* Contenido Principal */}
          <div className="py-12 mt-8">
            <DecryptedText
              text="Ingenio Full-Stack"
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            />

            <motion.p
              className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Construyendo puentes entre la ingeniería civil y el desarrollo de software.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
