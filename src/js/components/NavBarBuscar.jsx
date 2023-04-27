import React from 'react';
// estilo
import '../../styles/NavBarBuscar.css';
// componentes
import Buscador from '../components/Buscador.jsx';

const NavBarBuscar = () => {
  return (
    <nav className="navbar bg-body-tertiary navBar--small">
      <div className="container-fluid">
        <a className="navbar-brand">Instagram</a>
        <form className="d-flex" role="search">
          <Buscador text="Buscar"/>
          <a href="/">Buscar</a>
        </form>
      </div>
    </nav>
  );
};

export default NavBarBuscar;