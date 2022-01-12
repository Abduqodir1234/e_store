import ErrorResponse from "../../../components/Responses/ErrorResponse";
import {Response} from "express"
import ProductDiscount from "../../../Models/ProductDiscount";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";
let create = async (req:any,res:Response)=>{
    try{
        await ProductDiscount.create(req.body)
        PositiveResponse(res,"Created",StatusCodes.CREATED)
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}
export default create;