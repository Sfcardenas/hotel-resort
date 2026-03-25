function esReservaValida(habitacion, noches) {
    // Regla 1: La habitación debe ser un número positivo
    if (typeof habitacion !== 'number' || habitacion <= 0) return false;
    // Regla 2: Las noches deben ser al menos 1
    if (noches <= 0) return false;
    
    return true;
}


module.exports = { esReservaValida };