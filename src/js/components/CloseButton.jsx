import React from 'react';
import PropTypes from 'prop-types';
// estilo
import '../../styles/CloseButton.css'
// evento
import {limpiarInput} from '../imputsEvents.js';

const CloseButton = props => {
  console.log(props.isActive);
  return (
      <button 
        role='reset' 
        className={`close-button 
                  ${props.clase} 
                  ${props.isActive ? 'visible' : 'invisible'}`}
        onClick={(event) => limpiarInput(event, props.target)}
      >
        x
      </button>
    );
};
CloseButton.propTypes = {
  clase: PropTypes.string
};

export default CloseButton;
