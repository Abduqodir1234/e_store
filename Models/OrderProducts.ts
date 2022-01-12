import {Document,model, Schema} from "mongoose";

export interface OrderProductsDocument extends Document{
    product_id:string,
    order_id:string,
    count:string,
    price:string,
    size:string,
    color:string,
    createdAt:string,
    updatedAt:string
}



let order_products_schema = new Schema({
    product_id:{
        type:Schema.Types.ObjectId,
        ref:"products",
        required:true
    },
    orderId:{
        type:Schema.Types.ObjectId,
        ref:"orders",
        required:true
    },
    count:{
        type:Number,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    size:{
        type:Schema.Types.ObjectId,
        ref:"product_sizes",
        required:true
    },
    color:{
        type:Schema.Types.ObjectId,
        ref:"product_colors",
        required:true
    },

},{timestamps:true})


const OrderProducts = model("order_products",order_products_schema)

export default OrderProducts