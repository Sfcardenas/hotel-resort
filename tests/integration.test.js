const request = require('supertest');
const app = require('../src/app');

describe('Pruebas de Integración - API Hotel', () => {
    
    test('1. Debería obtener una lista vacía de reservas al inicio', async () => {
        const res = await request(app).get('/reservas');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);
    });

    test('2. Debería crear una reserva válida', async () => {
        const res = await request(app)
            .post('/reservas')
            .send({ habitacion: 202, noches: 5 });
        expect(res.statusCode).toEqual(201);
        expect(res.body.habitacion).toBe(202);
    });

    test('3. Debería rechazar una reserva inválida', async () => {
        const res = await request(app)
            .post('/reservas')
            .send({ habitacion: -5, noches: 2 });
        expect(res.statusCode).toEqual(400);
    });

    test('4. Debería borrar todas las reservas', async () => {
        const res = await request(app).delete('/reservas');
        expect(res.statusCode).toEqual(204);
    });

    test('5. Verificación final: lista vacía tras borrar', async () => {
        const res = await request(app).get('/reservas');
        expect(res.body.length).toBe(0);
    });
});