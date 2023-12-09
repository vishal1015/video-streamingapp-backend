import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try{
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)// DATABASE KA NAME V DENA TO DE DIYA 
       console.log(`mongodb connect ! DB HOST :${connectionInstance}`)// check it what is happening 
    }catch(error){
        console.log("MONGODB connection failed!:- ", error )
        process.exit(1)//throw v kar skte but  node process deta read it in node 
    }
}

export default connectDB