import React, { useEffect, useState } from 'react';
import lamparas2 from '../image/lamparas2.jpg';
import reactIcon from '../image/react.png';
import laravel from '../image/laravel.png';
import docker from '../image/docker.png';
import tailwind from '../image/Tailwind.png'; 
import html from '../image/HTML.png';
import javascript from '../image/javascript.png';
import css from '../image/css.png'; 
import java from '../image/java.png'; 
import { Transition } from '@headlessui/react';
import ensembleElegance from '../image/ensembleelegance.png';
import inicio from '../image/inicio.png';
import iniciarSesion from '../image/iniciarSesion.png';
import portadaGameHaven from '../image/portadaGameHaven.png';
import conversorPortada from '../image/conversorPortada.png'; 

const proyectos = [
  {
    id: 1,
    imagen: ensembleElegance,
    nombre: 'Tienda de ropa / EnsembleElegance',
    descripcion: 'Plataforma de comercio electrónico especializada en moda y accesorios.',
    tecnologias: ['React', 'Laravel', 'Docker', 'TailWind'],
  },
  {
    id: 2,
    imagen: portadaGameHaven,
    nombre: 'Landing Page',
    descripcion: 'Landing page interactiva y adaptativa para captar clientes, con diseño moderno y funcionalidades clave.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    imagen: iniciarSesion,
    nombre: 'Agenda de Contactos',
    descripcion: 'Agenda de contactos personal con autenticación.',
    tecnologias: ['React', 'CSS', 'Laravel'], 
  },
  {
    id: 4,
    imagen: inicio,
    nombre: 'Portafolio',
    descripcion: 'Portafolio personal para mostrar proyectos y habilidades.',
    tecnologias: ['React', 'TailWind'],
  },
  {
    id: 5,
    imagen: conversorPortada,
    nombre: 'Conversor medidas CSS',
    descripcion: 'Herramienta para convertir entre unidades CSS (px, em, rem, %), facilitando el diseño responsive.',
    tecnologias: ['Java'],
  },
];

const Proyectos = ({ seccionAnimacion, navegacion }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 3;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = proyectos.slice(indexOfFirstProject, indexOfLastProject);

  let gridColumns = 'grid-cols-1';
  if (currentProjects.length >= 3) {
    gridColumns = 'md:grid-cols-3';
  } else if (currentProjects.length === 2) {
    gridColumns = 'md:grid-cols-2';
  }

  const getIcon = (tecnologia) => {
    switch (tecnologia.toLowerCase()) {
      case 'react':
        return reactIcon;
      case 'laravel':
        return laravel;
      case 'docker':
        return docker;
      case 'tailwind':
        return tailwind;
      case 'css':
        return css;
      case 'html':
        return html;
      case 'javascript':
        return javascript;
      case 'java':
        return java;
      default:
        return null;
    }
  };

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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Transition
      show={seccionAnimacion === 'Proyectos'}
      enter="transition ease-out duration-500"
      enterFrom="opacity-0 transform translate-y-full"
      enterTo="opacity-100 transform translate-y-0"
      leave="transition ease-in duration-300"
      leaveFrom="opacity-100 transform translate-y-0"
      leaveTo="opacity-0 transform translate-y-full"
    >
      <div
        id="Proyectos"
        className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${lamparas2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: isMobile ? '210vh' : '100vh'
        }}
      >
        <div className={`grid gap-4 sm:gap-8 mr-10 ml-10 ${gridColumns}`}>
          {currentProjects.map((proyecto, localIndex) => {
            // Calcular el índice global del proyecto
            const globalIndex = indexOfFirstProject + localIndex;
            const proyectoId = proyectos[globalIndex]?.id;

            return (
              <div key={proyecto.id} className="bg-white text-black p-4 rounded-lg mt-6 sm:mt-10">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.nombre}
                  className="w-full h-60 object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-center">{proyecto.nombre}</h3>
                <p className="text-sm mt-3 text-center">{proyecto.descripcion}</p>
                <div className="flex flex-col sm:flex-row items-center sm:justify-between mt-3">
                  <button
                    onClick={() => navegacion(`Proyecto${proyectoId}`)}
                    className="bg-black text-white px-4 py-2 rounded-md mt-3 sm:mt-0"
                  >
                    Ver más detalles
                  </button>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-end mt-3 sm:mt-1">
                    {proyecto.tecnologias.map((tecnologia, index) => (
                      <span
                        key={index}
                        className="flex items-center px-2 py-1 bg-black text-white rounded-md text-xs sm:text-sm"
                        style={{ fontSize: '0.9rem' }}
                      >
                        {getIcon(tecnologia) && (
                          <div className="w-6 h-6 sm:w-6 sm:h-6 mr-2 flex items-center justify-center overflow-hidden">
                            <img src={getIcon(tecnologia)} alt={tecnologia} className="object-contain w-full h-full" />
                          </div>
                        )}
                        {tecnologia}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Paginación */}
        <div className="mt-8">
          <ul className="flex space-x-2">
            {Array.from({ length: Math.ceil(proyectos.length / projectsPerPage) }).map(
              (_, index) => (
                <li
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`cursor-pointer px-3 py-1 rounded-md ${
                    currentPage === index + 1
                      ? 'bg-white text-black font-bold border-2 border-white'
                      : 'bg-black text-white'
                  }`}
                >
                  {index + 1}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </Transition>
  );
};

export default Proyectos;
