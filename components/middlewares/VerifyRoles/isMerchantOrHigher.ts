import {NextFunction,Response} from "express";
import ErrorResponse from "../../Responses/ErrorResponse";

let isMerchantOrHigher = (req:any,res:Response,next:NextFunction)=>{

    if(parseInt(req.user.username.role)<=2)
        next()
    else
        ErrorResponse(res,"User do not have permission")
}
export default isMerchantOrHigher;