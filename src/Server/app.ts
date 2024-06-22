// Global dependencies
import  express  from "express";
import dotenv from "dotenv";

// Project dependencies
import {db} from "../Config/db.config";
import { employeeRouter } from './../Routes/employee.routes';
import errorMiddleware from "../Middlewares/error.middleware";

 
dotenv.config();

// Express initialization
const app = express();

const api= process.env.API_URL;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use(`${api}/employees`,employeeRouter);

//connecting to database and then connecting to the server
db.then(() => {
    app.listen(3000, () => console.log('Server is running on port 3000'))
});

app.use(errorMiddleware);

