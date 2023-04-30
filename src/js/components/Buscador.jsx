import React, { useState } from 'react';
import PropTypes from 'prop-types';
// estilos
import '../../styles/Buscador.css';
// componentes
import CloseButton from './CloseButton.jsx';
import { mostrarBorrador } from '../imputsEvents.js';

const Buscador = ({ text, iconoClass, closeButton }) => {
  // validacion
  const hasIcon = iconoClass != undefined
    && iconoClass != null
    && iconoClass != '';
  // hooks
  const [isBorrable, setIsBorrable] = useState(false);

  const buscadorHandler = ({ target }) => {
    if (target.value != '') {
      setIsBorrable(true);
    }
    else {
      setIsBorrable(false);
    }
  }

  const clickHandler = (event) => {
    setIsBorrable(false);
  }

  return (
    <form 
      className='d-flex form-buscar' 
      role='search'
      onClick={clickHandler}
    >
      <div className='input-group buscador'>
        <span className='buscador--span no-clickeable'>
          <i className={`bi ${hasIcon ? iconoClass : ''} buscador-icono`}></i>
        </span>
        <input
          className={`form-control me-2 buscador-input ${hasIcon ? 'buscador-input--padding' : ''}`}
          type='text'
          placeholder={text}
          id='buscador'
          aria-label={text}
          onKeyUp={buscadorHandler} />
        <CloseButton clase='buscador--span close-button-derecha' target={'buscador'} isActive={isBorrable} />
      </div>
    </form>
  );
};
Buscador.propTypes = {
  text: PropTypes.string.isRequired,
  iconoClass: PropTypes.string
};

export default Buscador;