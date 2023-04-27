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
        <form className="d-flex form-buscar" role="search">
          <Buscador text="Buscar" iconoClass="bi-search"/>
          <a href="/">Buscar</a>
        </form>
      </div>
    </nav>
  );
};

export default NavBarBuscar;