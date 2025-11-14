import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../../animations/itemVariants';
import { containerVariants } from '../../animations/containerVariants';

const PurposeSection = () => {
  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-violet-300 to-purple-300 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
          Mi propósito. Mi tecnología. Mi código: la unión que aporta valor.
        </motion.h2>
        <motion.div variants={itemVariants} className="text-lg mb-8 flex flex-col gap-3">
          <p>No construyo sitios web.</p>
          <p>Construyo puentes: entre el hormigón y el código,</p>
          <p>entre la planilla de Excel y la API, entre la idea y el resultado tangible. Este sitio es la prueba de que ambos mundos no solo pueden coexistir…</p>
          <p className="font-semibold">¡sino potenciarse mutuamente!</p>
        </motion.div>
        <motion.p variants={itemVariants} className="text-lg font-bold">
          Construir, paso a paso, con intención — No empecé con una plantilla. Empecé con una terminal, una decisión y una pila que refleja quién soy.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default PurposeSection;
