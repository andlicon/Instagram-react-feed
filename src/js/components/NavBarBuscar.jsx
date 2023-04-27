import React from 'react';

import '../../styles/NavBarBuscar.css';

const NavBarBuscar = () => {
    return (
        <nav className="navbar bg-body-tertiary navBar--small">
            <div className="container-fluid">
                <a className="navbar-brand">Instagram</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <a href="/">Buscar</a>
                </form>
            </div>
        </nav>
    );
};

export default NavBarBuscar;