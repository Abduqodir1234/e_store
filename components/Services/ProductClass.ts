import {Response} from "express";
import Products, {ProductDocument} from "../../Models/ProductsModel";
import ErrorResponse from "../Responses/ErrorResponse";

class ProductClass{
    async searchOne(query:object){
        let data:any = await Products.findOne(query)
        return data
    }
    async searchByColorSizeId(res:Response,query:object){
        let data = await Products.findOne(query)
        if(!data)
            ErrorResponse(res,`no product with this _id and size and color`)
        else{
            return data
        }
    }
    async countCheck(res:Response,query:object,count:number){
        let product:ProductDocument = await this.searchOne(query)
        if(!product){
            ErrorResponse(res,`Product not found according to ${Object.keys(query)} `)
        }
        else if(product?.count < count){
            ErrorResponse(res,"count is more than product count in our store")
        }
        else{
            return product
        }
    }
}

export default ProductClass