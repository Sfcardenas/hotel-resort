function esReservaValida(habitacion, noches) {
    // 1. Validar que AMBOS datos sean números (esto arregla los errores de texto/undefined)
    if (typeof habitacion !== 'number' || typeof noches !== 'number') {
        return false;
    }

    // 2. Validar que la habitación sea un número positivo
    if (habitacion <= 0) {
        return false;
    }

    // 3. Validar que las noches sean al menos 1
    if (noches <= 0) {
        return false;
    }

    // 4. Si pasó todo lo anterior, la reserva es perfecta
    return true;
}

module.exports = { esReservaValida };