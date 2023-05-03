import React, { useEffect } from 'react';

const Historia = ({ username, fotoPerfil }) => {

    return (
        <li className='historia'>    
            <img 
                src={fotoPerfil} 
                alt={`foto de perfil del usuario ${username}`} 
                className='historia-img'
            />
            <p className='historia-username'>
                {username}
            </p>
        </li>
    );
};
export default Historia;