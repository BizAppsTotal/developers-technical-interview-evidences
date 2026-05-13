import type { Employee, CreateEmployeeDTO } from "../types/employee";
import { mockEmployees } from "../data/mockData";

export const employeeApi = {
  getAll: async (): Promise<Employee[]> => {
    return Promise.resolve(mockEmployees);
  },
  create: async (employee: CreateEmployeeDTO): Promise<Employee> => {
    return Promise.resolve({
      id: mockEmployees.length + 1,
      ...employee,
    });
  },
};
