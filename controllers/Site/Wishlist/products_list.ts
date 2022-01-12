import {Response} from "express";
import Wishlist from "../../../Models/wishlist";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import ErrorResponse from "../../../components/Responses/ErrorResponse";

let products_list = async (req:any,res:Response)=>{
    const {_id} = req.user.username
    try{
        let data = await Wishlist.findOne({user_id:_id}).populate("product_ids")
        if(!data){
            ResponseWithData(res,[])
        }
        else{
           ResponseWithData(res,data.product_ids)
        }
        console.log(data,_id)
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}
export default products_list;