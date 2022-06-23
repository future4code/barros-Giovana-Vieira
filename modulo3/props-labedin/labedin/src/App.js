import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaImagem from './img/gi.jpg';
import ImagemVivo from './img/vivo.jpg';
import ImagemCna from './img/cna.jpg';
import ImagemEmail from './img/email.jpg'
import ImagemEndereco from './img/endereco.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {MinhaImagem}
          nome= "Giovana Inez Vieira" 
          descricao="Meu nome é Giovana Vieira, tenho 23 anos. Sou apaixonada por tecnologia. Estou estudando e me preparando tecnicamente pra ser uma Desenvolvedora Full Stack. Busco oportunidade na área a fim de aprimorar meu conhecimento, técnica, prática, iniciar meu plano de carreira e contribuir com minhas habilidades na minha futura empresa contratante."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
          <CardPequeno 
          imagem= {ImagemEmail}
          conteudo= "E-mail: gioivieira@gmail.com"
        />

        <CardPequeno 
          imagem= {ImagemEndereco}
          conteudo= "Endereço: Rua Labenu, 135"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {ImagemVivo}
          nome="Infocell Celulares (Revenda da operadora VIVO)" 
          descricao="Consultora de vendas no atendimento ao público, Auxiliar de Escritório, Caixa e Backoffice de 09/2016 até 07/2021."        
        /> 
        <CardGrande
          imagem= {ImagemCna}
          nome="Escola de Idiomas - CNA São Sebastião do Paraíso" 
          descricao="Auxiliar administrativo de 08/2021 até o atual momento." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
