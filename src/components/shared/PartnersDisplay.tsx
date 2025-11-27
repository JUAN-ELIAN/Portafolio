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

interface PartnersDisplayProps {
    clients: Client[];
    baseVelocity?: number;
}

const PartnersDisplay = ({ clients, baseVelocity = 5 }: PartnersDisplayProps) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    const displayClients = [...clients, ...clients, ...clients, ...clients];

    return (
        <div className="overflow-hidden flex flex-nowrap whitespace-nowrap py-8 w-full">
            <motion.ul className="flex flex-nowrap gap-16 items-center list-none m-0 p-0" style={{ x }}>
                {displayClients.map((client, idx) => (
                    <li
                        key={`${client.id}-${idx}`}
                        className="flex items-center justify-center"
                    >
                        <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-400 to-slate-700 uppercase tracking-tighter hover:from-white hover:to-slate-400 transition-colors duration-300 cursor-default">
                            {client.name}
                        </span>
                        <span className="ml-16 text-slate-800 text-3xl" aria-hidden="true">•</span>
                    </li>
                ))}
            </motion.ul>
        </div>
    );
};

export default PartnersDisplay;
