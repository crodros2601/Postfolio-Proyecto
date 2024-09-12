import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import GameHaven from '../image/gamehaven.png';
import gamehavenInteractivo1 from '../image/gamehavenInteractivo1.png'; 
import gamehavenInteractivo2 from '../image/gamehavenInteractivo2.png'; 
import dinamicoGameHaven from '../image/dinamicoGameHaven.png'; 
import carrouselGameHaven from '../image/carrouselGameHaven.png'; 
import responsive1 from '../image/responsive1.jpeg'; 
import responsive2 from '../image/responsive2.jpeg'; 

function ProyectoDetalle4({ seccionAnimacion }) {
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
      show={seccionAnimacion === 'Proyecto2'}
      enter="transition ease-out duration-500"
      enterFrom="opacity-0 transform translate-y-full"
      enterTo="opacity-100 transform translate-y-0"
      leave="transition ease-in duration-300"
      leaveFrom="opacity-100 transform translate-y-0"
      leaveTo="opacity-0 transform translate-y-full"
    >
      <div
          id="Proyecto1"
          className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-white"
          style={{
            background: 'rgba(0, 0, 0, 0.9)',
            minHeight: isMobile ? '4900px' : '4600px',
          }}
        >
        <div className="max-w-4xl px-6 py-12 mt-14 text-center">
          <h1 className="text-4xl font-bold mb-8 md:inline-block md:border-b-4">Landing Page</h1>
                   
          <p className="text-lg text-gray-200 mb-8">
            Esta landing page para GameHaven está diseñada para ofrecer una experiencia inmersiva y atractiva para los usuarios 
            interesados en videojuegos. Utiliza HTML, CSS y JavaScript para una funcionalidad completa y un diseño visual impactante.
            Visita la página aquí: <a href="https://gamehavenlandingpage.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mb-4 block">
            https://gamehavenlandingpage.vercel.app/
          </a> 
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Diseño Atractivo</h2>
            <p className="text-lg text-gray-200 mb-4">
              La página cuenta con un diseño oscuro y moderno, con un menú de navegación tanto para escritorio como para dispositivos móviles, y un video de presentación que captura la atención al instante.
            </p>
            <img src={GameHaven} className="mb-4 w-96 mx-auto" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Interactividad</h2>
            <p className="text-lg text-gray-200 mb-4">
              Incluye un botón para reproducir/pausar el video principal y un menú desplegable en dispositivos móviles que se activa con un botón de menú. La navegación y la interacción se gestionan mediante JavaScript para una experiencia de usuario fluida.
            </p>
            <img src={gamehavenInteractivo1} className="mb-4 w-full" />
            <img src={gamehavenInteractivo2} className="mb-4 w-full" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Contenido Dinámico</h2>
            <p className="text-lg text-gray-200 mb-4">
              Presenta secciones destacadas como una selección de juegos, características exclusivas y una sección de testimonios de jugadores. Los elementos de la página se desplazan suavemente al hacer clic en flechas de navegación.
            </p>
            <img src={dinamicoGameHaven} alt="Añadir Nuevo Contacto" className="mb-4 w-full" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Carousel de Imágenes</h2>
            <p className="text-lg text-gray-200 mb-4">
              Utiliza un carousel para mostrar una selección de juegos destacados, con controles para navegar hacia adelante y hacia atrás entre las imágenes.
            </p>
            <img src={carrouselGameHaven} alt="Registrar para Crear una Cuenta" className="mb-4 w-full" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Responsive Design</h2>
            <p className="text-lg text-gray-200 mb-4">
              La página se adapta a diferentes tamaños de pantalla, asegurando que el contenido sea accesible y estéticamente agradable tanto en móviles como en escritorios.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <img src={responsive1} alt="Registrar para Crear una Cuenta" className="w-96" />
              <img src={responsive2} alt="Registrar para Crear una Cuenta" className="mb-4 w-96" />
            </div>
          </section>

          <div>
              <h3 className="text-xl font-semibold mb-2 text-center">Código en GitHub</h3>
              <div className="mt-4 flex flex-col md:flex-row items-center justify-center">
                <a
                  href="https://github.com/crodros2601/Landing-Page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block md:inline-block ml-0 md:ml-4"
                >
                  <button className="bg-white text-black font-bold py-2 px-4 rounded">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
        </div>
      </div>
    </Transition>
  );
}

export default ProyectoDetalle4;
