import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/button.css'

const Interaccion = props => {
    return(
        <button className="icon-button">
            <span><i className={props.icono}></i></span>
        </button>
    );
};
Interaccion.propTypes = {
    icono: PropTypes.string
};

export default Interaccion;