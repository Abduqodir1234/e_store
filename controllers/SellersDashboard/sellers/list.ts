import {Request, Response} from "express";
import Sellers from "../../../Models/SellersModel";
import ResponseWithData from "../../../components/Responses/ResponseWithData";

let list = async (req:Request,res:Response)=>{
    let sellers = await Sellers.find().select("-password")
    ResponseWithData(res,sellers)
}
export default list