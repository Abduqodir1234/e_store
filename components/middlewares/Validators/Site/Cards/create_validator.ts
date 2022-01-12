import {NextFunction, Response} from "express";
import CardCreateValidator from "../../../../../schemas/Site/Cards/createValidator";
import ErrorResponse from "../../../../Responses/ErrorResponse";
import {StatusCodes} from "http-status-codes";

let create_validator = async (req:any,res:Response,next:NextFunction)=>{
    try{
        req.body2 = await CardCreateValidator.validateAsync(req.body)
        req.body2.user_id = req.user.username._id
        next()
    }
    catch (e:any){
        ErrorResponse(res,e.message,StatusCodes.BAD_REQUEST)
    }
}
export default create_validator;