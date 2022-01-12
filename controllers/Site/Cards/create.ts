import {Response} from "express"
import Cards from "../../../Models/cards";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
let create = async (req:any,res:Response)=>{
    try{
        await Cards.create(req.body2)
        PositiveResponse(res,"Created",StatusCodes.CREATED)
    }
    catch(e:any){
        ErrorResponse(res,e.message)
    }
}
export default create