const precoLigacao = (origem, destino, minutos) => {
    minutos = parseInt(minutos, 10)
    if (minutos < 0) {
        return 0
    }
    else if (origem === '011') {
        if (destino === '016') {
            return minutos * 1.9
        }
        else if (destino === '017') {
            return minutos * 1.7
        }
        else if (destino === '018') {
            return minutos * 0.9
        }
    }
    else if (origem === '016') {
        if (destino === '011') {
            return minutos * 2.9
        }
    }
    else if (origem === '017') {
        if (destino === '011') {
            return minutos * 2.7
        }
    }
    else if (origem === '018') {
        if (destino === '011') {
            return minutos * 1.9
        }
    }
}

const formatPrecoDaLigacao = (valor) => {
    return ((valor * 10) / 10).toFixed(2).toString().replace('.', ',')
}

const escolheOrigem = (target, setOrigem, setDestino) => {
    setOrigem(target)
    if (target !== '011') {
      setDestino('011')
    }
  }

export {
    precoLigacao,
    escolheOrigem,
    formatPrecoDaLigacao,
}
