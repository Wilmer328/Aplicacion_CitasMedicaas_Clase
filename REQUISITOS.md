# Práctica TDD — Aplicación de Citas Médicas

## Objetivo
Construir una pequeña aplicación web para gestionar citas médicas siguiendo el flujo TDD: escribir pruebas primero, implementar el código mínimo para pasar las pruebas y refactorizar, guardando commits intermedios que evidencien el proceso.

## Requerimientos funcionales (incrementales)
1. Crear una cita con los campos: `paciente`, `fechaHora`, `motivo`.
2. Listar todas las citas existentes.
3. Eliminar una cita por `id`.

Cada funcionalidad se trabajará con el ciclo TDD (red → green → refactor) y deberá incluir:
- Archivo de prueba que falla primero.
- Código mínimo para pasar la prueba.
- Commits intermedios: prueba, implementación, refactor.

## Reglas para las pruebas
- Usar patrón AAA (Arrange, Act, Assert).
- Preferir pruebas unitarias para la lógica (no para la UI).
- Mantener los tests pequeños y específicos.

## Entregables
- `REQUISITOS.md` (este archivo)
- Código fuente en `src/`
- Tests en `tests/`
- `index.html` con una UI mínima
- Histórico de commits que muestre el proceso TDD

## Notas para el docente
El repositorio contendrá commits intermedios que muestran cada paso del ciclo TDD para al menos 3 funcionalidades. Estoy disponible para ejecutar los comandos de Git localmente si autoriza la conexión a su cuenta GitHub.

## Evidencia (commits importantes)
En el repositorio se registran los commits que muestran el flujo TDD. Enlace al repo remoto: https://github.com/Wilmer328/Aplicacion_CitasMedicaas_Clase

- `chore: add project skeleton, requirements and initial tests` — creación de esqueleto y tests iniciales: https://github.com/Wilmer328/Aplicacion_CitasMedicaas_Clase/commit/63ce8c6
- `test: add listing appointments test (TDD)` — prueba para listar citas: https://github.com/Wilmer328/Aplicacion_CitasMedicaas_Clase/commit/2726bcf
- `test: add delete appointment tests (TDD)` — pruebas para eliminar citas: https://github.com/Wilmer328/Aplicacion_CitasMedicaas_Clase/commit/4fba287
- `refactor: normalize id handling in deleteAppointment` — refactor y limpieza: https://github.com/Wilmer328/Aplicacion_CitasMedicaas_Clase/commit/f94ae3a

Para revisar el proceso paso a paso, abra cada commit desde los enlaces anteriores en GitHub.
