import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageCaptionProps {
    text: string;
}

const ImageCaption: React.FC<ImageCaptionProps> = ({ text }) => {
    return (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full px-4 z-20">
            <AnimatePresence mode="wait">
                <motion.p
                    key={text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg md:text-xl text-white/90 font-light tracking-wide bg-black/40 backdrop-blur-md py-2 px-6 rounded-full inline-block"
                >
                    {text}
                </motion.p>
            </AnimatePresence>
        </div>
    );
};

export default ImageCaption;
