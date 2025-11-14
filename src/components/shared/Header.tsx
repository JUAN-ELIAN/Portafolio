import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FcEngineering } from "react-icons/fc";
import useResponsive from '../../hooks/useResponsive';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const isMobile = useResponsive();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-gray-800 text-white p-6 sticky top-0 z-30">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <FcEngineering className="h-8 w-8 mr-2" />
            <h1 className="text-xl font-bold">Ingenio Full-Stack</h1>
          </div>

          {/* Lógica de navegación actualizada */}
          <div className="flex items-center space-x-4">
            {isMobile ? (
              <button onClick={toggleMenu} className="text-2xl">
                <FiMenu />
              </button>
            ) : (
              <>
                <nav className="flex space-x-2">
                  <Link to="/" className="py-2 px-4 rounded-md transition-colors hover:bg-gray-700">Inicio</Link>
                  <Link to="/portfolio" className="py-2 px-4 rounded-md transition-colors hover:bg-gray-700">Portafolio</Link>
                  <Link to="/contact" className="py-2 px-4 rounded-md transition-colors hover:bg-gray-700">Contacto</Link>
                </nav>
                <button onClick={toggleMenu} className="text-2xl p-2 rounded-md hover:bg-gray-700">
                  <FiMenu />
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && ( // El menú ahora se puede abrir en cualquier tamaño de pantalla
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-gray-900/80 backdrop-blur-lg p-6 shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-8">
                <button onClick={toggleMenu} className="text-2xl text-white">
                  <FiX />
                </button>
              </div>
              <nav className="flex flex-col space-y-5">
                {/* Lógica de enlaces condicional */}
                {isMobile ? (
                  <>
                    <Link to="/" onClick={toggleMenu} className="hover:text-blue-400 text-white text-lg">Inicio</Link>
                    <Link to="/portfolio" onClick={toggleMenu} className="hover:text-blue-400 text-white text-lg">Portafolio</Link>
                    <Link to="/contact" onClick={toggleMenu} className="hover:text-blue-400 text-white text-lg">Contacto</Link>
                    <hr className="my-3 border-gray-700" />
                    <Link to="/services" onClick={toggleMenu} className="hover:text-blue-400 text-white text-lg">Servicios</Link>
                    <Link to="/projects" onClick={toggleMenu} className="hover:text-blue-400 text-white text-lg">Proyectos</Link>
                  </>
                ) : (
                  <>
                    <Link to="/services" onClick={toggleMenu} className="hover:text-blue-400 text-white text-lg">Servicios</Link>
                    <Link to="/projects" onClick={toggleMenu} className="hover:text-blue-400 text-white text-lg">Proyectos</Link>
                  </>
                )}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
