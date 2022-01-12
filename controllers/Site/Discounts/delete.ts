import {Response} from "express"
import ProductDiscount from "../../../Models/ProductDiscount";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";
const Delete = async (req:any,res:Response)=>{
    try{
        let {id} = req.params
        let data = await ProductDiscount.findOneAndDelete({_id:id})
        if(!data)
            ErrorResponse(res,"No product discount with this id")
        else
            PositiveResponse(res,"Deleted",StatusCodes.OK)
    }
    catch (e:any){
        ErrorResponse(res,e.message)
    }
}
export default Delete
