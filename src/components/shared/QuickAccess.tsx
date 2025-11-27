import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const QuickAccess = () => {
    const { scrollYProgress } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.1) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-8 right-8 z-50"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <Link
                        to="/contact"
                        className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors group relative"
                        aria-label="Contactar"
                    >
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>

                        {/* Tooltip */}
                        <span className="absolute right-full mr-4 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Contáctame
                        </span>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default QuickAccess;
