class AppointmentManager {
  constructor() {
    this._appointments = [];
    this._nextId = 1;
  }

  addAppointment({ paciente, fechaHora, motivo }) {
    if (!paciente || !fechaHora || !motivo) {
      throw new Error('Faltan campos obligatorios');
    }
    const appointment = {
      id: String(this._nextId++),
      paciente,
      fechaHora,
      motivo,
    };
    this._appointments.push(appointment);
    return appointment;
  }

  listAppointments() {
    return [...this._appointments];
  }

  deleteAppointment(id) {
    const index = this._appointments.findIndex(a => a.id === String(id));
    if (index === -1) return false;
    this._appointments.splice(index, 1);
    return true;
  }
}

module.exports = AppointmentManager;
