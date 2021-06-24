import React from 'react';
import { precoLigacao, formatPrecoDaLigacao } from '../services/index'
import PropTypes from 'prop-types';

function ComparacaoPrecos(props) {
  const { plano, origem, minutos, destino } = props;
  let minutosForaDoPlano = minutos - plano

  return (
    <div className="center">
      <table>
        <thead>
          <tr>
            <th>Origem</th>
            <th>Destino</th> 
            <th>Tempo</th>
            <th>Plano</th>
            <th>Com Plano</th>
            <th>Sem Plano</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{origem}</td>
            <td>{destino}</td>
            <td>{minutos}</td>
            <td>{`Fale Mais ${plano}`}</td>
            <td>
              R$ {formatPrecoDaLigacao((precoLigacao(origem, destino, minutosForaDoPlano)) * 1.1)}
            </td>
            <td>
              R$ {formatPrecoDaLigacao(precoLigacao(origem, destino, minutos))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

ComparacaoPrecos.propTypes = {
  plano: PropTypes.number.isRequired,
  origem: PropTypes.string.isRequired,
  destino: PropTypes.string.isRequired,
  minutos: PropTypes.string.isRequired,
};

export default ComparacaoPrecos;
