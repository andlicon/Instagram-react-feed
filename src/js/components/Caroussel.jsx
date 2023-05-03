import React, { useState, useEffect } from 'react';

import Historia from './Historia.jsx';

const Caroussel = (props) => {
    const [historias, setHistorias] = useState([]);

    useEffect( () => {
        obtenerHistorias();
    }, []);

    const obtenerHistorias = async () => {
        const data = await fetch('https://randomuser.me/api/?results=15');
        const historias = await data.json();
        setHistorias(historias.results);
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