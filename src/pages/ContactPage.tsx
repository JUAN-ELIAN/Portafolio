import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/pageTransitions';

// Interfaz para los datos del formulario
interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  // Handler para el envío del formulario
  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    // Aquí se implementaría la lógica de envío (ej: a una API o servicio de email)
    alert('Gracias por tu mensaje. ¡Te contactaré pronto!');
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="container mx-auto px-4 py-20 text-center"
    >
      <h1 className="text-4xl font-bold mb-4">Contacto</h1>
      <p className="text-lg text-gray-600 mb-12">¿Tienes una idea o un proyecto en mente? Hablemos.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto text-left">
        {/* Campo de Nombre */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
          <input
            {...register('name', { required: 'El nombre es obligatorio' })}
            id="name"
            className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-xs italic mt-2">{errors.name.message}</p>}
        </div>

        {/* Campo de Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            {...register('email', {
              required: 'El email es obligatorio',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Dirección de email inválida'
              }
            })}
            id="email"
            className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email.message}</p>}
        </div>

        {/* Campo de Mensaje */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
          <textarea
            {...register('message', { required: 'El mensaje no puede estar vacío' })}
            id="message"
            rows={6}
            className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && <p className="text-red-500 text-xs italic mt-2">{errors.message.message}</p>}
        </div>

        {/* Botón de Envío */}
        <div className="text-center">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors">
            Enviar Mensaje
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactPage;
