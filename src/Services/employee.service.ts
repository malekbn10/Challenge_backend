import { Employee } from "../Models/employee";

export class employeeService {


    //Creating a new employee
    async createEmployee(data : any ){
        try {
            const newEmployee = await Employee.create(data);
            return newEmployee ; 
        } catch (error) {
            console.log(error);
        }
    }

    //Update an employee
    async updateEmployee(id : string ,data : any ){
        try {
            const employee = await Employee.findByIdAndUpdate({_id : id} , data , {new : true});
            if (!employee){
                return "employee not found"
            }
            return employee ;
        } catch (error) {
            console.log(error);
        }
    }


    //Delete an employee
    async deleteEmployee(id: string) {
        try {
            const employee = await Employee.findByIdAndDelete(id)
            if (!employee) {

                return "employee not found"
            
            }
        } catch (error) {
            console.log(error)
        }
    }

    //Retrive all employees
    async getEmployees(){
        try {
            const employees = await Employee.find();
            return employees ;
        } catch (error) {
            console.log(error);
        }
    }
}
export const employeeServices = new employeeService() ;
