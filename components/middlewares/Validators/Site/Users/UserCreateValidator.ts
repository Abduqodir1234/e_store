import { NextFunction, Request, Response } from "express";
import user_create_validation from "../../../../../schemas/Site/Users/user_create_validation"
import ErrorResponse from "../../../../Responses/ErrorResponse";
import checkExists from "../../../../checkExists";
import Provinces from "../../../../../Models/provinces"
let UserCreateValidator = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        await user_create_validation.validateAsync({...req.body,photo:req.file})
        if(await checkExists(Provinces,{_id:req.body.province})){
            next()
        }
        else{
            ErrorResponse(res,"No province with this id")
        }
    }
    catch(e:any){
        ErrorResponse(res,e.message)
    }
}
export default UserCreateValidator;