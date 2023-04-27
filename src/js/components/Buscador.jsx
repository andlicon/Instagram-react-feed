import React from 'react';
import PropTypes from 'prop-types';
// estilos
import '../../styles/Buscador.css'

const Buscador = props => {
  return (
    <div className="input-group buscador">
      <span>x</span>
      <input className="form-control me-2 buscador-input" type="search" placeholder={props.text} aria-label={props.text} />
      <span>x</span>
    </div>
  );
};
Buscador.propTypes = {
  text: PropTypes.string
};

export default Buscador;