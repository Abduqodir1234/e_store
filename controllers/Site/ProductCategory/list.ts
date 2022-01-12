import {Response} from "express";
import ProductCategory from "../../../Models/ProductCategory";
import ResponseWithData from "../../../components/Responses/ResponseWithData";

let list = async (req:any,res:Response)=>{
    let data =await ProductCategory.find()
    ResponseWithData(res,data)
}
export default list