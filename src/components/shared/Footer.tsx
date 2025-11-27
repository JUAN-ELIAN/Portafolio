import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../data/socialLinks';

const Footer = () => {
  return (
    <footer className="relative w-full bg-black flex flex-col justify-center items-center text-center px-4 py-20">

      {/* Contenido del Footer */}
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          ¿Listo para empezar?
        </h2>

        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/30 mb-12"
        >
          Hablemos de tu proyecto
        </Link>

        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors text-lg font-medium"
            >
              {link.platform}
            </a>
          ))}
        </div>

        <div className="text-slate-600 text-sm font-mono border-t border-slate-800 pt-8 pb-10 w-full">
          <p>&copy; {new Date().getFullYear()} Ingenio Full-Stack. Todos los derechos reservados.</p>
          <p className="mt-2">Diseñado y Desarrollado con React + Framer Motion.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
