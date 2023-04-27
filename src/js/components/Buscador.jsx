import React from 'react';

const Buscador = props => {
  return (
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <a href="/">Buscar</a>
    </form>
  );
};

export default Buscador;