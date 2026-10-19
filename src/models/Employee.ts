import type { EmployeeData } from "./EmployeeData.js";

export class Employee implements EmployeeData{
    private _id:number;
    private _name:string;
    private _salary:number;

    constructor(id:number,name:string,salary:number){
        this._id=id;
        this._name=name;
        this._salary=salary;
    }

    
    public get id() : number {
        return this._id
    }

    public set id(id:number){
        this._id = id
    }

    public get name(): string {
        return this._name
    }

    public set name(name:string){
        this._name = name
    }

    public get salary(): number {
        return this._salary
    }

    public set salary(salary:number){
        this._salary = salary
    }
    
    public annualSalary():number{
        return this._salary * 12
    }
}