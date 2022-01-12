import {NextFunction, Response} from "express";
import ErrorResponse from "../../../../Responses/ErrorResponse";
import update_validation from "../../../../../schemas/Site/Discounts/update";

let update = async (req:any,res:Response,next:NextFunction)=>{
    try{
        console.log(req.body)
        await update_validation.validateAsync(req.body)
        next()
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}
export default update