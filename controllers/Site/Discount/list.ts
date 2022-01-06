import {Request, Response} from "express";
import Discount from "../../../Models/discountModel";
import ResponseWithData from "../../../components/Responses/ResponseWithData";

let DiscountList = async (req:Request,res:Response)=>{
    let discounts = await Discount.find()
    return ResponseWithData(res,discounts)
}
export default DiscountList