import { Employee } from "./models/Employee.js"

console.log("EMPLOYEE MANAGEMENT APPLICATION STARTED!!!")

const empOne = new Employee(101,"Raja",150000)

console.log("*".repeat(10))

const empTwo = new Employee(102,`Pandi`,180000)

//Both objects we store inside an array

const employees:Employee[] = [empOne,empTwo]
console.log(employees)

function findEmployee(id:number): Employee | undefined{
const result = employees.find(function(element){
    return element.id === id
})
return result
}

function addEmployee(newEmployee:Employee){
    const result = findEmployee(newEmployee.id)
    if(result !== undefined){
        throw new Error("Employee ID already exist")
    }
    else{
        employees.push(newEmployee)
        console.log(`NEW EMPLOYEE ADDED SUCESSFULLY`)
    }
}

try{
addEmployee(new Employee(103,`Durai`,200000))
}
catch(error:any){
    console.log(error.message)
}

function generateEmpId():number{
    let id = 101
    while(findEmployee(id)!==undefined){
        id++
    }
    return id;
}

function createEmployee(name:string, salary:number):Employee{
    let id=generateEmpId()
    const emp = new Employee(id,name,salary)
    addEmployee(emp)
    return emp
}

const empFour=createEmployee(`Virat`, 10000)
const empFive=createEmployee(`Rohit`, 20000)
const empSix=createEmployee(`Dhoni`, 50000)
console.log(employees)

function updateSalary(id:number,newSalary:number):void {
    const emp = findEmployee(id)
    if(emp === undefined){
        throw new Error(`Employee ID is not found`)
    }
    else {
        console.log(`EMPLOYEE ID ${id} - SALARY UPDATED SUCESSFULLY`)
        emp.salary = newSalary;
        console.log(emp)
    }
}

try{
    updateSalary(101,500000)
}
catch(error:unknown){
    if(error instanceof Error){
        console.log(error.message)
    }
}