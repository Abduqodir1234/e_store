import {NextFunction, Request, Response} from "express";
import sellers_create_validator from "../../../../../schemas/SellersDashboard/sellers/sellers_create_validator";
import ErrorResponse from "../../../../Responses/ErrorResponse";

let CreateValidator = async (req:any,res:Response,next:NextFunction)=>{
    try{
        req.body2 = await sellers_create_validator.validateAsync(req.body)
        next()
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}
export default CreateValidator