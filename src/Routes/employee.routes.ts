//importing modules
import express from "express";
import { EmployeeController } from './../Controllers/employee.controller';

//initiating the router
export const router = express.Router()

//add employee route
router.post('/',EmployeeController.addEmployee)

//get employees
router.get('/', EmployeeController.getEmployees)

//update an employee
router.put('/:id', EmployeeController.updateEmployee)

//delete an employee
router.delete('/:id', EmployeeController.deleteEmployee)