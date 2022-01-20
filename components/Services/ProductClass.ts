import {Response} from "express";
import Products, {ProductDocument} from "../../Models/ProductsModel";
import ErrorResponse from "../Responses/ErrorResponse";
import {StatusCodes} from "http-status-codes";
import ResponseReturner from "../Responses/Response";
import ErrorResponseBody from "../Responses/ErrorResponseBody";
import ResponseWithDataBody from "../Responses/ResponseWithDataBody";
import {date} from "joi";

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
           return  ResponseReturner(ErrorResponseBody(`Product not found according to ${Object.keys(query)} `),StatusCodes.BAD_REQUEST)
        }
        else if(product?.count < count){
            return ResponseReturner(ErrorResponseBody("count is more than product count in our store"))
        }
        else{
            return ResponseReturner(ResponseWithDataBody(product))
        }
    }
}

export default ProductClass