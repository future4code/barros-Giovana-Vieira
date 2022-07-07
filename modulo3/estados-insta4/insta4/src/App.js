import React from 'react';
import Post from './components/Post/Post';
import {MainContainer} from './style'

function App() {

  const listaPosts = [
    {nome: 'paulinha', fotoUser: 'https://picsum.photos/50/50', fotoPublicacao: 'https://picsum.photos/200/150'},
    {nome: 'giovana', fotoUser: 'https://picsum.photos/100/100', fotoPublicacao: 'https://picsum.photos/300/200'},
    {nome: 'fernando', fotoUser: 'https://picsum.photos/150/150', fotoPublicacao: 'https://picsum.photos/400/300'}
  ]

  console.log(listaPosts)

  
  return(

    <MainContainer>

    {listaPosts.map((itens,indice)=>{
      return <Post key={indice} nomeUsuario={itens.nome} fotoUsuario={itens.fotoUser} fotoPost={itens.fotoPublicacao}/>
    })}

    </MainContainer>
  
)


}


export default App;
