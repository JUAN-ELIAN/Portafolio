import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectionVariants } from '../../animations/itemVariants';

interface DecryptedTextProps {
    text: string;
    className?: string;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

const DecryptedText: React.FC<DecryptedTextProps> = ({ text, className = '' }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join('')
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3; // Velocidad de desencriptado
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <motion.h1
            className={className}
            variants={projectionVariants}
            initial="initial"
            animate="animate"
        >
            {displayText}
        </motion.h1>
    );
};

export default DecryptedText;
