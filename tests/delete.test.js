const AppointmentManager = require('../src/appointments');

describe('AppointmentManager — eliminar cita (TDD)', () => {
  test('eliminar devuelve true y remueve la cita existente', () => {
    // Arrange
    const mgr = new AppointmentManager();
    const creado = mgr.addAppointment({ paciente: 'X', fechaHora: '2026-08-15T09:00', motivo: 'Test' });

    // Act
    const res = mgr.deleteAppointment(creado.id);

    // Assert
    expect(res).toBe(true);
    expect(mgr.listAppointments()).toHaveLength(0);
  });

  test('eliminar id inexistente devuelve false', () => {
    // Arrange
    const mgr = new AppointmentManager();

    // Act & Assert
    expect(mgr.deleteAppointment('999')).toBe(false);
  });
});
