import {Document,model, Schema} from "mongoose";


export interface WishlistDocument extends Document{
    user_id:string,
    product_ids:[],
    createdAt:string,
    updatedAt:string
}


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