import { NextFunction, Request, Response } from "express";
import user_update_validation from "../../../../../schemas/Site/Users/user_update_validation"
import ErrorResponse from "../../../../Responses/ErrorResponse";
import admin_user_update_validation from "../../../../../schemas/Site/Users/admin_user_update_validation";


let AdminUserUpdateValidator = async(req:any,res:Response,next:NextFunction)=>{
    try{
        if(req?.file?.path){
        req.body.photo = req?.file?.path
        }
        req.body2 = await admin_user_update_validation.validateAsync({...req.body})
        next()
    }
    catch(e:any){
        ErrorResponse(res,e.message)
    }
}
export default AdminUserUpdateValidator;