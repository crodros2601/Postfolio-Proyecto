import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import inicio from '../image/inicio.png';
import tecnologia from '../image/tecnologia.png';
import experiencia from '../image/experiencia.png';
import proyectos from '../image/proyectos.png';

function ProyectoDetalle2({ seccionAnimacion }) {
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
    <>
      <Transition
        show={seccionAnimacion === 'Proyecto4'}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 transform translate-y-full"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform translate-y-full"
      >
        <div
          id="Proyecto4"
          className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-white"
          style={{
            background: 'rgba(0, 0, 0, 0.9)',
            minHeight: isMobile ? '3500px' : '3850px',
          }}
        >
          <div className="max-w-4xl px-6 py-12 mt-14 text-center">
            <h1 className="text-4xl font-bold mb-8 md:inline-block md:border-b-4">
              Proyecto de Portafolio
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              En este proyecto, he diseñado cada sección para destacar mi experiencia y habilidades en el desarrollo web. 
              Utilizando tecnologías como React y técnicas avanzadas de animación, he creado un entorno interactivo y fluido que muestra mis proyectos y logros de manera efectiva.
            </p>
            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">
                Slider
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              El diseño del slider se integra perfectamente con la estructura de una sola página del sitio web,
              eliminando la necesidad de rutas separadas para cada sección. Esto se logra mediante un enfoque de
              navegación fluida que permite a los usuarios desplazarse de manera intuitiva a través del contenido sin
              recargar la página.
            </p>

            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">
              Inicio
            </h2>
            <p className="text-lg text-gray-200">
              En la sección de inicio, empleo técnicas avanzadas de animación y transiciones suaves para crear una
              experiencia de usuario atractiva y dinámica. Los elementos visuales se cargan de manera progresiva,
              optimizando el rendimiento y asegurando tiempos de carga rápidos, mientras que las animaciones
              cuidadosamente diseñadas ayudan a guiar la atención del usuario hacia la información más relevante.
            </p>
            <img src={inicio} alt="Cabecera tipo 2" className="mb-4 w-full mt-3" />

            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">
              Tecnología
            </h2>
            <p className="text-lg text-gray-200">
              Utilizo iconografía visual y animaciones sutiles para destacar las tecnologías clave con las que trabajo,
              como JavaScript, React y CSS. Cada tecnología se presenta de manera distintiva, facilitando una
              comprensión rápida de mis habilidades técnicas y experiencia en desarrollo frontend.
            </p>
            <img src={tecnologia} alt="Cabecera tipo 3" className="mb-4 w-full mt-3" />

            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">
              Experiencia y Formación
            </h2>
            <p className="text-lg text-gray-200">
              La sección de experiencia y formación está diseñada para ofrecer un recorrido claro y coherente por mi
              trayectoria profesional y educativa. Mediante el uso de transiciones suaves y efectos visuales
              discretos, los usuarios pueden explorar mi historial profesional de manera fluida y sin interrupciones.
            </p>
            <img src={experiencia} alt="Estructura de las páginas de cada género" className="mb-4 w-full mt-3" />

            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">
              Proyectos
            </h2>
            <p className="text-lg text-gray-200">
              Cada proyecto destacado en esta sección se presenta de forma interactiva, con detalles sobre las
              tecnologías utilizadas y demostraciones visuales que muestran el trabajo en acción. Las transiciones
              entre proyectos se gestionan de manera fluida, garantizando una navegación cohesiva y una experiencia de
              usuario agradable.
            </p>
            <img src={proyectos} alt="Sección de productos y detalles" className="mb-4 w-full mt-3" />

            <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">
              Características Técnicas
            </h2>
            <p className="text-lg text-gray-200">
              El enfoque en la programación incluye la optimización del rendimiento para una carga rápida de contenido,
              el uso de técnicas avanzadas de animación para mejorar la interactividad y la experiencia del usuario, y
              la implementación de un diseño responsivo que garantiza una visualización adecuada en todos los
              dispositivos. Además, la ausencia de rutas separadas dentro del sitio promueve una navegación fluida y
              sin interrupciones, mejorando la usabilidad y la accesibilidad general del sitio web.
            </p>
          </div>
          <div>
              <h3 className="text-xl font-semibold mb-2 text-center">Código en GitHub</h3>
              <div className="mt-4 flex flex-col md:flex-row items-center justify-center">
                <a
                  href="https://github.com/crodros2601/Postfolio-Proyecto"
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
      </Transition>
    </>
  );
}

export default ProyectoDetalle2;
