import { NextFunction, Request, Response } from "express";
import user_update_validation from "../../../../../schemas/Site/Users/user_update_validation"
import ErrorResponse from "../../../../Responses/ErrorResponse";
import admin_user_update_validation from "../../../../../schemas/Site/Users/admin_user_update_validation";
import checkExists from "../../../../checkExists";

import Provinces from "../../../../../Models/provinces"
let AdminUserUpdateValidator = async(req:any,res:Response,next:NextFunction)=>{
    try{
        if(req?.file?.path){
        req.body.photo = req?.file?.path
        }
        req.body2 = await admin_user_update_validation.validateAsync({...req.body})
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
export default AdminUserUpdateValidator;