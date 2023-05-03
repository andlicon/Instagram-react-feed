import React from 'react';
// componentes
import NavBarBuscar from '../components/NavBarBuscar.jsx';
import NavBarPrincipal from '../components/NavBarPrincipal.jsx'
import Caroussel from '../components/Caroussel.jsx'

// estilo
import '../../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <NavBarBuscar />
      <div className='contenido'>
        <Caroussel />
      </div>
      <NavBarPrincipal />
    </div>
  );
};

export default Home;