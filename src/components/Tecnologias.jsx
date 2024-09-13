import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import lamparas from '../image/lamparas.jpg';
import javascript from '../image/javascript.png';
import react from '../image/react.png';
import css from '../image/css.png';
import html from '../image/HTML.png';
import Tailwind from '../image/Tailwind.png';
import PHP from '../image/PHP.png';
import java from '../image/java.png';
import laravel from '../image/laravel.png';
import mysql from '../image/mysql.png';
import visualStudio from '../image/visualStudio.png';
import docker from '../image/docker.png';
import eclipse from '../image/eclipse.png';
import git from '../image/git.svg';
import angular from '../image/angular.png';

function Tecnologias({ seccionAnimacion }) {
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
        show={seccionAnimacion === 'Tecnologias'}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 transform -translate-y-full"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform -translate-y-full"
      >
        <div
          id="Tecnologias"
          className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${lamparas})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-8">
            <div className={`flex flex-col items-center p-2 md:p-0 ${isMobile ? 'mt-12' : ''}`}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">FRONTEND</h3>
              <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 md:justify-start">
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={html} alt="HTML Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={css} alt="CSS Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={javascript} alt="JavaScript Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={react} alt="React Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={Tailwind} alt="Tailwind Logo" className="w-full h-full object-contain p-2" />
                </div>
              </div>
            </div>
            <div className={`flex flex-col items-center p-2 md:p-0`}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">BACKEND</h3>
              <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 md:justify-start">
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={laravel} alt="Laravel Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={java} alt="Java Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={mysql} alt="MySQL Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={PHP} alt="PHP Logo" className="w-full h-full object-contain p-2" />
                </div>
              </div>
            </div>
            <div className={`flex flex-col items-center p-2 md:p-0`}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">HERRAMIENTAS</h3>
              <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 md:justify-start">
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={git} alt="Git Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={visualStudio} alt="Visual Studio Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={eclipse} alt="Eclipse Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={docker} alt="Docker Logo" className="w-full h-full object-contain p-2" />
                </div>
              </div>
            </div>
            <div className={`flex flex-col items-center p-2 md:p-0`}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">APRENDIENDO</h3>
              <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 md:justify-start">
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img src={angular} alt="Node.js Logo" className="w-full h-full object-contain p-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default Tecnologias;
