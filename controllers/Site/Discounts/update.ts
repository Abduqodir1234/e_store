import {Response} from "express";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import ProductDiscount from "../../../Models/ProductDiscount";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";

let update = async (req:any,res:Response)=>{
    try{
        const {id} = req.params
        let data = await ProductDiscount.findOneAndUpdate(
            {_id:id},
            {...req.body},
            {runValidators:true}
        )
        if(!data)
            ErrorResponse(res,"no discount with this id")
        else
            PositiveResponse(res,"Updated",StatusCodes.OK)
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}
export default update