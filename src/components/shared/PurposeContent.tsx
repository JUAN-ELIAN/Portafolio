import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { purposeData } from '../../data/projects';

interface PurposeContentProps {
    currentIndex: number;
}

const PurposeContent: React.FC<PurposeContentProps> = ({ currentIndex }) => {
    const safeIndex = Math.max(0, Math.min(currentIndex, purposeData.length - 1));
    const currentItem = purposeData[safeIndex];

    return (
        <div className="flex flex-col justify-center h-full text-left pr-0">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentItem.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full"
                >
                    {/* Wrapper de texto con padding derecho para que no toque la imagen */}
                    <div className="pr-8 md:pr-16">
                        <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            {currentItem.title}
                        </h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4">
                            {currentItem.description}
                        </p>

                        {/* Indicador de progreso numérico */}
                        <div className="mt-2 text-sm font-mono text-gray-500">
                            {String(currentItem.id).padStart(2, '0')} / {purposeData.length}
                        </div>
                    </div>

                    {/* Línea Conectora Verde (Extendida para tocar la imagen) */}
                    <div className="w-[120%] h-[2px] bg-green-500 mt-4 relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]" />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default PurposeContent;
