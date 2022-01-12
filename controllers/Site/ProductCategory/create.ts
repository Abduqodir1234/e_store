import {Response} from "express"
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import ProductCategory from "../../../Models/ProductCategory";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";
let Create = async (req:any,res:Response)=>{
    try{
        if(await ProductCategory.findOne({name:req.body.name})){
            ErrorResponse(res,"Category already exists with this name")
        }
        await ProductCategory.create(req.body)
        PositiveResponse(res,"Created",StatusCodes.CREATED)
    }
    catch (e:any){
        ErrorResponse(res,e.message)
    }
}
export default Create