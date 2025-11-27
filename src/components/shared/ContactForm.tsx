import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulación de envío
        setTimeout(() => {
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });

            // Resetear estado después de unos segundos
            setTimeout(() => setStatus('idle'), 3000);
        }, 2000);
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-1 bg-gradient-to-b from-emerald-500/20 to-emerald-900/20 rounded-lg backdrop-blur-sm">
            <div className="bg-black/90 rounded-lg border border-emerald-500/30 p-6 md:p-8 font-mono shadow-[0_0_30px_rgba(16,185,129,0.1)]">

                {/* Header de Terminal */}
                <div className="flex items-center justify-between mb-8 border-b border-emerald-900/50 pb-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                    </div>
                    <div className="text-xs text-emerald-700">SECURE_CONNECTION_ESTABLISHED</div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Input Name */}
                    <div className="group">
                        <label className="block text-xs text-emerald-600 mb-1 group-focus-within:text-emerald-400 transition-colors">
                            &gt; INPUT_USER_ID
                        </label>
                        <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full bg-transparent border-b border-emerald-900 text-emerald-400 focus:border-emerald-500 focus:outline-none py-2 transition-colors placeholder-emerald-900/50"
                            placeholder="_"
                        />
                    </div>

                    {/* Input Email */}
                    <div className="group">
                        <label className="block text-xs text-emerald-600 mb-1 group-focus-within:text-emerald-400 transition-colors">
                            &gt; INPUT_COMM_CHANNEL
                        </label>
                        <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full bg-transparent border-b border-emerald-900 text-emerald-400 focus:border-emerald-500 focus:outline-none py-2 transition-colors placeholder-emerald-900/50"
                            placeholder="user@domain.sys"
                        />
                    </div>

                    {/* Textarea Message */}
                    <div className="group">
                        <label className="block text-xs text-emerald-600 mb-1 group-focus-within:text-emerald-400 transition-colors">
                            &gt; INPUT_DATA_PACKET
                        </label>
                        <textarea
                            required
                            rows={4}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full bg-transparent border-b border-emerald-900 text-emerald-400 focus:border-emerald-500 focus:outline-none py-2 transition-colors placeholder-emerald-900/50 resize-none"
                            placeholder="Enter transmission content..."
                        />
                    </div>

                    {/* Botón de Envío y Estado */}
                    <div className="pt-4 flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={status !== 'idle'}
                            className="relative px-6 py-2 bg-emerald-900/30 text-emerald-400 text-sm hover:bg-emerald-500/20 hover:text-emerald-300 transition-all border border-emerald-500/30 hover:border-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {status === 'idle' && '> EXECUTE_SEND'}
                                {status === 'sending' && 'TRANSMITTING...'}
                                {status === 'success' && 'SENT'}
                            </span>
                            {/* Efecto de escaneo al hacer hover */}
                            <div className="absolute inset-0 bg-emerald-500/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                        </button>

                        {/* Mensajes de Estado */}
                        <AnimatePresence mode='wait'>
                            {status === 'sending' && (
                                <motion.div
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="text-xs text-emerald-500 animate-pulse"
                                >
                                    [ENCRYPTING DATA...]
                                </motion.div>
                            )}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                                    className="text-xs text-emerald-400 font-bold"
                                >
                                    [TRANSMISSION COMPLETE]
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ContactForm;
