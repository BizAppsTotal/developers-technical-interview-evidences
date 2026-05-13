import type { Employee, Timecard } from "../types/employee";

export const mockEmployees: Employee[] = [
  {
    id: 1,
    name: "Carlos Mendoza",
    employee_code: "EMP-001",
    trade: "Electricista",
  },
  {
    id: 2,
    name: "Laura Gomez",
    employee_code: "EMP-002",
    trade: "Soldadora",
  },
  {
    id: 3,
    name: "Andres Rojas",
    employee_code: "EMP-003",
    trade: "Carpintero",
  },
  {
    id: 4,
    name: "Mariana Torres",
    employee_code: "EMP-004",
    trade: "Supervisora",
  },
];

export const mockTimecards: Timecard[] = [
  {
    id: 1,
    employee_id: 1,
    date: "2026-05-01",
    hours: 8,
    cost_code: "CC-100",
  },
  {
    id: 2,
    employee_id: 2,
    date: "2026-05-01",
    hours: 7.5,
    cost_code: "CC-200",
  },
  {
    id: 3,
    employee_id: 3,
    date: "2026-05-02",
    hours: 6,
    cost_code: "CC-100",
  },
  {
    id: 4,
    employee_id: 4,
    date: "2026-05-02",
    hours: 8,
    cost_code: "CC-300",
  },
];
