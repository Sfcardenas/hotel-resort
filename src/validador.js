function esReservaValida(habitacion, noches) {
    // 1. Si los datos no son números, rechaza (Evita errores de texto o undefined)
    if (typeof habitacion !== 'number' || typeof noches !== 'number') {
        return false;
    }

    // 2. Si la habitación es 0 o negativa, rechaza
    if (habitacion <= 0) {
        return false;
    }

    // 3. Si las noches son 0 o negativas, rechaza
    if (noches <= 0) {
        return false;
    }

    // 4. Si pasó todos los filtros anteriores, la reserva es válida
    return true;
}

module.exports = { esReservaValida };