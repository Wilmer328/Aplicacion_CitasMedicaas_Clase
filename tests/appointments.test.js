const AppointmentManager = require('../src/appointments');

describe('AppointmentManager — crear cita (TDD)', () => {
  test('debe crear una cita válida y retornarla', () => {
    // Arrange
    const mgr = new AppointmentManager();
    const nuevo = { paciente: 'Ana', fechaHora: '2026-08-13T10:00', motivo: 'Consulta general' };

    // Act
    const creado = mgr.addAppointment(nuevo);

    // Assert
    expect(creado).toHaveProperty('id');
    expect(creado.paciente).toBe('Ana');
    expect(mgr.listAppointments()).toHaveLength(1);
  });

  test('debe lanzar error si faltan campos (AAA)', () => {
    // Arrange
    const mgr = new AppointmentManager();
    const invalido = { paciente: 'Luis', fechaHora: '' };

    // Act & Assert
    expect(() => mgr.addAppointment(invalido)).toThrow();
  });
});
