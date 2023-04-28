import React from 'react';
import PropTypes from 'prop-types';
// estilos
import '../../styles/Buscador.css';
// componentes
import CloseButton from './CloseButton.jsx';
import {mostrarBorrador} from '../imputsEvents.js';

const Buscador = ({ text, iconoClass, closeButton }) => {
  // validacion
  const hasIcon = iconoClass != undefined
    && iconoClass != null
    && iconoClass != '';

  return (
    <div className='input-group buscador'>
      <span className='buscador--span no-clickeable'>
        <i className={`bi ${hasIcon ? iconoClass : ''} buscador-icono`}></i>
      </span>
      <input
        className={`form-control me-2 buscador-input ${hasIcon ? 'buscador-input--padding' : ''}`}
        type='text'
        placeholder={text}
        id="buscador"
        aria-label={text} 
        onKeyUp={function(event) {mostrarBorrador(event)} } />
      <CloseButton clase="buscador--span close-button-derecha" target={"buscador"}/>
    </div>
  );
};
Buscador.propTypes = {
  text: PropTypes.string.isRequired,
  iconoClass: PropTypes.string
};

export default Buscador;