import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/NavBarPrincipal.css';
import Interaccion from './Interaccion.jsx';

const NavBarPrincipal = () => {
  return (
    <nav className='navbar bg-body-tertiary navBar--small navBar-principal'>
      <Interaccion icono="bi-house-door-fill" />
      {/* <Interaccion icono="bi-search" /> */}
      <Interaccion icono="bi-compass" />
      <Interaccion icono="bi-collection-play" />
      <Interaccion icono="bi-messenger" />
      <Interaccion icono="bi-heart "/>
      <Interaccion icono="bi-plus-square" />
    </nav>
  );
};

export default NavBarPrincipal;