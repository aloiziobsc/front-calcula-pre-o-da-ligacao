import React, { useState } from 'react';

// Proptypes
import PropTypes from 'prop-types';

// Context
import TelefonesContext from '../context/context';

export default function TelefonesProvider({ children }) {
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
  };

  return (
    <TelefonesContext.Provider value={ context }>
      { children }
    </TelefonesContext.Provider>
  );
}

TelefonesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
