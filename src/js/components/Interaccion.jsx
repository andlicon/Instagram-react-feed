import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/button.css'
import '../../styles/Interaccion.css';

const Interaccion = ({classIcono, classBoton, label}) => {
  return (
    <button
      className={`icon-button interaccion-boton ${classBoton ? classBoton : ''}`}
      onClick={(e) => { e.preventDefault() }}>
      <i className={`interaccion-icono bi ${classIcono}`}></i>
      <p className="interaccion--lg">{label}</p>
    </button>
  );
};
Interaccion.propTypes = {
  classIcono: PropTypes.string
};

export default Interaccion;