import React, { useRef } from 'react';
import { motion, useTransform, MotionValue, useSpring } from 'framer-motion';
import { Skill } from '../../data/skills';

interface SkillBadgeProps {
  skill: Skill;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const SkillBadge = ({ skill, mouseX, mouseY }: SkillBadgeProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Configuración de la física del imán
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };

  // Transformaciones para la atracción magnética
  const x = useSpring(useTransform(mouseX, (val) => {
    if (!ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(val - centerX, mouseY.get() - centerY);

    // Radio de atracción: 150px
    if (distance < 150) {
      return (val - centerX) * 0.3; // Fuerza de atracción (0.3 = 30% del movimiento del mouse)
    }
    return 0;
  }), springConfig);

  const y = useSpring(useTransform(mouseY, (val) => {
    if (!ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(mouseX.get() - centerX, val - centerY);

    if (distance < 150) {
      return (val - centerY) * 0.3;
    }
    return 0;
  }), springConfig);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className="relative group cursor-default"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 flex flex-col items-center justify-center gap-2 group-hover:border-emerald-500/50 group-hover:bg-slate-800 transition-colors duration-300 shadow-lg group-hover:shadow-emerald-500/20">
        <span className="text-3xl md:text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
          {skill.icon}
        </span>
        <span className="text-xs md:text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillBadge;
