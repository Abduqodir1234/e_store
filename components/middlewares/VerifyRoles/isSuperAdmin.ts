import {NextFunction,Response} from "express";
import ErrorResponse from "../../Responses/ErrorResponse";

let IsSuperAdmin = (req:any,res:Response,next:NextFunction)=>{
    if(parseInt(req.user.username.role) === 1)
        next()
    else{
        ErrorResponse(res,"User do not have permission for this action")
    }
}
export default IsSuperAdmin