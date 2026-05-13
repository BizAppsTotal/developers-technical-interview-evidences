import { timeCardEmployeeDTO } from './create-time-card-employee.dto';

export class CreateEmployeeDto {
  name!: string;
  employee_code!: string;
  trade!: string;
  timecards!: timeCardEmployeeDTO;
}
