//importing modules
import express from "express";
import { EmployeeController } from './../Controllers/employee.controller';

//initiating the router
export const employeeRouter = express.Router()

//add employee route
employeeRouter.post('/',EmployeeController.addEmployee)

//get employees
employeeRouter.get('/', EmployeeController.getEmployees)

//update an employee
employeeRouter.put('/:id', EmployeeController.updateEmployee)

//delete an employee
employeeRouter.delete('/:id', EmployeeController.deleteEmployee)