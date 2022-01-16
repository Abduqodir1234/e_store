import {NextFunction, Response} from "express";
import ErrorResponse from "../../../../Responses/ErrorResponse";
import checkExists from "../../../../checkExists";
import ProductColors from "../../../../../Models/ProductColors";
import ProductSizes from "../../../../../Models/ProductSizes";
import ProductCategory from "../../../../../Models/ProductCategory";
import productUpdateValidation from "../../../../../schemas/Site/Products/updateValidation";

let product_update_validation = async (req:any,res:Response,next:NextFunction)=>{
    try{
        req.body2 = await productUpdateValidation.validateAsync({...req.body})
        let array:any = []
        req?.files?.map((one:any)=>array.push(one?.path))
        array.length !==0 ? req.body2.photo = array : ""
        let color_exists = await checkExists(ProductColors,{_id:{$all:[...req?.body2?.colors]}})
        let size_exists = await checkExists(ProductSizes,{_id:{$all:[...req?.body2?.sizes]}})
        let cat_exists = await checkExists(ProductCategory,{_id:req?.body2?.category})
        if(color_exists && size_exists && cat_exists){
            next()
        }
        else
            ErrorResponse(res,"size or color or category does not exist")
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}

export default product_update_validation;