import { employeeServices } from "../Services/employee.service";
import { Request, Response } from "express";
import { EmployeesSchemaValidate } from "../Models/employee";

class employeeController {

    //add Employee controller
    addEmployee = async (req: Request, res: Response) => {

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
            res.send(error.message)

        } else {
            //call the create employee function in the service and pass the data from the request
            const employee = await employeeServices.createEmployee(value);
            res.status(201).send(employee);
        }

    }

    //update Employee controller
    updateEmployee = async (req: Request, res: Response) => {

        const id = req.params.id
        const { error, value } = EmployeesSchemaValidate.validate(req.body);

        if (error) {
            res.send(error.message);

        } else {
            //call the update employee function in the service and pass the data from the request
            const employee = await employeeServices.updateEmployee(id, value);
            res.status(201).send(employee);
        }
    }

    //delete a post
    deleteEmployee = async (req: Request, res: Response) => {
        const id = req.params.id
        await employeeServices.deleteEmployee(id)

        res.send('Employe deleted successfully');
    }
    //retrive Employees controller
    getEmployees = async (req: Request, res: Response) => {

        const employees = await employeeServices.getEmployees();
        res.status(201).send(employees);

    }
}
export const EmployeeController = new employeeController();
