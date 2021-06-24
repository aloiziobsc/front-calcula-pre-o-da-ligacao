import React from 'react';
import PropTypes from 'prop-types';

function SeuPlano(props) {
  const { setPlano } = props;
  return (
    <div>
        <h3 className="center">Selecione seu Plano:</h3>
        <div className="escolha-seu-plano">
          <div>
            <input type="radio" id="FaleMais30" name="plano" value="30" onChange={({ target }) => {
              let minPlano = parseInt(target.value, 10)
              setPlano(minPlano)}}/>
            <label htmlFor="FaleMais30">FaleMais30</label>
          </div>
          <div>
            <input type="radio" id="FaleMais60" name="plano" value="60" onChange={({ target }) => {
              let minPlano = parseInt(target.value, 10)
              setPlano(minPlano)}}/>
            <label htmlFor="FaleMais60">FaleMais60</label>
          </div>
          <div>
            <input type="radio" id="FaleMais120" name="plano" value="120" onChange={({ target }) => {
              let minPlano = parseInt(target.value, 10)
              setPlano(minPlano)}}/>
            <label htmlFor="FaleMais120">FaleMais120</label>
          </div>
        </div>
    </div>
  );
}

SeuPlano.propTypes = {
  setPlano: PropTypes.func.isRequired,
};

export default SeuPlano;
