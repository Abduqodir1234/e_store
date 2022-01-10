import {model, Schema} from "mongoose";

let product_discount_schema = new Schema({
    start_date:{
        type:Date,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    percentage:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})


const ProductDiscount = model("product_discounts",product_discount_schema)
export default ProductDiscount