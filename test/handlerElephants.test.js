const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
    test('Se handlerElephants é function', () => {
        expect(typeof handlerElephants).toBe('function');
    })
    test('Se o parametro for undefined a função deve retornar undefined', () => {
        expect(handlerElephants()).toBeUndefined();
    })
    test('Se o parametro não for uma string retorna "Parâmetro inválido, é necessário uma string"', () => {
        expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
    })
    test('Se o ao receber "count" retorna a quantidade de residentes que é 4', () => {
        expect(handlerElephants('count')).toBe(4);
    })
    test(`Se o ao receber "names" retorna os nomes de residentes [ 'Ilana', 'Orval', 'Bea', 'Jefferson' ]`, () => {
        expect(handlerElephants('names')).toEqual([ 'Ilana', 'Orval', 'Bea', 'Jefferson' ]);
    })
    test('Se o ao receber "averageAge" retorna a media de idade de residentes', () => {
        expect(handlerElephants('averageAge')).toBe(10.5);
    })
    test('Se o ao receber handlerElephants("param") diferente de count, names ou averageAge retorna null', () => {
        expect(handlerElephants('errado')).toBeNull();
    })
    test('Se o ao receber um parametro com mesma nome da chave no objeto exemplo: handlerElephants("name") retonar o valor  "elephants"', () => {
        expect(handlerElephants('name')).toEqual('elephants');
    })
});
