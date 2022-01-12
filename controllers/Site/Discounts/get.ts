import {Response} from "express";
import ProductDiscount from "../../../Models/ProductDiscount";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import ResponseWithData from "../../../components/Responses/ResponseWithData";

let get = async (req:any,res:Response)=>{
    try{
        let { id } = req.params
        let data = await ProductDiscount.findOne({_id:id})
        if(!data)
            ErrorResponse(res,"No product discount with this id")
        else{
            ResponseWithData(res,data)
        }
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}
export default get