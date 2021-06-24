import React, { useState, useEffect } from 'react';
import CardLigacao from '../components/CardLigacao'
import '../css/cards.css'

function Home() {
  const [arrCards] = useState([<CardLigacao key={0}/>])
  const [quantAddCards, setquantAddCards] = useState(1)
  const addLigacao = () => {
    arrCards.push(<CardLigacao key={quantAddCards}/>)
    setquantAddCards(quantAddCards + 1)
  }

  useEffect(() => {
  }, [arrCards]);

  return (
    <React.Fragment>
      <h1 className="center">Telzir 📱</h1>
      <p>Na Telzir é mais fácil controlar seus gastos, aqui você pode simular seu consumo.
        De forma rápida e prática. Escolhendo o melhor plano para cada ligação 🐖💰.</p>
      <h2>Faça sua simulação:</h2>
      <div className="card-div center">
        { arrCards && arrCards.map((component) => component)}
      </div>
      <div className="center">
        <button type="button" className="center arredonda" onClick={() => {addLigacao()}}>
          Calcular nova ligação
        </button>
      </div>
    </React.Fragment>
  );
}

export default Home;
