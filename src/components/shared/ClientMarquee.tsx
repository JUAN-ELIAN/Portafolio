import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { Client } from "../../data/clients";

// Función de utilidad para envolver valores dentro de un rango (wrap)
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ClientMarqueeProps {
    clients: Client[];
    baseVelocity?: number; // Velocidad base del movimiento
}

const ClientMarquee = ({ clients, baseVelocity = 5 }: ClientMarqueeProps) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    // Modulamos la velocidad base con la velocidad del scroll
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    // Envolvemos el valor de X para que sea cíclico (0% a -50% asumiendo duplicación)
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // Cambiar dirección según el scroll
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    // Duplicamos la lista varias veces para asegurar que cubra el ancho y permita el loop
    const displayClients = [...clients, ...clients, ...clients, ...clients];

    return (
        <div className="overflow-hidden flex flex-nowrap whitespace-nowrap py-8 mask-linear-fade">
            <motion.div className="flex flex-nowrap gap-16 items-center" style={{ x }}>
                {displayClients.map((client, idx) => (
                    <div
                        key={`${client.id}-${idx}`}
                        className="flex items-center justify-center"
                    >
                        {/* Diseño del "Logo" o Nombre del Cliente - TAMAÑO REDUCIDO AQUÍ */}
                        <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-400 to-slate-700 uppercase tracking-tighter hover:from-white hover:to-slate-400 transition-colors duration-300 cursor-default">
                            {client.name}
                        </span>
                        {/* Separador decorativo */}
                        <span className="ml-16 text-slate-800 text-3xl">•</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default ClientMarquee;
