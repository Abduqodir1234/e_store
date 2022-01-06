import { NextFunction, Request } from "express";
import LoginValidation from "../../../../../schemas/Site/Users/LoginValidation";
import ErrorResponse from "../../../../Responses/ErrorResponse";

let LoginValidator = async(req:Request,res:any,next:NextFunction)=>{
    try{
        await LoginValidation.validateAsync({...req.body})
        next()
    }
    catch(e:any){
        ErrorResponse(res,e.message)
    }

}
export default LoginValidator