import React, { useState } from 'react';

// Proptypes
import PropTypes from 'prop-types';

// Context
import TelzirContext from '../context/context';

export default function TelzirProvider({ children }) {
  const [cardsRemovidos, setCardsRemovidos] = useState(0)
  const [parOrigemDestino, setparOrigemDestino] = useState(
    {
      '011': ['016', '017', '018'],
      '016': ['011'],
      '017': ['011'],
      '018': ['011'],
    });


  const context = {
    parOrigemDestino,
    setparOrigemDestino,
    cardsRemovidos,
    setCardsRemovidos,
  };

  return (
    <TelzirContext.Provider value={ context }>
      { children }
    </TelzirContext.Provider>
  );
}

TelzirProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
