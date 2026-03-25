const express = require('express');
const { esReservaValida } = require('./validador');
const app = express();

app.use(express.json()); // Permite que el servidor entienda datos en formato JSON

let reservas = []; // Nuestra base de datos temporal

// 1. ENDPOINT DE LECTURA (GET): Ver todas las reservas
app.get('/reservas', (req, res) => {
    res.json(reservas);
});

// 2. ENDPOINT DE CREACIÓN (POST): Crear una nueva reserva
app.post('/reservas', (req, res) => {
    const { habitacion, noches } = req.body;

    if (esReservaValida(habitacion, noches)) {
        const nuevaReserva = { id: reservas.length + 1, habitacion, noches };
        reservas.push(nuevaReserva);
        return res.status(201).json(nuevaReserva);
    }

    res.status(400).json({ error: "Datos de reserva inválidos" });
});

// 3. ENDPOINT DE BORRADO (DELETE): Limpiar todas las reservas
app.delete('/reservas', (req, res) => {
    reservas = [];
    res.status(204).send();
});

module.exports = app;