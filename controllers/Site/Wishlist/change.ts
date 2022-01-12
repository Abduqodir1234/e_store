import {Response} from "express"
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";
import Wishlist from "../../../Models/wishlist";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
let Change = async (req:any,res:Response)=>{
    try{
        const {product_id}  = req.body
        const {_id} = req.user.username
        let product_ids=[]
        let data:any = await Wishlist.findOne({user_id:_id})
        if(!data){
            await Wishlist.create({user_id:_id,product_ids:[product_id]})
            PositiveResponse(res,"Success",StatusCodes.OK)
        }
        else{
            if(data.product_ids.includes(product_id))
                product_ids = data.product_ids.filter((one: any) => one != product_id)
            else{
                product_ids = [...data.product_ids]
                product_ids.push(product_id)
            }
            await Wishlist.findOneAndUpdate(
                {user_id:_id},
                {product_ids}
            )
            console.log(data.product_ids)
            ResponseWithData(res,"Success")
        }

    }
    catch (e:any) {
            ErrorResponse(res,e.message)
    }
}
export default Change