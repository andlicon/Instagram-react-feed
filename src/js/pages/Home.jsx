import React from 'react';
// componentes
import Caroussel from '../components/Caroussel.jsx'
import Publicaciones from '../components/Publicaciones.jsx';

// estilo
import '../../styles/Home.css';

const Home = () => {
  return (
    <div className='contenido'>
      <Caroussel />
      <div className="body">
        <Publicaciones 
          cantidadPosts={ 5 } />
      </div>
    </div>
  );
};

export default Home;