import {NextFunction, Response} from "express";
import changeAmount from "../../../../../schemas/Site/Cart/changeAmount";
import Products from "../../../../../Models/ProductsModel";
import ErrorResponse from "../../../../Responses/ErrorResponse";
import ProductSizes from "../../../../../Models/ProductSizes";
import ProductColors from "../../../../../Models/ProductColors";

let change_amount_validation = async (req:any,res:Response,next:NextFunction)=>{
    try{
        let {size,color} = req.body
        await changeAmount.validateAsync(req.body)
        if(await ProductSizes.findOne({_id:size})&& await ProductColors.findOne({_id:color})){
            next()
        }
        else
            ErrorResponse(res,"Please send existed product size and color")
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}

export default change_amount_validation