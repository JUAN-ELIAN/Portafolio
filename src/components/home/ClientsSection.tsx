import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { clients } from '../../data/clients';
import ClientTicker from '../shared/ClientTicker';

const ClientsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animación de Salida Global (Card Retreat)
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0.8, 1], [0, 15]);
  const y = useTransform(scrollYProgress, [0.8, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0.9]);
  const backgroundColor = useTransform(scrollYProgress, [0.8, 1], ["#0f172a", "#1e293b"]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-slate-900" style={{ perspective: '1000px' }}>

      {/* CONTENEDOR STICKY */}
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-start"
        style={{
          scale,
          rotateX,
          y,
          opacity,
          backgroundColor,
          transformOrigin: "center bottom"
        }}
      >
        {/* Título */}
        <div className="text-center mb-10 pt-32 relative z-20">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Confianza & Resultados
          </motion.h2>
          <p className="text-slate-400">Empresas que construyen el futuro con nosotros.</p>
        </div>

        {/* Tickers con direcciones opuestas */}
        <div className="flex flex-col gap-8 md:gap-12 mt-10">
          {/* Fila 1: Mueve a la izquierda */}
          <ClientTicker clients={clients} baseVelocity={-1} />

          {/* Fila 2: Mueve a la derecha */}
          <ClientTicker clients={clients} baseVelocity={1} />

          {/* Fila 3: Mueve a la izquierda (opcional, más rápido) */}
          <ClientTicker clients={clients} baseVelocity={-1.5} />
        </div>

      </motion.div>
    </section>
  );
};

export default ClientsSection;
