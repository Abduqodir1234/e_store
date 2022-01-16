import {Response} from "express";
import Wishlist from "../../../Models/wishlist";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import ErrorResponse from "../../../components/Responses/ErrorResponse";

let products_list = async (req:any,res:Response)=>{
    try{
        const {_id} = req.user.username
        let data = await Wishlist.findOne({user_id:_id}).populate("product_ids")
        ResponseWithData(res,data.product_ids)
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}
export default products_list;