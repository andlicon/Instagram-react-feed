import React, { useState, useEffect } from 'react';

import Historia from './Historia.jsx';

import '../../styles/caroussel.css';

const Caroussel = (props) => {
    const [historias, setHistorias] = useState([]);
    const [cantidadHistorias, setCantidadHistorias]  = useState(20);

    useEffect( () => {
        obtenerHistorias();
    }, []);

    const obtenerHistorias = async () => {
        fetch(`https://randomuser.me/api/?results=${cantidadHistorias}`)
        .then(response => response.json())
        .then(data => setHistorias(data.results))
    }

    return (
        <ul className='caroussel-historias'>
            {
                historias.map( (elemento, index) => {
                    const username = elemento.login.username;
                    const fotoPerfil = elemento.picture.thumbnail;

                    return(
                        <Historia 
                            key = {index} 
                            username = {username}
                            fotoPerfil = {fotoPerfil}
                        />
                    );
                })
            }
        </ul>
    );
};
export default Caroussel;