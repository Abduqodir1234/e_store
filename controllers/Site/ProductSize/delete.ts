import {Response} from "express";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";
import ProductSizes from "../../../Models/ProductSizes";

let Delete =async (req:any,res:Response)=>{
    try{
        let {id} = req.params
        let data = await ProductSizes.findOneAndDelete({_id:id})
        if(!data)
            ErrorResponse(res,"No category with this id")
        PositiveResponse(res,"Deleted",StatusCodes.OK)
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}
export default Delete