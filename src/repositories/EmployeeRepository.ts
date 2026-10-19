import { Employee } from "../models/Employee.js";

export class EmployeeRepository {
  private _employees: Employee[] = [];

  public getByID(id: number): Employee | undefined {
    const result = this._employees.find(function (element) {
      return element.id === id;
    });
    return result;
  }

  public add(newEmployee: Employee) {
    const result = this.getByID(newEmployee.id);
    if (result !== undefined) {
      throw new Error("Employee ID already exist");
    } else {
      this._employees.push(newEmployee);
      console.log(`NEW EMPLOYEE ADDED SUCESSFULLY`);
    }
  }

  public createEmployee(name: string, salary: number): Employee {
    let id = this.generateEmpId();
    const emp = new Employee(id, name, salary);
    this.add(emp);
    return emp;
  }

  public updateSalary(id: number, newSalary: number): void {
    const emp = this.getByID(id);
    if (emp === undefined) {
      throw new Error(`Employee ID is not found`);
    } else {
      console.log(`EMPLOYEE ID ${id} - SALARY UPDATED SUCESSFULLY`);
      emp.salary = newSalary;
      console.log(emp);
    }
  }

  private generateEmpId(): number {
    let id = 101;
    while (this.getByID(id) !== undefined) {
      id++;
    }
    return id;
  }

  public getAll(): Employee[] {
    return [...this._employees];
  }
}
