import { useEffect, useState } from "react";
import { employeeApi } from "../api/employeeApi";
import type { Employee } from "../types/employee";

function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await employeeApi.getAll();
        setEmployees(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Ocurrio un error inesperado al cargar los empleados",
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadEmployees();
  }, []);

  if (isLoading) {
    return (
      <section className="employee-list" aria-live="polite">
        <h1>Empleados</h1>
        <p>Cargando empleados...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="employee-list" aria-live="assertive">
        <h1>Empleados</h1>
        <p className="employee-list__error">{error}</p>
      </section>
    );
  }

  return (
    <section className="employee-list">
      <div className="employee-list__header">
        <h1>Empleados</h1>
        <span>{employees.length} registrados</span>
      </div>

      {employees.length === 0 ? (
        <p>No hay empleados registrados.</p>
      ) : (
        <ul className="employee-list__items">
          {employees.map((employee) => (
            <li className="employee-list__item" key={employee.id}>
              <div>
                <h2>{employee.name}</h2>
                <p>{employee.trade}</p>
              </div>
              <span>{employee.employee_code}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default EmployeeList;
