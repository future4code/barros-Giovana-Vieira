import pic from './gi.jpg';
import './App.css';

function App() {
  let botao=() => {
    alert("Boa noite!")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Olá! Meu nome é Giovana Vieira!</h2>
        <img src={pic} className="Pic" alt="pic" />
        <p>Este é meu primeiro site React</p>
        <button onClick={botao}>Aperte este botão</button>
      </header>
    </div>
  );
}

export default App;
