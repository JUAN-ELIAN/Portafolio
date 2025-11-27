import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageCarrousel from '../shared/ImageCarrousel';
import PurposeContent from '../shared/PurposeContent';
import { purposeData } from '../../data/projects';

const PurposeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Configurar el scroll local
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 2. Mapeo de Índice (0 a 11)
  const [currentIndex, setCurrentIndex] = useState(0);
  const indexProgress = useTransform(scrollYProgress, [0, 1], [0, purposeData.length - 1]);

  useEffect(() => {
    const unsubscribe = indexProgress.on("change", (latest) => {
      const roundedIndex = Math.round(latest);
      if (roundedIndex !== currentIndex) {
        setCurrentIndex(roundedIndex);
      }
    });
    return () => unsubscribe();
  }, [indexProgress, currentIndex]);

  // 3. Animación de Salida 3D (Card Retreat)
  // Se activa en el último 20% del scroll (0.8 a 1.0)
  const cardY = useTransform(scrollYProgress, [0.8, 1], [0, 500]);
  const cardRotateX = useTransform(scrollYProgress, [0.8, 1], [0, 15]);
  const cardScale = useTransform(scrollYProgress, [0.8, 1], [1, 0.8]);
  const cardOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0.9]);
  const cardBackgroundColor = useTransform(scrollYProgress, [0.8, 1], ["#0f172a", "#334155"]); // slate-900 -> slate-700 (más claro)

  const currentItem = purposeData[currentIndex];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-slate-900" style={{ perspective: '1000px' }}>

      {/* Contenedor Sticky con Animación 3D */}
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
        style={{
          y: cardY,
          rotateX: cardRotateX,
          scale: cardScale,
          opacity: cardOpacity,
          backgroundColor: cardBackgroundColor,
          transformOrigin: "center bottom"
        }}
      >

        {/* Grid de 5 Columnas */}
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-5">

          {/* ZONA VERDE: Texto Estático + Dinámico (Cols 1-2) */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-start pt-20 md:pt-24 pl-8 md:pl-16 pr-0 z-10 relative">
            {/* Texto Estático */}
            <div className="flex flex-col gap-6 text-left mb-12">
              <Link to="/portfolio" className="block group">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 cursor-pointer group-hover:text-green-400 transition-colors select-text">
                  Mi propósito. <br />
                  <span className="text-green-500">Mi tecnología.</span> <br />
                  Mi código.
                </h2>
              </Link>
              <p className="text-lg text-gray-400 leading-relaxed">
                No construyo sitios web. Construyo puentes entre el hormigón y el código,
                entre la planilla de Excel y la API, entre la idea y el resultado tangible.
              </p>
              <p className="text-lg font-semibold text-white">
                ¡La unión que aporta valor!
              </p>
            </div>

            {/* Contenido Dinámico (Leyenda + Línea) */}
            <div className="mt-2">
              <PurposeContent currentIndex={currentIndex} />
            </div>
          </div>

          {/* ZONA ROJA: Imágenes (Cols 3-5) */}
          <div className="col-span-1 md:col-span-3 relative h-full border-l-4 border-b-4 border-gray-700 shadow-[-20px_20px_0px_0px_rgba(55,65,81,0.3)] p-12 md:p-24 ml-8 md:ml-12 flex items-center justify-center">
            {/* Carrusel de Imágenes (Swap Directo) */}
            <ImageCarrousel currentIndex={currentIndex} />
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default PurposeSection;
