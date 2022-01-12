import {Response} from "express";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import ProductCategory from "../../../Models/ProductCategory";
import ResponseWithData from "../../../components/Responses/ResponseWithData";

let get = async (req:any,res:Response)=>{
    try{
        let {id} = req.params
        let data = await ProductCategory.findOne({_id:id})
        if(!data)
            ErrorResponse(res,"no category with this id")
        ResponseWithData(res,data)

    }
    catch (e:any){
        ErrorResponse(res,e.message)
    }
}
export default get