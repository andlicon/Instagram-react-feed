import React from 'react';
// componentes
import NavBarBuscar from '../components/NavBarBuscar.jsx';
import NavBarInteraccion from '../components/NavBarPrincipal.jsx'
import '../../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <NavBarBuscar />
      <NavBarInteraccion />
    </div>
  );
};

export default Home;