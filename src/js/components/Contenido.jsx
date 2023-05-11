import React from 'react';
import '../../styles/contenido.css'

const Contenido = ({ contenidos }) => {
  const isPasable = (contenidos.length > 1);

  return (
    <div className='contenidos'>
      {
        isPasable&&
          <button 
            className='contenidos__pasador contenidos__pasador--prev'>
            <i className='bi bi-caret-left'></i>
          </button>
      }
      {
        contenidos.map( (contenido, index) => {
          return(
            <img 
              key={ index }
              src='' 
              alt=''
              className='contenidos__img' />
          )
        })
      }
      {
        isPasable&&
          <button className='contenidos__pasador contenidos__pasador--next'>
            <i className='bi bi-caret-right'></i>
          </button>
      }
    </div>
  );
};
export default Contenido;