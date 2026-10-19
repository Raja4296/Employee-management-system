import { Employee } from "./models/Employee.js";
import { EmployeeRepository } from "./repositories/EmployeeRepository.js";

console.log("EMPLOYEE MANAGEMENT APPLICATION STARTED!!!");

const empOne = new Employee(101, "Raja", 150000);

const empRepo = new EmployeeRepository();

empRepo.add(empOne);
empRepo.createEmployee(`UDAY`, 50000);
empRepo.createEmployee(`Virat`, 10000);
empRepo.createEmployee(`Rohit`, 20000);
empRepo.createEmployee(`Dhoni`, 50000);

const result = empRepo.getAll();
console.log(result);
