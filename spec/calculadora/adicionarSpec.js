describe("Suite de testes de adicao", () => {

    let Calculadora = require('../../src/js/calculadora')

    it("deve retornar 5 para (2 e 2) como parametros", () => {
        expect(Calculadora.adicionar(2, 3)).toEqual(5)
    })

    it("deve retornar 6 para ('9' e '-3') no formato texto", () => {
        expect(Calculadora.adicionar('9', '-3')).toEqual(6)
    })

    it("deve retornar 4.5 para (1.5 e 3)", () => {
        expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5)
    })

    it("deve retornar 0 quando o valor 1 nao for numerico", () => {
        expect(Calculadora.adicionar(undefined, 10)).toEqual(0)
    })

    it("deve retornar 0 quando o valor 2 nao for numerico", () => {
        expect(Calculadora.adicionar(10, undefined)).toEqual(0)
    })

})