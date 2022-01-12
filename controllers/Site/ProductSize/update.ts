import {Response} from "express"
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";
import ProductSizes from "../../../Models/ProductSizes";

let update = async (req:any,res:Response)=>{
    try{
        let {id} = req.params
        let data = await ProductSizes.findOneAndUpdate(
            {_id:id},
           {...req.body}
        )
        if(!data)
            ErrorResponse(res,"no category with this id")
        PositiveResponse(res,"Updated",StatusCodes.OK)
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}
export default update