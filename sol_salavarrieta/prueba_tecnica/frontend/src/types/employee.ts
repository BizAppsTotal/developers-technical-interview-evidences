export interface Employee {
  id: number;
  name: string;
  employee_code: string;
  trade: string;
}

export interface Timecard {
  id: number;
  employee_id: number;
  date: string;
  hours: number;
  cost_code: string;
}

export type CreateEmployeeDTO = Omit<Employee, "id">;
