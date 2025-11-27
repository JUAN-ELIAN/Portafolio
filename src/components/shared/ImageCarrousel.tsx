import React from 'react';
import { purposeData } from '../../data/projects';

interface ImageCarrouselProps {
    currentIndex: number;
}

const ImageCarrousel: React.FC<ImageCarrouselProps> = ({ currentIndex }) => {
    // Asegurar que el índice esté dentro de los límites
    const safeIndex = Math.max(0, Math.min(currentIndex, purposeData.length - 1));
    const currentImage = purposeData[safeIndex];

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl bg-transparent">
            {/* Swap Directo: Sin AnimatePresence ni transiciones de opacidad */}
            <img
                src={currentImage.imageUrl}
                alt={currentImage.title}
                className="absolute inset-0 w-full h-full object-contain mix-blend-screen opacity-90"
            />

            {/* Overlay decorativo sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
    );
};

export default ImageCarrousel;
