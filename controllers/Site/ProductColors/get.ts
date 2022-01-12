import {Response} from "express";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import ProductColors from "../../../Models/ProductColors";

let get = async (req:any,res:Response)=>{
    try{
        let {id} = req.params
        let data = await ProductColors.findOne({_id:id})
        if(!data)
            ErrorResponse(res,"no category with this id")
        ResponseWithData(res,data)

    }
    catch (e:any){
        ErrorResponse(res,e.message)
    }
}
export default get