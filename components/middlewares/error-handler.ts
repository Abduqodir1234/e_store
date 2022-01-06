import {Request,Response} from "express"
const CustomError = require("./CustomError");
let errorHandler = (err:any,req:Request,res:Response)=>{
    if(err instanceof CustomError){
        res.status(err.statusCode).json({errors:true,message:err.message})
    }
    else {
        res.status(500).json({errors:true,message:err.message})
    }
}
export default errorHandler;