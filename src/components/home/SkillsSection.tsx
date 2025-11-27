import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { skills } from '../../data/skills';
import SkillBadge from '../shared/SkillBadge';

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animación de Salida Global (Card Retreat)
  // Esta sección debe "levantarse" o retirarse para revelar el footer
  const scale = useTransform(scrollYProgress, [0.85, 1], [1, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0.85, 1], [0, 10]);
  const y = useTransform(scrollYProgress, [0.85, 1], [0, -100]); // Se mueve un poco hacia arriba
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0.9]);
  const borderRadius = useTransform(scrollYProgress, [0.9, 1], ["0px", "40px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Obtenemos las coordenadas relativas a la ventana para simplificar
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    // IMPORTANTE: mb-[50vh] o similar para dejar espacio al Footer fijo que está debajo
    // z-10 para estar POR ENCIMA del footer
    <section
      id="skills-section"
      ref={containerRef}
      className="relative z-10 bg-slate-900"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
    >

      {/* CONTENEDOR STICKY */}
      <motion.div
        className="sticky top-0 min-h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-slate-900 shadow-2xl"
        style={{
          scale,
          rotateX,
          y,
          opacity,
          borderRadius,
          transformOrigin: "center bottom"
        }}
      >
        {/* Título */}
        <div className="text-center mb-16 pt-20">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Arsenal Tecnológico
          </motion.h2>
          <p className="text-slate-400">Herramientas de precisión para la era digital.</p>
        </div>

        {/* Grilla Magnética */}
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 place-items-center pb-20">
            {skills.map((skill) => (
              <SkillBadge
                key={skill.id}
                skill={skill}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default SkillsSection;