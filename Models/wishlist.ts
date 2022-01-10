import {model, Schema} from "mongoose";

let wishlist_schema = new Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    product_ids:[
        {
            type:Schema.Types.ObjectId,
            ref:"products"
        }
    ]
},{timestamps:true})


const Wishlist = model("wishlist",wishlist_schema)

export default Wishlist