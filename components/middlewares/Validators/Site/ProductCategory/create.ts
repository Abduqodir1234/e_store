import {NextFunction, Response} from "express";
import ErrorResponse from "../../../../Responses/ErrorResponse";
import create_validation from "../../../../../schemas/Site/ProductCategory/create_validation";

let CreateValidator = async (req:any,res:Response,next:NextFunction)=>{
    try {
        await create_validation.validateAsync(req.body)
        next()
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}

export default CreateValidator