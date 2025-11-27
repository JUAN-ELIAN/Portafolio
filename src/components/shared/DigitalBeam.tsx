import React from 'react';
import { motion } from 'framer-motion';
import { digitalBeamVariants } from '../../animations/digitalBeamVariants';

const DigitalBeam = () => {
    // Definición de geometría con Alma Ajustada (85%)
    // Se ajustó el ancho del alma a 85% para coincidir exactamente con el borde interior de los trapezoides.

    const BeamShape = ({ isGlitch = false }: { isGlitch?: boolean }) => (
        <div className="flex flex-col items-center w-full filter drop-shadow-2xl">

            {/* 1. SUPERFICIE SUPERIOR (Trapezoide) */}
            <div
                className={`w-full h-4 bg-gradient-to-b from-gray-800 to-gray-600 border-t border-x border-gray-500/30 ${isGlitch ? 'bg-green-900 opacity-60' : ''}`}
                style={{ clipPath: 'polygon(7.5% 0, 92.5% 0, 100% 100%, 0% 100%)' }}
            />

            {/* 2. FRENTE ALA SUPERIOR (Rectángulo) */}
            <div className={`w-full h-3 bg-gradient-to-b from-gray-400 via-gray-200 to-gray-500 border border-gray-400 ${isGlitch ? 'bg-green-500 opacity-90' : ''}`} />

            {/* 3. ALMA / WEB (Rectángulo Ajustado) */}
            {/* Ajuste: w-[85%] para coincidir exactamente con el borde interior de los trapezoides (100% - 7.5%*2) */}
            <div className={`w-[85%] h-12 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 border-x border-gray-800 shadow-inner ${isGlitch ? 'bg-green-800 opacity-70' : ''}`} />

            {/* 4. SUPERFICIE SUPERIOR DEL ALA INFERIOR (Trapezoide) */}
            <div
                className={`w-full h-4 bg-gradient-to-b from-gray-700 to-gray-500 border-t border-x border-gray-500/30 ${isGlitch ? 'bg-green-900 opacity-60' : ''}`}
                style={{ clipPath: 'polygon(7.5% 0, 92.5% 0, 100% 100%, 0% 100%)' }}
            />

            {/* 5. FRENTE ALA INFERIOR (Rectángulo) */}
            <div className={`w-full h-3 bg-gradient-to-b from-gray-400 via-gray-200 to-gray-500 border border-gray-400 ${isGlitch ? 'bg-green-500 opacity-90' : ''}`} />

        </div>
    );

    return (
        <div className="relative w-full max-w-4xl mx-auto my-12">

            {/* CAPA 1: ESTRUCTURA DE ACERO (ALMA 85%) */}
            <BeamShape />

            {/* CAPA 2: MÁSCARA GLITCH (ENERGÍA) */}
            <motion.div
                className="absolute inset-0 overflow-hidden flex flex-col items-center w-full z-30"
                variants={digitalBeamVariants}
                initial="initial"
                animate="animate"
            >
                {/* Contenedor interno */}
                <div className="w-full min-w-[100%]">
                    <div className="relative w-full">
                        <BeamShape isGlitch={true} />
                        {/* Overlay de patrón Matrix/Ruido */}
                        <div
                            className="absolute inset-0 w-full h-full mix-blend-overlay opacity-60 pointer-events-none"
                            style={{
                                backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)',
                                backgroundSize: '4px 4px'
                            }}
                        />
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default DigitalBeam;
