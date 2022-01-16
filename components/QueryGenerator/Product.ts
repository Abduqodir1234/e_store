import exp = require("constants");
import productQueryValidator from "../../schemas/Site/Products/query";
import ErrorResponse from "../Responses/ErrorResponse";
import {del} from "request";

let ProductFilterQueryGenerator =async (query:any)=>{
        query?.page ? delete query?.page : ""
        let data =  await productQueryValidator.validateAsync(query,{allowUnknown:true,stripUnknown:true})
        if(data?.name){
            data.name = new RegExp(`${data.name}`,"i")
        }
        if(data.description){
            data.description = new RegExp(`${data.description}`,"i")
        }
        if(data?.size){
            data.sizes = {$in:[data.size]}
            delete data.size
        }
        if(data?.color){
            data.colors = {$in:[data.color]}
            delete data.color
        }
        if(data?.price_from && data?.price_to){
            data.price = {$gte:data.price_from,$lte:data.price_to}
            delete data.price_from
            delete data.price_to
        }
        else if(data?.price_from){
            data.price = {$gte:data.price_from}
            delete data.price_from
        }
        else if(data?.price_to){
            data.price = {$lte:data.price_to}
            delete data.price_to
        }
        if(data?.rating_from && data?.rating_to){
            data.rating = {$gte:data.rating_from,$lte:data.rating_to}
            delete data.rating_from
            delete data.rating_to

        }
        else if(data?.rating_from){
            data.rating = {$gte:data.rating_from}
            delete data.rating_from
        }
        else if(data?.rating_to){
            data.rating = {$lte:data.rating_to}
            delete data.rating_to
        }
        console.log(data)
        return data



}


export default ProductFilterQueryGenerator

// if(query?.price_gt){
//     data.price = {$gt:data.price}
//
// }
// if(query?.price_gte){
//     data.price = {$gte:data.price}
//
// }
//
// if(query?.rating_gt){
//     data.rating = {$gt:data.rating}
//
// }
// if(query?.rating_gte){
//     data.rating = {$gte:data.rating}
//
// }
// if(query?.count_gt){
//     data.count = {$gt:data.count}
//
// }
// if(query?.count_gte){
//     data.count = {$gte:data.count}
//
// }
// if(query?.discount_gt){
//     data.discount = {$gt:data.discount}
//
// }
// if(query?.discount_gte){
//     data.discount = {$gte:data.discount}
// }