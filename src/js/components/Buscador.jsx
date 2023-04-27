import React from 'react';
import PropTypes from 'prop-types';
// estilos
import '../../styles/Buscador.css'

const Buscador = props => {
  return (
    <div className="input-group buscador">
      <span><i className="bi bi-search"></i></span>
      <input className="form-control me-2 buscador-input" type="search" placeholder={props.text} aria-label={props.text} />
      <span></span>
    </div>
  );
};
Buscador.propTypes = {
  text: PropTypes.string
};

export default Buscador;