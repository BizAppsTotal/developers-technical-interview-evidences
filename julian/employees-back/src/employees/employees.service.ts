import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { timeCardEmployeeDTO } from './dto/create-time-card-employee.dto';

@Injectable()
export class EmployeesService {
  private employeesInMemory = [
    {
      id: 1,
      name: 'Juan Pérez',
      employee_code: 'juan.perez@empresa.com',
      trade: 'Desarrollador',
      timecards: [
        {
          id: 1,
          employee_id: '2026-05-01',
          date: '08:00',
          hours: '17:00',
          cost_code: 9,
        },
      ],
    },
    {
      id: 2,
      nombre: 'María Gómez',
      correo: 'maria.gomez@empresa.com',
      cargo: 'Diseñadora',
      activo: true,
      timecards: [],
    },
  ];

  create(createTimeCardEmployee: timeCardEmployeeDTO) {
    const newTimeCard = [];
  }

  findAll() {
    return this.employeesInMemory;
  }

  findOne(id: number) {
    const employee = this.employeesInMemory.find((emp) => emp.id === id);

    if (!employee) {
      throw new BadRequestException(
        `The employee with the id ${id} is not found!!!`,
      );
    }

    return employee.timecards;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
