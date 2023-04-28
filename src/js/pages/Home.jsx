import React from 'react';
// componentes
import NavBarBuscar from '../components/NavBarBuscar.jsx';
import NavBarPrincipal from '../components/NavBarPrincipal.jsx'
import '../../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <NavBarBuscar />
      <div className='contenido'>
        HOLA ESTE ES EL CONTENIDO PRINCIPAL
      </div>
      <NavBarPrincipal />
    </div>
  );
};

export default Home;