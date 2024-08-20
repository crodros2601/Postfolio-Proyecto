import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import inicio from '../image/nuevoContacto.png';
import contactos from '../image/listarContacto.png';
import detalleContacto from '../image/detalleContacto.png'; 
import login from '../image/iniciarSesion.png'; 
import iniciarSesion from '../image/registro.png';

function ProyectoDetalle3({ seccionAnimacion }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Transition
      show={seccionAnimacion === 'Proyecto3'}
      enter="transition ease-out duration-500"
      enterFrom="opacity-0 transform translate-y-full"
      enterTo="opacity-100 transform translate-y-0"
      leave="transition ease-in duration-300"
      leaveFrom="opacity-100 transform translate-y-0"
      leaveTo="opacity-0 transform translate-y-full"
    >
      <div
        id="Proyecto3"
        className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-teal-100 text-white"
        style={{ background: 'rgba(0, 0, 0, 0.9)', minHeight: isMobile ? '4000px' : '4500px' }}
      >
        <div className="max-w-4xl px-6 py-12 mt-14 text-center">
          <h1 className="text-4xl font-bold mb-8 md:inline-block md:border-b-4">Proyecto de Gestión de Contactos</h1>
          <p className="text-lg text-gray-200 mb-8">
            Este proyecto es una aplicación de gestión de contactos desarrollada con React y React Router.
            Implementa un sistema de autenticación simple, junto con la capacidad de gestionar, añadir, y editar contactos,
            todo ello bajo un diseño responsivo y amigable.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Lista de Contactos</h2>
            <p className="text-lg text-gray-200 mb-4">
              La lista de contactos permite a los usuarios ver y buscar sus contactos almacenados. Los contactos se muestran
              de manera intuitiva con imágenes de perfil y detalles básicos. Cada contacto puede ser seleccionado para ver más
              información.
            </p>
            <img src={contactos} alt="Lista de Contactos" className="mb-4 w-full" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Detalle del Contacto</h2>
            <p className="text-lg text-gray-200 mb-4">
              La vista de detalle del contacto muestra información detallada sobre un contacto específico, incluyendo nombre,
              apellidos, teléfono, y más. Desde esta vista, los usuarios pueden actualizar o eliminar contactos según sea necesario.
            </p>
            <img src={detalleContacto} alt="Detalle del Contacto" className="mb-4 w-full" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Añadir Nuevo Contacto</h2>
            <p className="text-lg text-gray-200 mb-4">
              La funcionalidad para añadir nuevos contactos permite a los usuarios incorporar información de contacto adicional
              a su lista. Esto incluye la introducción de datos como nombre, apellidos, teléfono, y dirección de correo electrónico,
              facilitando así una gestión más completa y actualizada de sus contactos.
            </p>
            <img src={inicio} alt="Añadir Nuevo Contacto" className="mb-4 w-full" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Registrar para Crear una Cuenta</h2>
            <p className="text-lg text-gray-200 mb-4">
              La aplicación permite a los nuevos usuarios registrarse para crear una cuenta, lo cual les otorga acceso completo a
              las funcionalidades de gestión de contactos. El proceso de registro es sencillo e incluye la verificación del correo
              electrónico para asegurar la autenticidad de las cuentas.
            </p>
            <img src={iniciarSesion} alt="Registrar para Crear una Cuenta" className="mb-4 w-full" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Iniciar Sesión</h2>
            <p className="text-lg text-gray-200 mb-4">
              La aplicación incluye una página de inicio de sesión segura, donde los usuarios deben autenticarse antes de acceder
              a la funcionalidad completa de la aplicación. Esto asegura que los datos de contacto estén protegidos.
            </p>
            <img src={login} alt="Iniciar Sesión" className="mb-4 w-full" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Características Técnicas</h2>
            <p className="text-lg text-gray-200 mb-4">
              La aplicación está construida con React y React Router, utilizando un contexto global para gestionar el estado de
              autenticación y los datos del usuario. Se hace uso de Axios para la comunicación con la API backend, asegurando que
              los datos se sincronicen correctamente. El diseño es completamente responsivo y adaptable a diferentes dispositivos.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Backend con Laravel</h2>
            <p className="text-lg text-gray-200 mb-4">
              El backend de esta aplicación está desarrollado con Laravel, el cual actúa como una API que proporciona la funcionalidad
              necesaria para gestionar usuarios y contactos. El controlador de autenticación (<code>AuthController</code>) maneja el
              registro, inicio de sesión y gestión de tokens JWT para la autenticación. Por otro lado, el controlador de contactos
              (<code>ContactoController</code>) gestiona la creación, actualización, eliminación y visualización de contactos. La
              comunicación entre el frontend y el backend se realiza a través de solicitudes HTTP, utilizando Axios para interactuar
              con las rutas API definidas en Laravel.
            </p>
          </section>
        </div>
      </div>
    </Transition>
  );
}

export default ProyectoDetalle3;
