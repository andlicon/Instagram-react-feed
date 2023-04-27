import React from 'react';
import PropTypes from 'prop-types';
// estilo
import '../../styles/CloseButton.css'

const CloseButton = props => {
  return (
      <button 
        role='reset' 
        className={`close-button ${props.clase}`}
        onClick={()=>console.log('a')}>
        x
      </button>
    );
};
CloseButton.propTypes = {
  clase: PropTypes.string
};

export default CloseButton;
