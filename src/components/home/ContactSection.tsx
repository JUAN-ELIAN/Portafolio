import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../shared/ContactForm';
import { socialLinks } from '../../data/socialLinks';

const ContactSection = () => {
    return (
        <section id="contact" className="relative min-h-screen bg-black flex flex-col justify-center items-center py-20 overflow-hidden">

            {/* Fondo con efecto de rejilla sutil */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Luz ambiental */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-3 py-1 border border-emerald-500/30 rounded-full bg-emerald-900/10 text-emerald-400 text-xs font-mono tracking-widest"
                    >
                        SYSTEM_STATUS: ONLINE
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Inicializar <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Contacto</span>
                    </motion.h2>

                    <motion.p
                        className="text-slate-400 max-w-xl mx-auto text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        ¿Tienes un proyecto en mente? Establezcamos un enlace de comunicación seguro.
                    </motion.p>
                </div>

                {/* Formulario */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mb-24"
                >
                    <ContactForm />
                </motion.div>

                {/* Footer / Redes Sociales */}
                <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Logo / Copyright */}
                    <div className="text-slate-500 text-sm font-mono">
                        <p>&copy; 2025 INGENIO_FULL_STACK. SYS_VER_2.0</p>
                    </div>

                    {/* Enlaces Sociales */}
                    <div className="flex gap-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium flex items-center gap-2 group"
                            >
                                <span className="w-2 h-2 bg-slate-600 rounded-full group-hover:bg-emerald-400 transition-colors" />
                                {link.platform}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
