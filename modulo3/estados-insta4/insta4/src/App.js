import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={'giovana'}
            fotoUsuario={'https://picsum.photos/100/100'}
            fotoPost={'https://picsum.photos/300/200'}
          />
          <Post
            nomeUsuario={'fernando'}
            fotoUsuario={'https://picsum.photos/150/150'}
            fotoPost={'https://picsum.photos/400/300'}
          />
  </div>
)

}


export default App;
