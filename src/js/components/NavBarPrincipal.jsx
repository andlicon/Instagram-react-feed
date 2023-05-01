import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/NavBarPrincipal.css';
import Interaccion from './Interaccion.jsx';

const NavBarPrincipal = () => {
  return (
    <nav className='navbar bg-body-tertiary navBar--small navBar-principal'>

      <div className="contenedor-interacciones">
        <a href="/" className="interaccion--md"><i className="bi bi-instagram"></i></a>
        <Interaccion classIcono="bi-house-door-fill" />
        <Interaccion classIcono="bi-search" classBoton="interaccion--md"/>
        <Interaccion classIcono="bi-compass" />
        <Interaccion classIcono="bi-collection-play" />
        <Interaccion classIcono="bi-chat" />
        <Interaccion classIcono="bi-heart " />
        <Interaccion classIcono="bi-plus-square" />
      </div>
      <div className="interaccion--md">
        <button>
          <i className="bi bi-list"></i>
        </button>
      </div>
    </nav>
  );
};

export default NavBarPrincipal;