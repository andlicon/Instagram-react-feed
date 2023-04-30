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
      <div className='d-flex form-buscar' >
        <Buscador text='Buscar'
          iconoClass='bi-search' />
        <Interaccion icono='bi bi-heart' />
      </div>
    </nav>
  );
};

export default NavBarBuscar;