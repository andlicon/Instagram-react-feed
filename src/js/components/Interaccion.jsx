import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/button.css'
import '../../styles/Interaccion.css';

const Interaccion = ({classIcono, classBoton}) => {
  return (
    <button
      className={`icon-button interaccion-boton ${classBoton ? classBoton : ''}`}
      onClick={(e) => { e.preventDefault() }}>
      <i className={`interaccion-icono bi ${classIcono}`}></i>
    </button>
  );
};
Interaccion.propTypes = {
  classIcono: PropTypes.string
};

export default Interaccion;