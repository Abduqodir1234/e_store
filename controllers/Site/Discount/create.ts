import {Response,Request} from "express";
import Discount from "../../../Models/discountModel";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";

let CreateDiscount =async (req:Request,res:Response)=>{
    await Discount.create(req.body)
    return PositiveResponse(res,"Created",StatusCodes.CREATED)
}
export default CreateDiscount