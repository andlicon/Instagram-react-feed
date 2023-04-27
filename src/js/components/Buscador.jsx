import React from 'react';
import PropTypes from 'prop-types';
// estilos
import '../../styles/Buscador.css'

const Buscador = ({text, iconoClass}) => {
  // validacion
  const hasIcon = iconoClass!=undefined 
                  && iconoClass!=null 
                  && iconoClass!='';

  return (
    <div className="input-group buscador">
      <span className="buscador--span">
        <i className={`bi ${hasIcon ? iconoClass : ''} buscador-icono`}></i>
      </span>
      <input 
        className={`form-control me-2 buscador-input ${hasIcon ? 'buscador-input--padding' : ''}`}
        type="search" 
        placeholder={text} 
        aria-label={text} />
      <span className="buscador--span">
        {/* nada */}
      </span>
    </div>
  );
};
Buscador.propTypes = {
  text: PropTypes.string.isRequired,
  iconoClass: PropTypes.string
};

export default Buscador;