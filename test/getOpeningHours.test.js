const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('teste se getOpeningHours é uma function', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  test('Se o parametro for undefined a função deve retornar objeto hours', () => {
    const objeto = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(objeto);
  });
  test('teste se em "Monday" está fechado para qualquer horário', () => {
    expect(getOpeningHours('Monday', '03:00-PM')).toBe('The zoo is closed');
  });
  test('teste se em "Tuesday" está fechado para qualquer horário', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  test('teste se em "Wednesday" está fechado para qualquer horário', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  test('getOpeningHours("Wednesday", "X9:00-PM") lança algum erro', () => {
    expect(() => getOpeningHours('Wednesday', 'X9:00-PM')).toThrow(('The hour should represent a number'));
  });
  test('getOpeningHours("Wednesday", "09:X0-PM") lança algum erro', () => {
    expect(() => getOpeningHours('Wednesday', '09:X0-PM')).toThrow(('The minutes should represent a number'));
  });
  test('getOpeningHours("Thu", "09:00-AM") lança algum erro', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(('The day must be valid. Example: Monday'));
  });
  test('getOpeningHours("Friday", "09:00-XM") lança algum erro', () => {
    expect(() => getOpeningHours('Friday', '09:00-XM')).toThrow(('The abbreviation must be \'AM\' or \'PM\''));
  });
  test('getOpeningHours("Friday", "13:00-AM") lança algum erro', () => {
    expect(() => getOpeningHours('Friday', '13:00-AM')).toThrow(('The hour must be between 0 and 12'));
  });
  test('getOpeningHours("Friday", "09:64-AM") lança algum erro', () => {
    expect(() => getOpeningHours('Friday', '09:64-AM')).toThrow(('The minutes must be between 0 and 59'));
  });
});
