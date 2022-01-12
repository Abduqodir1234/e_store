import {Schema,Document} from "mongoose";

export interface CartProductsDocuments extends Document{
    cart_id:string,
    product_id:string,
    size:string,
    color:string,
    count:number,
    createdAt:string,
    updatedAt:string
}





let cart_products_schema = new Schema({
    cart_id:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"cart"
    },
    product_id:[{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"products"
    }],
    size:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"product_sizes"
    },
    color:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"product_colors"
    },
    count:{
        type:Schema.Types.Number,
        required:true
    }
})