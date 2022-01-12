import {Response} from "express";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import ProductSizes from "../../../Models/ProductSizes";

let list = async (req:any,res:Response)=>{
    let data =await ProductSizes.find()
    ResponseWithData(res,data)
}
export default list