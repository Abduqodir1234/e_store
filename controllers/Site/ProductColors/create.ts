import {Response} from "express"
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";
import ProductColors from "../../../Models/ProductColors";
let Create = async (req:any,res:Response)=>{
    try{
        if(await ProductColors.findOne({name:req.body.name})){
            ErrorResponse(res,"Category already exists with this name")
        }
       else{
            await ProductColors.create(req.body)
            PositiveResponse(res,"Created",StatusCodes.CREATED)
        }
    }
    catch (e:any){
        ErrorResponse(res,e.message)
    }
}
export default Create