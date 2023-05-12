import React, { useState } from 'react';
import '../../styles/contenido.css'

const Contenido = ({ contenidos }) => {
  const cantidad = (contenidos.length);
  const isPasable = (cantidad > 1);
  // hooks
  const [mostrar, setMostrar] = useState(0);

  const contenidoSiguiente = (event, direccion) => {
    const NEXT = true;
    const PREV = false;

    if (direccion == NEXT
        && (mostrar+1) < cantidad) {
      setMostrar(mostrar + 1);
    }
    if (direccion == PREV 
        && (mostrar-1) >= 0) {
      setMostrar(mostrar - 1);
    }
  }

  return (
    <div className='contenidos'>
      {
        isPasable &&
        <button className='contenidos__pasador contenidos__pasador--prev'
          onClick={event => contenidoSiguiente(event, false)}>
          <i className='bi bi-caret-left'></i>
        </button>
      }
      {
        contenidos.map((contenido, index) => {
          return (
            <img
              key={index}
              src=''
              alt=''
              className={ `contenidos__img ${index==mostrar ?'mostrar':''}` } />
          )
        })
      }
      {
        isPasable &&
        <div className='contenidos__status'>
          {
            contenidos.map((e, index) => {
              return (
                <span
                  key={index}
                  className={`status ${index == mostrar && 'status--actual'}`}>

                </span>
              )
            })
          }
        </div>
      }
      {
        isPasable &&
        <button className='contenidos__pasador contenidos__pasador--next'
          onClick={event => contenidoSiguiente(event, true)}>
          <i className='bi bi-caret-right'></i>
        </button>
      }
    </div>
  );
};
export default Contenido;