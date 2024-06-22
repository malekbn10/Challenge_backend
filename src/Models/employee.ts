import { Schema ,model } from "mongoose";
import Joi from "joi";

//Creating the validation Schema
export const EmployeesSchemaValidate = Joi.object({
    name : Joi.string().required(),
    email: Joi.string().email().required(),
    position: Joi.string().required(),
    department: Joi.string(),
    salary: Joi.number(),    
});


//Creating the employee interface
interface IEmployee {
    name : string ,
    email : string,
    position : string ,
    department : string,
    salary : number,
}
//Creating the employee Schema
const employeeSchema = new Schema<IEmployee>({
    name : {type : String , required : true},
    email : {type : String , required : true, unique : true},
    position : {type : String ,required : true},
    department : {type : String},
    salary : {type : Number},
});

//Creating the model
export const Employee = model<IEmployee>('Employee', employeeSchema );

