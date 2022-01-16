import {model, Schema,Document} from "mongoose";


export interface CartDocument extends Document{
    user_id:string,
    createdAt:string,
    updatedAt:string
}


let cart_schema = new Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        required:true
    }
},{timestamps:true})

const Cart = model("cart",cart_schema)

export default Cart;