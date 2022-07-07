import React, {useState} from 'react'
import {PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter} from '../../style'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'



function Post(props){
  
  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarioUsuario , setComentarioUsuario] = useState("")

  const handleComentarioUsuario = (event) => {
    setComentarioUsuario(event.target.value)
    console.log(comentarioUsuario)
  }

  const onClickCurtida = () => {

    setCurtido(!curtido)

    console.log('Curtiu!')

    if(!curtido) {      
      setnumeroCurtidas(numeroCurtidas + 1)
    } else {      
      setnumeroCurtidas(numeroCurtidas - 1)      
    } 

  }
  
  const onClickComentario = () => {
    setComentando(!comentando)
    console.log(comentando)
  } 
  
  const aoEnviarComentario = () => {
    setComentando(false)
    if (comentarioUsuario!==""){ 
      setNumeroComentarios(numeroComentarios + 1) 
    }
    setComentarioUsuario("")
  }

  
    let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} comentario={comentarioUsuario} onChangeComentario={handleComentarioUsuario} />
    }

  return(
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  )
}


export default Post