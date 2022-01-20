import { NextFunction, Request, Response } from "express";
import user_update_validation from "../../../../../schemas/Site/Users/user_update_validation"
import ErrorResponse from "../../../../Responses/ErrorResponse";
import checkExists from "../../../../checkExists";
import Provinces from "../../../../../Models/provinces"
let UserUpdateValidator = async(req:any,res:Response,next:NextFunction)=>{
    try{
        if(req?.file?.path){
            req.body.photo = req.file.path
        }
        let data = await user_update_validation.validateAsync(req.body)
        req.body2 = data
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
export default UserUpdateValidator;