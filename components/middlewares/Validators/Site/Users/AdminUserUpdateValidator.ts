import { NextFunction, Request, Response } from "express";
import user_update_validation from "../../../../../schemas/Site/Users/user_update_validation"
import ErrorResponse from "../../../../Responses/ErrorResponse";
import admin_user_update_validation from "../../../../../schemas/Site/Users/admin_user_update_validation";
let AdminUserUpdateValidator = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        await admin_user_update_validation.validateAsync({...req.body,photo:{...req.file}})
        next()
    }
    catch(e:any){
        ErrorResponse(res,e.message)
    }
}
export default AdminUserUpdateValidator;