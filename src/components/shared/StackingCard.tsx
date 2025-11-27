import React from 'react';
import { motion } from 'framer-motion';
import { CivilProject } from '../../data/civilProjects';

interface StackingCardProps {
    project: CivilProject;
    index: number;
    total: number;
}

const StackingCard = ({ project, index, total }: StackingCardProps) => {
    // Calcular el top offset para el efecto de apilamiento escalonado
    // Empezamos en 15vh y aumentamos un poco por cada tarjeta para que se vea el borde de la anterior
    const topOffset = 15 + (index * 5);

    return (
        <motion.div
            className="sticky w-full max-w-5xl mx-auto mb-20"
            style={{ top: `${topOffset}vh` }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-10%" }}
        >
            <div className="relative bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 h-[60vh] flex flex-col md:flex-row">

                {/* Imagen / Visualización */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-slate-900">
                    {/* Placeholder visual si no hay imagen real */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-sm border-r border-slate-700">
                        [PLANOS ESTRUCTURALES: {project.title.toUpperCase()}]
                    </div>
                    {/* Aquí iría la imagen real: <img src={project.imageUrl} ... /> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                </div>

                {/* Información Técnica */}
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
                            <p className="text-slate-500 mb-1">Material Principal</p>
                            <p className="text-slate-200 font-medium">{project.details.material}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Año</p>
                            <p className="text-slate-200 font-medium">{project.details.year}</p>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default StackingCard;
