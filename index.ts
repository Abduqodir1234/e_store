import verifyToken from "./components/middlewares/verifyToken";

require("express-async-errors")
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { DB_URL } from "./components/Variables";
import urlLoggerMiddleWare from "./components/Url_Logger";
import errorHandler from "./components/middlewares/error-handler";
import notFound from "./components/middlewares/notFound";
import corsOpts from "./components/corsOpts"
import {
    discountRoutes,
    userRoutes
} from "./Routes/Site";
import verifyRole from "./components/middlewares/VerifyRoles/verifyRole";



let PORT = process.env.PORT || 5000;
let app= express();


/*
    MiddleWares
*/
app.use(urlLoggerMiddleWare)
app.use(cors(corsOpts))
app.use('/public',express.static('public'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended:false}))

/*
    URLs
*/
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/discount",discountRoutes)
app.use(notFound)
app.use(errorHandler)

let start =async ()=>{
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT,()=>console.log(`Listening in ${PORT}\nDatabase connected`))
    }
    catch{
        console.log("MONGODB Error")
    }

}

start()