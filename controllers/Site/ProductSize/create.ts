import {Response} from "express"
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";
import ProductSizes from "../../../Models/ProductSizes";
let Create = async (req:any,res:Response)=>{
    try{
        if(await ProductSizes.findOne({name:req.body.name})){
            ErrorResponse(res,"Category already exists with this name")
        }
        await ProductSizes.create(req.body)
        PositiveResponse(res,"Created",StatusCodes.CREATED)
    }
    catch (e:any){
        ErrorResponse(res,e.message)
    }
}
export default Create