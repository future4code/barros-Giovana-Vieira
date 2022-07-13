import React from 'react';
import { useState } from 'react';
import Post from './components/Post/Post';
import {MainContainer, MyForm} from './style'

function App() {

  const [listaPosts, setListaPosts] = useState([
    {nome: 'paulinha', fotoUser: 'https://picsum.photos/50/50', fotoPublicacao: 'https://picsum.photos/200/150'},
    {nome: 'giovana', fotoUser: 'https://picsum.photos/100/100', fotoPublicacao: 'https://picsum.photos/300/200'},
    {nome: 'fernando', fotoUser: 'https://picsum.photos/150/150', fotoPublicacao: 'https://picsum.photos/400/300'}
  ])

  console.log(listaPosts)


  const lista = listaPosts.map((itens,indice)=>{
    return <Post key={indice} nomeUsuario={itens.nome} fotoUsuario={itens.fotoUser} fotoPost={itens.fotoPublicacao}/>
  })

  const [inputName, setInputName] = useState("")
  const [inputFotoUsuario, setInputFotoUsuario] = useState("")
  const [inputPublicacao, setInputPublicacao] = useState("")

  const mudancaNome = (event) => {
    setInputName(event.target.value)
    console.log(inputName)
  }

  const mudancaFotoUser = (event) => {
    setInputFotoUsuario(event.target.value)
    console.log(inputFotoUsuario)
  }

  const mudancaFotoPublicacao = (event) => {
    setInputPublicacao(event.target.value)
    console.log(inputPublicacao)
  }

  const novaPublicacao = (event) => {
    event.preventDefault()
    const novoFeed = [...listaPosts, {nome: inputName , fotoUser: inputFotoUsuario , fotoPublicacao: inputPublicacao}]
    setListaPosts(novoFeed)
    console.log(novoFeed)
    setInputName("")
    setInputFotoUsuario("")
    setInputPublicacao("")
  }
  
  return(

    

    <MainContainer>

    <MyForm>
      <input type="text" required placeholder='User' value={inputName} onChange={mudancaNome}></input>
      <input type="url" required placeholder='Link Foto User' value={inputFotoUsuario} onChange={mudancaFotoUser}></input>
      <input type="url" required placeholder='Link Imagem Publicação' value={inputPublicacao} onChange={mudancaFotoPublicacao}></input>
      <button onClick={novaPublicacao}>Adicionar publicação</button>
    </MyForm>

      {lista}
      
    </MainContainer>


)


}


export default App;
