import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { civilProjects, CivilProject } from '../../data/civilProjects';
import StackingCard from '../shared/StackingCard';

// Componente Wrapper para cada tarjeta con su lógica de movimiento individual
const StackedProject = ({
  project,
  index,
  total,
  scrollYProgress
}: {
  project: CivilProject;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) => {
  // Lógica de Apilamiento Controlada
  // El primer proyecto (index 0) está fijo desde el principio.
  // Los siguientes entran progresivamente.

  // Definimos ventanas de tiempo para la entrada de cada tarjeta
  // Rango útil de scroll para stacking: 0 a 0.85 (el resto es salida)
  const stackingEnd = 0.85;
  const step = stackingEnd / (total - 1 || 1); // Evitar división por cero

  // Start y End para la animación de entrada de ESTA tarjeta
  // Tarjeta 0: Siempre visible (o fade in muy rápido)
  // Tarjeta 1: Entra entre 0 y step
  // Tarjeta 2: Entra entre step y 2*step
  const enterStart = Math.max(0, (index - 1) * step);
  const enterEnd = index * step;

  // Posición Y: Si es la primera, fija en topOffset. Si no, interpola desde abajo.
  const finalTopOffset = 10 + (index * 2); // Pequeño escalón (vh) para ver las cartas de atrás

  const y = useTransform(
    scrollYProgress,
    [enterStart, enterEnd],
    index === 0 ? [`${finalTopOffset}vh`, `${finalTopOffset}vh`] : ["120%", `${finalTopOffset}vh`]
  );

  // Escala: Las tarjetas de atrás se hacen un poco más pequeñas para dar profundidad
  // Cuando entra la siguiente (index + 1), la actual (index) se reduce
  const nextEnterStart = index * step;
  const nextEnterEnd = (index + 1) * step;

  const scale = useTransform(
    scrollYProgress,
    [nextEnterStart, nextEnterEnd],
    [1, 0.95] // Se reduce ligeramente cuando la siguiente la cubre
  );

  // Opacidad: La primera tarjeta ya está ahí. Las otras entran con opacidad.
  const opacity = useTransform(
    scrollYProgress,
    [enterStart, enterStart + 0.05], // Fade in rápido al inicio de su turno
    index === 0 ? [1, 1] : [0, 1]
  );

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 mx-auto w-full max-w-5xl"
      style={{
        y,
        scale: index === total - 1 ? 1 : scale,
        opacity,
        zIndex: index
      }}
    >
      <Link to="/projects" className="block">
        <div className="relative bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 h-[60vh] flex flex-col md:flex-row cursor-pointer hover:border-slate-600 transition-colors group">

          {/* Imagen */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-slate-900">
            <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-sm border-r border-slate-700">
              [PLANOS ESTRUCTURALES: {project.title.toUpperCase()}]
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full border border-orange-500/30">
                PROYECTO #{project.id.toString().padStart(3, '0')}
              </span>
              <div className="h-px flex-grow bg-slate-700"></div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {project.title}
            </h3>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-6 text-sm border-t border-slate-700 pt-6">
              <div>
                <p className="text-slate-500 mb-1">Ubicación</p>
                <p className="text-slate-200 font-medium">{project.details.location}</p>
              </div>
              <div>
                <p className="text-slate-500 mb-1">Material</p>
                <p className="text-slate-200 font-medium">{project.details.material}</p>
              </div>
              <div>
                <p className="text-slate-500 mb-1">Año</p>
                <p className="text-slate-200 font-medium">{project.details.year}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const CivilProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animación de Salida Global (85% - 100%)
  const scale = useTransform(scrollYProgress, [0.85, 1], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0.85, 1], [0, 15]);
  const y = useTransform(scrollYProgress, [0.85, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0.9]);
  const backgroundColor = useTransform(scrollYProgress, [0.85, 1], ["#0f172a", "#1e293b"]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-slate-900" style={{ perspective: '1000px' }}>

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
        {/* Encabezado Fijo y Seguro */}
        <div className="absolute top-0 left-0 w-full z-50 pt-32 pb-8 text-center bg-gradient-to-b from-black/80 to-transparent">
          <Link to="/projects" className="inline-block group">
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-xl cursor-pointer group-hover:text-orange-400 transition-colors select-text"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ingeniería Civil
            </motion.h2>
          </Link>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto drop-shadow-md select-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Cimentando el futuro con precisión estructural.
          </motion.p>
        </div>

        {/* Área de Proyectos (Desplazada hacia abajo para respetar el título) */}
        <div className="relative w-full h-full flex items-center justify-center mt-32 md:mt-40">
          {civilProjects.map((project, index) => (
            <StackedProject
              key={project.id}
              project={project}
              index={index}
              total={civilProjects.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default CivilProjectsSection;
