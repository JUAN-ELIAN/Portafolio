import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingContactButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            // Obtener las posiciones de las secciones
            const servicesSection = document.querySelector('#services-section');
            const skillsSection = document.querySelector('#skills-section');

            if (servicesSection && skillsSection) {
                const servicesTop = servicesSection.getBoundingClientRect().top + window.scrollY;
                const skillsBottom = skillsSection.getBoundingClientRect().bottom + window.scrollY;
                const currentScroll = window.scrollY + window.innerHeight / 2;

                // Mostrar el botón si estamos entre ServicesSection y SkillsSection
                setIsVisible(currentScroll >= servicesTop && currentScroll <= skillsBottom);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Verificar al montar

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-40"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
                pointerEvents: isVisible ? 'auto' : 'none'
            }}
            transition={{ duration: 0.3 }}
        >
            <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full transition-all transform hover:scale-110 shadow-xl hover:shadow-emerald-500/50 text-sm"
            >
                Escríbenos
            </Link>
        </motion.div>
    );
};

export default FloatingContactButton;
