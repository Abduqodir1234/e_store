import {NextFunction, Response} from "express";
import create_validation from "../../../../../schemas/Site/Discounts/create_validation";
import ErrorResponse from "../../../../Responses/ErrorResponse";
import Products from "../../../../../Models/ProductsModel";

let create =async (req:any,res:Response,next:NextFunction)=>{
    try{
        let {product_id} = req.body
        let {_id} = req.user.username
        await create_validation.validateAsync(req.body)
        let data = await Products.findOne({_id:product_id,user_id:_id})
        if(!data)
            ErrorResponse(res,"no product with this id")
        else{
            next()
        }
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}

export default create