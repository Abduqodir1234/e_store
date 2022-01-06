import {NextFunction, Request, Response} from "express";
import user_create_validation from "../../../../../schemas/Site/Users/user_create_validation";
import discount_create_validator from "../../../../../schemas/Site/Discount/create";
import ErrorResponse from "../../../../Responses/ErrorResponse";

let CreateDiscountValidator = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        await discount_create_validator.validateAsync({...req.body})
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}
export default CreateDiscountValidator;