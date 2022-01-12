import {Response} from "express";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import ProductColors from "../../../Models/ProductColors";

let list = async (req:any,res:Response)=>{
    let data =await ProductColors.find()
    ResponseWithData(res,data)
}
export default list