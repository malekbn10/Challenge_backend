import  express  from "express";
import dotenv from "dotenv";
import {db} from "../Config/db.config";
import { router } from './../Routes/employee.routes';


dotenv.config();
const app = express();

const api= process.env.API_URL;

//Middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use(`${api}/employees`,router);

//connecting to database and then connecting to the server
db.then(() => {
    app.listen(3000, () => console.log('Server is running on port 3000'))
})