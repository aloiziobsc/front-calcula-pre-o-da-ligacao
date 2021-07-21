import React, { useContext, useState, useEffect } from 'react';
import SeuPlano from './SeuPlano'
import ComparacaoPrecos from './ComparacaoPrecos'
import TelefonesContext from '../context/context'
import { escolheOrigem } from '../services/index'

function CardLigacao() {
  const [plano, setPlano] = useState(0)
  const [mostrarPreco, setMostrarPreco] = useState(false)
  const [origem, setOrigem] = useState('011')
  const [minutos, setMinutos] = useState(0)
  const [destino, setDestino] = useState('016')
  const [cardVisible, setCardVisible] = useState(true)

  const {
    parOrigemDestino,
  } = useContext(TelefonesContext)

  useEffect(() => {
  }, [origem, mostrarPreco]);

  return (
    <React.Fragment>
      { cardVisible && (
        <div className="card-container">
          <button className="button-X" onClick={() => setCardVisible(false)}>x</button>
          <SeuPlano setPlano = { setPlano }/>
          <h4>Ligação:</h4>
          <div className="center addMargin">
            <span>Origem:</span>
            <select data-testid="select-option" name="" onChange={({ target }) => escolheOrigem(target.value, setOrigem, setDestino)}>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value= "018">018</option>
            </select>
            <span className="addMargin">📞 ➡️</span>
            <span>Destino:</span>
            <select data-testid="select-option" name="" onChange={({ target }) => setDestino(target.value)}>
              {parOrigemDestino[origem].map((item, index) => <option key={index} value={`${item}`}>{`${item}`}</option>)}
            </select>
            <div className="center addMargin">
              <span>Minutos:</span>
              <input className="arredonda" type="number" placeholder="ex: 10" onChange={({ target }) => setMinutos(target.value)}/>
            </div>
            <button disabled={!plano || !minutos} type="button" className="arredonda" onClick={() => setMostrarPreco(true)}>
              Calcular
            </button>
            {mostrarPreco && (
            <ComparacaoPrecos plano = { plano } origem = { origem } destino = { destino } minutos= { minutos }/>
            )}
          </div>
        </div>)
      }
    </React.Fragment>
  );
}

export default CardLigacao;
