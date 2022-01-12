import {Document, model, Schema} from "mongoose";


export interface ProductColorDocument extends Document{
    start_date:string,
    duration:string,
    percentage:number,
    description:string,
    product_id:string,
    createdAt:string,
    updatedAt:string,
}


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
    },
    product_id:{
        type:Schema.Types.ObjectId,
        ref:"product_discounts"
    }
},{timestamps:true})


const ProductDiscount = model("product_discounts",product_discount_schema)
export default ProductDiscount