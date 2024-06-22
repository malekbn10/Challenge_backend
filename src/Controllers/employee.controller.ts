import { employeeServices } from "../Services/employee.service";
import { NextFunction, Request, Response } from "express";
import { EmployeesSchemaValidate } from "../Models/employee";
import HttpException from "../Exceptions/HttpException";
import EmployeeNotFoundException from "../Exceptions/EmployeeNotFoundException";
import ValidationException from "../Exceptions/ValidationException";

class employeeController {

    //add Employee controller
    addEmployee = async (req: Request, res: Response, next : NextFunction) => {

        //data to be saved in database
        const data = {
            name: req.body.name,
            email: req.body.email,
            position: req.body.position,
            department: req.body.department,
            salary: req.body.salary,
        }

        //validate the request
        const { error, value } = EmployeesSchemaValidate.validate(data);

        if (error) {
            next(new ValidationException(error.message));

        } else {
            //call the create employee function in the service and pass the data from the request
            const employee = await employeeServices.createEmployee(value);
            res.status(201).send(employee);
        }

    }

    //update Employee controller
    updateEmployee = async (req: Request, res: Response,next : NextFunction) => {

        const id = req.params.id
        const { error, value } = EmployeesSchemaValidate.validate(req.body);

        if (error) {
            next(new ValidationException(error.message));

        } else {
            //call the update employee function in the service and pass the data from the request
            const employee = await employeeServices.updateEmployee(id, value);
            if (employee) {
            res.status(201).send(employee);    
            } else {
            next(new EmployeeNotFoundException(id));
                
            }
        }
    }

    //delete a post
    deleteEmployee = async (req: Request, res: Response , next : NextFunction)  => {
        const id = req.params.id
        const employee = await employeeServices.deleteEmployee(id);
        if (employee) {
        res.send(employee);
            
        } else {
            next(new EmployeeNotFoundException(id));
            
        }

    }
    //retrive Employees controller
    getEmployees = async (req: Request, res: Response , next : NextFunction) => {

        const employees = await employeeServices.getEmployees();
        if (employees) {
        res.status(201).send(employees);
            
        } else {
            next(new HttpException(404, ' No Employees found'));

        }

    }
}
export const EmployeeController = new employeeController();
