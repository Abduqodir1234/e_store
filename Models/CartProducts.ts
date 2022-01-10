import {Schema} from "mongoose";
import {number} from "joi";

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
    colors:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"product_colors"
    },
    count:{
        type:Schema.Types.Number,
        required:true
    }
})