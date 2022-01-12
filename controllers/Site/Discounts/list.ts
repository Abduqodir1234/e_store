import {Response} from "express";
import ProductDiscount from "../../../Models/ProductDiscount";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import ErrorResponse from "../../../components/Responses/ErrorResponse";

let list = async (req:any,res:Response)=>{
    try{
        let data = await ProductDiscount.find()
        ResponseWithData(res,data)
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}
export default list