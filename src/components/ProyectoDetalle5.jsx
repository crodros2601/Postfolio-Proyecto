import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import conversorCSS from '../image/conversorCSS.png'; 

function ProyectoDetalle5({ seccionAnimacion }) {
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
      show={seccionAnimacion === 'Proyecto5'}
      enter="transition ease-out duration-500"
      enterFrom="opacity-0 transform translate-y-full"
      enterTo="opacity-100 transform translate-y-0"
      leave="transition ease-in duration-300"
      leaveFrom="opacity-100 transform translate-y-0"
      leaveTo="opacity-0 transform translate-y-full"
    >
      <div
        id="Proyecto5"
        className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-white"
        style={{
          background: 'rgba(0, 0, 0, 0.9)',
          minHeight: isMobile ? '1600px' : '1800px',
        }}
      >
        <div className="max-w-4xl px-6 py-12 mt-14 text-center">
          <h1 className="text-4xl font-bold mb-8 md:inline-block md:border-b-4">Conversor CSS</h1>

          <p className="text-lg text-gray-200 mb-8">
            El <strong>Conversor CSS</strong> es una aplicación de escritorio desarrollada en Java que permite convertir valores de unidades CSS como <code>vw</code> (viewport width) y <code>vh</code> (viewport height) a píxeles (<code>px</code>), así como convertir entre porcentajes y píxeles. Esta herramienta es especialmente útil para desarrolladores web que necesitan ajustar sus diseños responsivos con precisión.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Características Clave</h2>
            <p className="text-lg text-gray-200 mb-4">
              - <strong>Interfaz de Usuario Atractiva:</strong> Diseñada con Java Swing para proporcionar una experiencia de usuario moderna y amigable.<br />
              - <strong>Funcionalidades de Conversión:</strong> Permite conversiones entre <code>vw</code>, <code>vh</code>, <code>px</code> y porcentajes, con soporte para diferentes contextos.<br />
              - <strong>Historial de Conversiones:</strong> Guarda un historial de conversiones realizadas para referencia futura.<br />
              - <strong>Validación de Entradas:</strong> Incluye manejo de errores para asegurar que los usuarios ingresen valores válidos.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Imágenes del Proyecto</h2>
              <img src={conversorCSS} alt="Interfaz Principal del Conversor CSS" className="w-full h-auto object-cover rounded-lg" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">Código en GitHub</h2>
            <p className="text-lg text-gray-200 mb-4">
              Para acceder al código fuente y contribuir al proyecto, visita el repositorio en <a href="https://github.com/crodros2601/Landing-Page" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">GitHub</a>.
            </p>
          </section>

          
          <div>
              <h3 className="text-xl font-semibold mb-2 text-center">Código en GitHub</h3>
              <div className="mt-4 flex flex-col md:flex-row items-center justify-center">
                <a
                  href="https://github.com/crodros2601/ConversorCSS"
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

export default ProyectoDetalle5;
