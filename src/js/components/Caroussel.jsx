import React, { useState, useEffect } from 'react';

import Historia from './Historia.jsx';

import '../../styles/caroussel.css';

const Caroussel = (props) => {
  const [historias, setHistorias] = useState([]);
  const [cantidadHistorias, setCantidadHistorias] = useState(20);

  useEffect(() => {
    obtenerHistorias();
  }, []);

  const obtenerHistorias = async () => {
    let response = await fetch(`https://randomuser.me/api/?results=${cantidadHistorias}`)
    let data = await response.json();
    setHistorias(data.results);
  }

  return (
    <ul className='caroussel-historias'>
      <span className='caroussel-pasar' id='carousselPrev'>
        <i className="bi bi-arrow-left-short"></i>
      </span>
      {
        historias.map((elemento, index) => {
          const username = elemento.login.username;
          const fotoPerfil = elemento.picture.thumbnail;

          return (
            <Historia
              key={index}
              username={username}
              fotoPerfil={fotoPerfil}
            />
          );
        })
      }
      <span className='caroussel-pasar' id='carousselNext'>
        <i className="bi bi-arrow-right-short"></i>
      </span>
    </ul>
  );
};
export default Caroussel;