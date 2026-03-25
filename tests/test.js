const { esReservaValida } = require('../src/validador');

test('Debe aceptar una reserva válida', () => {
    expect(esReservaValida(101, 3)).toBe(true);
});

test('Debe rechazar si la habitación es negativa', () => {
    expect(esReservaValida(-5, 2)).toBe(false);
});

test('Debe rechazar si las noches son 0', () => {
    expect(esReservaValida(202, 0)).toBe(false);
});