import {NextFunction, Response} from "express";
import ErrorResponse from "../../../../Responses/ErrorResponse";
import Products from "../../../../../Models/ProductsModel";

let WishlistChange =async (req:any,res:Response,next:NextFunction)=>{
    let {product_id} = req.body
    if(!product_id)
        ErrorResponse(res,"Product id is required")
    else{
        if(await Products.findOne({_id:product_id}))
            next()
        else{
            ErrorResponse(res,"no product with this  id")
        }
    }
}

export default WishlistChange