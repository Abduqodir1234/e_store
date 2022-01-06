import { NextFunction, Request, Response } from "express";
import user_create_validation from "../../../../../schemas/Site/Users/user_create_validation"
import ErrorResponse from "../../../../Responses/ErrorResponse";
let UserCreateValidator = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        await user_create_validation.validateAsync({...req.body,photo:req.file})
        next()
    }
    catch(e:any){
        ErrorResponse(res,e.message)
    }
}
export default UserCreateValidator;