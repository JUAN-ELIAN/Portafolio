import React from 'react';
import { motion } from 'framer-motion';

interface SpotlightProps {
  color?: string;
  size?: number;
  position?: { x: number; y: number };
}

const Spotlight: React.FC<SpotlightProps> = ({
  color = '#ffffff',
  size = 300,
  position = { x: 0, y: 0 },
}) => {
  return (
    <motion.div
      className="absolute rounded-full filter blur-2xl opacity-50"
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        width: size,
        height: size,
        left: position.x,
        top: position.y,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
};

export default Spotlight;
