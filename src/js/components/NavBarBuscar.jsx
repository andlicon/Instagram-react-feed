import React from 'react';
// estilo
import '../../styles/NavBarBuscar.css';
// componentes
import Buscador from './Buscador.jsx';
import Interaccion from './Interaccion.jsx'

const NavBarBuscar = () => {
  return (
    <nav className='navbar bg-body-tertiary navBar-buscar navBar--small'>
      <a className='navbar-brand'>Instagram</a>
        <form className='d-flex form-buscar' role='search'>
          <Buscador text='Buscar'
            iconoClass='bi-search' />
          <Interaccion icono='bi bi-heart'/>
        </form>
    </nav>
  );
};

export default NavBarBuscar;