const calculadora = require('../calculadora');

describe('soma', () => {
    it('Retorna 4, quando numA = 2 e numB = 2', () => {
        const numA = 2;
        const numB = 2;

        expect(calculadora.soma(numA, numB)).toBe(4);
    })
});

describe('subtração', () => {
    it('Retorna 0, quando numA = 2 e numB = 2', () => {
        const numA = 2;
        const numB = 2;

        expect(calculadora.subtraco(numA, numB)).toBe(0);
    })
});

describe('multiplicação', () => {
    it('Retorna 4, quando numA = 2 e numB = 2', () => {
        const numA = 2;
        const numB = 2;

        expect(calculadora.multiplicacao(numA, numB)).toBe(4);
    })
});

describe('divisão', () => {
    it('Retorna 1, quando numA = 2 e numB = 2', () => {
        const numA = 2;
        const numB = 2;

        expect(calculadora.divisao(numA, numB)).toBe(1);
    }),
    it('Retorna undefined, quando numB = 0', () => {
        const numA = 2;
        const numB = 0;

        expect(calculadora.divisao(numA, numB)).toBe(undefined);
    })
});