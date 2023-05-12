import React from 'react';
import '../../styles/post.css';

import Contenido from './Contenido.jsx';

const Post = ({ title,
  body,
  tags,
  userId,
  contenidos }) => {
  return (
    <div className='post'>
      <div className='post__header'>
        <div className='post__header-informacion'>
          <a className='post__redirect' href='/'>
            <img className='post__img-autor'
              src=''
              alt='' />
          </a>
          <a className='post__redirect' href='/'>
            <p className='post__autor'>
              {userId}
            </p>
          </a>
          <h3 className='post__title'>
            {title}
          </h3>
          <p className='post__antiguedad'>
            1 día
          </p>
        </div>
        <button className='post__opciones'>
          <i className='bi bi-three-dots'></i>
        </button>
      </div>
      <Contenido
        contenidos = { contenidos } />
      <div className='interaccion__container'>
        <div className='interaccion__group'>
          <button
            className='post__interaccion'>
            <i className='bi bi-heart'></i>
          </button>
          <button
            className='post__interaccion'>
            <i className='bi bi-chat'></i>
          </button>
          <button
            className='post__interaccion'>
            <i class='bi bi-send'></i>
          </button>
        </div>
        <div className='interaccion__group'>
          <button className='post__interaccion'>
            <i className='bi bi-box-arrow-down'></i>
          </button>
        </div>
      </div>
      <div className='post__text'>
      </div>
    </div>
  );
};
export default Post;