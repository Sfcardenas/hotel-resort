function esReservaValida(habitacion, noches) {
    // Validar que sean números y no estén vacíos
    if (typeof habitacion !== 'number' || typeof noches !== 'number') return false;
    
    // Validar reglas del negocio
    if (habitacion <= 0) return false;
    if (noches <= 0) return false;

    return true;
}

module.exports = { esReservaValida };