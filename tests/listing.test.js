const AppointmentManager = require('../src/appointments');

describe('AppointmentManager — listar citas (TDD)', () => {
  test('list devuelve todas las citas en orden de inserción', () => {
    // Arrange
    const mgr = new AppointmentManager();
    const a1 = { paciente: 'A', fechaHora: '2026-08-14T09:00', motivo: 'Consulta A' };
    const a2 = { paciente: 'B', fechaHora: '2026-08-14T10:00', motivo: 'Consulta B' };

    // Act
    mgr.addAppointment(a1);
    mgr.addAppointment(a2);
    const lista = mgr.listAppointments();

    // Assert
    expect(lista).toHaveLength(2);
    expect(lista[0].paciente).toBe('A');
    expect(lista[1].paciente).toBe('B');
  });
});
