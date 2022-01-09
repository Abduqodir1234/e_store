import { NextFunction, Request, Response } from "express";
import user_update_validation from "../../../../../schemas/Site/Users/user_update_validation"
import ErrorResponse from "../../../../Responses/ErrorResponse";
let UserUpdateValidator = async(req:any,res:Response,next:NextFunction)=>{
    try{
        if(req?.file?.path){
            req.body.photo = req.file.path
        }
        let data = await user_update_validation.validateAsync(req.body)
        req.body2 = data
        console.log(req.body2)
        next()
    }
    catch(e:any){
        ErrorResponse(res,e.message)
    }
}
export default UserUpdateValidator;