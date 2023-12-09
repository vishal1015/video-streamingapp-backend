// require('dotenv').config({path:'./env'}) env should be fist so that can be execute in all files  and this syntax is making bad to our code consistency so i am making it as imprt syntax
import dotenv from "dotenv"// but not work you have to do config also
import connectDB from "./db/db.js";

dotenv.config({path:'./env'})// but still will not work because we are making it so we will do change  in package.json use as a experminetal feateure  so directly load enviorment variable  so 
connectDB()
.then( ()=>{
  app.on("error",(error)=>{
      console.log("ERROR DECTED",error);
      throw error
  })
  app.listen(process.env.PORT ||8000, ()=>{
    console.log(`server is runnning on port :${process.env.PORT}`)
  })
})
.catch((err)=>{
  console.log(`error detected  Mongodbconnect fail${err}`)
})
/*  First appporach
import express from "express";
const app = express()
// function connectDB(){
// }
// connectDB()// or make it iife
;(async ()=>{
    try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
      })// bhaut listner hote express ke pass to if database connected still error is coming so this will cathch it 
      app.listen(process.env.PORT,()=>{
        console.log(`app is running on ${process.env.PORT}`)
      })
    }catch(error){
        console.error("ERROR: ", error)
        throw err
    }
})()
*/