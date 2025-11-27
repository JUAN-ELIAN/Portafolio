import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SpiralBackground = () => {
    const { scrollYProgress } = useScroll();

    // Transformaciones basadas en scroll
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.5, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]); // 2 rotaciones completas
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.08, 0.15, 0.15, 0.08]);

    // Generar path de espiral de Fibonacci
    const generateFibonacciSpiral = () => {
        const points: string[] = [];
        const center = 500; // Centro del SVG
        let angle = 0;
        const goldenRatio = 1.618033988749895;

        // Generar puntos de la espiral
        for (let i = 0; i < 500; i++) {
            const radius = Math.pow(goldenRatio, i / 50); // Crecimiento exponencial
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);

            if (i === 0) {
                points.push(`M ${x} ${y}`);
            } else {
                points.push(`L ${x} ${y}`);
            }

            angle += 0.1; // Incremento del ángulo
        }

        return points.join(' ');
    };

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    scale,
                    rotate,
                    opacity
                }}
            >
                <svg
                    width="1000"
                    height="1000"
                    viewBox="0 0 1000 1000"
                    className="w-full h-full"
                    style={{ filter: 'blur(1px)' }}
                >
                    {/* Espiral de Fibonacci */}
                    <path
                        d={generateFibonacciSpiral()}
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.6"
                    />

                    {/* Espiral secundaria (efecto de profundidad) */}
                    <path
                        d={generateFibonacciSpiral()}
                        stroke="white"
                        strokeWidth="1"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.3"
                        transform="scale(0.8) translate(100, 100)"
                    />
                </svg>
            </motion.div>
        </div>
    );
};

export default SpiralBackground;
