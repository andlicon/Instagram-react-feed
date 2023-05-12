import React, { useEffect, useState } from 'react';
import '../../styles/publicaciones.css';

// Componentes
import Post from './Post.jsx';

const Publicaciones = props => {
  const [posts, setPosts] = useState([]);

  // consultar a la api
  const consultarPosts = async () => {
    const url = `https://dummyjson.com/posts?limit=${props.cantidadPosts}&skip=${posts.length}`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      setPosts(data.posts);
    } 
    catch( e ) {
      console.log(e);
    }
  }

  useEffect( 
    () => {
      consultarPosts() 
    }, []
  );

  return(
    <div className='publicaciones'>
      {
        posts.map( (post) => {
          return(
            <Post 
              key = { post.id }
              title = { post.title } 
              body = { post.body } 
              tags = { post.tags } 
              userId = { post.userId }
              contenidos = { [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmYdELV-3JYELig0AvZXNNT0kaI2GAnwku-kR2qz2JVlCqLIRFDGHOUMrBFh9XW7DgEM&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yUBk3j2ratwLBhqhstm8l9qtZgOlD8eTsSnt-_tS&s'] } />
          )
        })
      }
    </div>
  );
};
export default Publicaciones;