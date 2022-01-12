import {NextFunction,Response} from "express";
import ErrorResponse from "../../Responses/ErrorResponse";

let VerifyRole = (req:any,res:Response,next:NextFunction)=>{
    if(parseInt(req.user.username.role)<=3)
        next()
    else
        ErrorResponse(res,"User do not have permission")
}
export default VerifyRole;