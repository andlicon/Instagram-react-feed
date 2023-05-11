import React from 'react';
import '../../styles/contenido.css'

const Contenido = ({ contenidos }) => {
  return (
    <div className='contenidos'>
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
    </div>
  );
};
export default Contenido;