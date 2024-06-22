

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


//database details from .env
const username= process.env.db_username;
const password= process.env.db_password;
const db_name = "Employee";

const connectionString = `mongodb+srv://${username}:${password}@challenge.axy5po5.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=Challenge`;
export const db = mongoose.connect(connectionString)
.then(res => {
    if(res){
        console.log(`Database connected successfully to ${db_name}`)
    }

}).catch(err => {
    console.log(err)
})

