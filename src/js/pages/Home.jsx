import React from 'react';
// componentes
import NavBarBuscar from '../components/NavBarBuscar.jsx';
import NavBarInteraccion from '../components/NavBarPrincipal.jsx'

const Home = () => {
  return (
    <>
      <NavBarBuscar />
      <NavBarInteraccion />
    </>
  );
};

export default Home;