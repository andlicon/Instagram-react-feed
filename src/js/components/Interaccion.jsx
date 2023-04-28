import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/button.css'
import '../../styles/Interaccion.css';

const Interaccion = props => {
  return (
    <button
      className="icon-button interaccion-boton"
      onClick={(e) => { e.preventDefault() }}>
      <span><i className={`interaccion ${props.icono}`}></i></span>
    </button>
  );
};
Interaccion.propTypes = {
  icono: PropTypes.string
};

export default Interaccion;