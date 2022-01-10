import {model, Schema} from "mongoose";

let cart_schema = new Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        required:true
    },
    product_ids:[{
        type:Schema.Types.ObjectId,
        ref:"cart_products"
    }]
},{timestamps:true})

const Cart = model("cart",cart_schema)

export default Cart;