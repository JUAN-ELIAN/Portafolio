import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServiceArea } from '../../data/services';

interface ServiceCardProps {
  service: ServiceArea;
  linkTo?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, linkTo }) => {
  const CardContent = (
    <motion.div
      className="w-[80vw] md:w-[30vw] h-[45vh] bg-slate-800 rounded-2xl p-8 flex flex-col justify-center items-start relative overflow-hidden border border-slate-700 shadow-xl cursor-pointer"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
        borderColor: "rgba(34, 197, 94, 0.5)"
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Contenido Principal */}
      <div className="z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {service.title}
        </h3>
        <p className="text-gray-400 text-lg mb-8">
          {service.description}
        </p>
      </div>

      {/* Contenedor de Sub-servicios (Revelación) */}
      <motion.div
        className="w-full flex flex-col gap-4"
        initial={{ height: 0, opacity: 0 }}
        whileHover={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {service.subServices.map((sub, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3"
            initial={{ x: -20, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <div>
              <h4 className="text-white font-semibold">{sub.name}</h4>
              <p className="text-sm text-gray-500">{sub.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Fondo Decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/40 pointer-events-none" />
    </motion.div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{CardContent}</Link>;
  }

  return CardContent;
};

export default ServiceCard;
