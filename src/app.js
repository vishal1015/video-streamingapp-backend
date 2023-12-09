import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "16kb"})) // for the data comming in json form  we set the limit for it 
app.use(express.urlencoded())// for the data that is comming form url 
app.use(express.static("public"))// things that you want to give publicly
app.use(cookieParser())
export {app}