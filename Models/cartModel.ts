import {model, Schema,Document} from "mongoose";


export interface CartDocument extends Document{
    user_id:string,
    product_ids:[],
    createdAt:string,
    updatedAt:string
}


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