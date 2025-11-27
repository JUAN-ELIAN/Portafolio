import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTransition } from '../animations/pageTransitions';
import { softwareProjects } from '../data/softwareProjects';
import { civilProjects } from '../data/civilProjects';

const PortfolioPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="bg-slate-900 min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Portafolio de Proyectos
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Explora mi trabajo en desarrollo de software e ingeniería civil.
          </motion.p>
        </div>
      </section>

      {/* Software Projects Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proyectos de Software
            </h2>
            <p className="text-gray-400 text-lg">
              Innovación digital y arquitecturas escalables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Image Area */}
                <div className="relative h-64 bg-black overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${project.dominantColor}, transparent 70%)` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-xs">
                    &lt;CODE_PREVIEW: {project.title.replace(/\s+/g, '_').toUpperCase()} /&gt;
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-slate-500">ID: {project.id}</span>
                    <div className="h-px flex-grow bg-slate-700"></div>
                    <span
                      className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded text-slate-900"
                      style={{ backgroundColor: project.dominantColor }}
                    >
                      DEV
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-slate-500 text-xs">
                        +{project.technologies.length - 4} más
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-slate-700">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        GitHub
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-white hover:text-green-400 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Civil Projects Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proyectos de Ingeniería Civil
            </h2>
            <p className="text-gray-400 text-lg">
              Cimentando el futuro con precisión estructural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {civilProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Image Area */}
                <div className="relative h-64 bg-slate-900 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-sm">
                    [PLANOS ESTRUCTURALES: {project.title.toUpperCase()}]
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full border border-orange-500/30">
                      PROYECTO #{project.id.toString().padStart(3, '0')}
                    </span>
                    <div className="h-px flex-grow bg-slate-700"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm border-t border-slate-700 pt-4">
                    <div>
                      <p className="text-slate-500 mb-1">Ubicación</p>
                      <p className="text-slate-200 font-medium">{project.details.location}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 mb-1">Material</p>
                      <p className="text-slate-200 font-medium">{project.details.material}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 mb-1">Año</p>
                      <p className="text-slate-200 font-medium">{project.details.year}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Trabajemos juntos en tu próximo proyecto.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-green-500/50"
          >
            Hablemos de tu proyecto
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default PortfolioPage;
