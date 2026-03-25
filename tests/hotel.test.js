const { esReservaValida } = require('../src/validador');

test('1. Reserva válida (Habitación 101, 3 noches)', () => {
    expect(esReservaValida(101, 3)).toBe(true);
});

test('2. Error: Habitación con número negativo', () => {
    expect(esReservaValida(-1, 3)).toBe(false);
});

test('3. Error: Cero noches de estadía', () => {
    expect(esReservaValida(101, 0)).toBe(false);
});

test('4. Error: Noches negativas', () => {
    expect(esReservaValida(101, -2)).toBe(false);
});

test('5. Error: Habitación es un texto', () => {
    expect(esReservaValida("Suite", 3)).toBe(false);
});

test('6. Error: Habitación es 0', () => {
    expect(esReservaValida(0, 3)).toBe(false);
});

test('7. Reserva válida: Habitación VIP (500, 1 noche)', () => {
    expect(esReservaValida(500, 1)).toBe(true);
});

test('8. Error: Faltan datos (undefined)', () => {
    expect(esReservaValida()).toBe(false);
});

test('9. Error: Noches es un texto', () => {
    expect(esReservaValida(101, "muchas")).toBe(false);
});

test('10. Erro: Habitación muy grande (pero válida)', () => {
    expect(esReservaValida(9999, 10)).toBe(true);
});