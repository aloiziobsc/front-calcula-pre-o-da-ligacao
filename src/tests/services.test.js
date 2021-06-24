const services = require('../services/index')

describe('Testanto função precoLigacao', () => {
    it('A função deve calcular o preço correto da ligação', () => {
        expect(19).toEqual(services.precoLigacao('011', '016', '10'))
        expect(17).toEqual(services.precoLigacao('011', '017', '10'))
        expect(9).toEqual(services.precoLigacao('011', '018', '10'))
        expect(29).toEqual(services.precoLigacao('016', '011', '10'))
        expect(27).toEqual(services.precoLigacao('017', '011', '10'))
        expect(19).toEqual(services.precoLigacao('018', '011', '10'))
    })
    it('A função deve calcular o preço correto da ligação para minutos = 0', () => {
        expect(0).toEqual(services.precoLigacao('011', '016', '0'))
        expect(0).toEqual(services.precoLigacao('011', '017', '0'))
        expect(0).toEqual(services.precoLigacao('011', '018', '0'))
        expect(0).toEqual(services.precoLigacao('016', '011', '0'))
        expect(0).toEqual(services.precoLigacao('017', '011', '0'))
        expect(0).toEqual(services.precoLigacao('018', '011', '0'))
    })
    it('A função deve calcular o preço correto da ligação para minutos < 0', () => {
        expect(0).toEqual(services.precoLigacao('011', '016', '-1'))
        expect(0).toEqual(services.precoLigacao('011', '017', '-10000'))
        expect(0).toEqual(services.precoLigacao('011', '018', '-15'))
        expect(0).toEqual(services.precoLigacao('016', '011', '-1'))
        expect(0).toEqual(services.precoLigacao('017', '011', '-1'))
        expect(0).toEqual(services.precoLigacao('018', '011', '-1'))
    })
})

describe('Testanto função formatPrecoDaLigacao', () => {
    it('A função deve retornar uma string com duas casas decimais e vírgula', () => {
        expect('50,99').toEqual(services.formatPrecoDaLigacao(50.99))
        expect('50,99').toEqual(services.formatPrecoDaLigacao(50.994))
        expect('50,99').toEqual(services.formatPrecoDaLigacao(50.995))
        expect('51,00').toEqual(services.formatPrecoDaLigacao(50.996))
        expect('51,00').toEqual(services.formatPrecoDaLigacao(50.999))
        expect('11,30').toEqual(services.formatPrecoDaLigacao(11.3))
        expect('11,33').toEqual(services.formatPrecoDaLigacao(11.3333333))
        expect('11,34').toEqual(services.formatPrecoDaLigacao(11.3399999))
        expect('10,00').toEqual(services.formatPrecoDaLigacao(10))
        expect('0,00').toEqual(services.formatPrecoDaLigacao(0))
    })
})
