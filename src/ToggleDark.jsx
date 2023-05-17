import { useState } from "react";
import "./css/AppDark.css"; // Importa el archivo CSS con estilos para el componente

const ToggleDark = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode"); // Agrega o quita la clase 'dark-mode' al cuerpo del documento
  };

  return (
    <>
      {darkMode === false ? (
        <svg
          onClick={toggleDarkMode}
          fill="#222"
          height="800px"
          width="800px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 384"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M311.576,148.336l-32-136C277.872,5.112,271.424,0,264,0H120c-7.424,0-13.872,5.112-15.576,12.336l-32,136
			c-1.12,4.76,0,9.768,3.04,13.6C78.496,165.768,83.112,168,88,168h88v184h-48c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h128
			c8.832,0,16-7.168,16-16c0-8.832-7.168-16-16-16h-48V168h16v24c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-24h40
			c4.888,0,9.504-2.232,12.536-6.064C311.576,158.104,312.696,153.096,311.576,148.336z M108.2,136l24.472-104h118.656L275.8,136
			H108.2z"
              />
            </g>
          </g>
        </svg>
      ) : (
        <svg
          onClick={toggleDarkMode}
          fill="#f4f1eb"
          height="800px"
          width="800px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 384"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M311.576,148.336l-32-136C277.872,5.112,271.424,0,264,0H120c-7.424,0-13.872,5.112-15.576,12.336l-32,136
			c-1.12,4.76,0,9.768,3.04,13.6C78.496,165.768,83.112,168,88,168h88v184h-48c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h128
			c8.832,0,16-7.168,16-16c0-8.832-7.168-16-16-16h-48V168h16v24c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-24h40
			c4.888,0,9.504-2.232,12.536-6.064C311.576,158.104,312.696,153.096,311.576,148.336z M108.2,136l24.472-104h118.656L275.8,136
			H108.2z"
              />
            </g>
          </g>
        </svg>
      )}
    </>
  );
};

export default ToggleDark;
