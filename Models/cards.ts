import {Document, model, Schema} from "mongoose";
import {string} from "joi";


export interface CardDocument extends Document{
    user_id:string,
    card_num:string,
    validity_date:string,
    phone:string,
    name:string,
    createdAt:string,
    updatedAt:string
}


let cards_schema = new Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"users"
    },
    card_num:{
        type:String,
        required:true
    },
    validity_date:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    }
},{timestamps:true})

const Cards = model("cards",cards_schema)
export default Cards