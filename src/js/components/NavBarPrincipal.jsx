import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/NavBarPrincipal.css';
import Interaccion from './Interaccion.jsx';

const NavBarPrincipal = () => {
  return (
    <nav className='navbar bg-body-tertiary navBar--small navBar-principal'>

      <div className="contenedor-interacciones">
        <a href="/" 
          className="interaccion--md">
            <i className="bi bi-instagram"></i>
        </a>
        <Interaccion 
          classIcono="bi-house-door-fill" 
          label="Inicio"/>
        <Interaccion 
          classIcono="bi-search"
          label="Búsqueda"
          classBoton="interaccion--md"/>
        <Interaccion 
          classIcono="bi-compass" 
          label="Explorar"/>
        <Interaccion 
          classIcono="bi-collection-play" 
          label="Reels"/>
        <Interaccion 
          classIcono="bi-chat" 
          label="Mensajes"/>
        <Interaccion 
          classIcono="bi-heart " 
          label="Notificaciones"/>
        <Interaccion 
          classIcono="bi-plus-square" 
          label="Crear"/>
      </div>
      <div className="interaccion--md interaccion--settings">
      <Interaccion 
          classIcono="bi bi-list" 
          label="Más"/>
      </div>
    </nav>
  );
};

export default NavBarPrincipal;