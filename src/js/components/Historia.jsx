import React, { useEffect } from 'react';

import '../../styles/historia.css';

const Historia = ({ username, fotoPerfil }) => {

    return (
        <li className='historia'>
            <a className="historia-a"
                href="/">
                <img
                    src={fotoPerfil}
                    alt={`foto de perfil del usuario ${username}`}
                    className='historia-img'
                />
                <p className='historia-username'>
                    {username}
                </p>
            </a>
        </li>
    );
};
export default Historia;