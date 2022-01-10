import {model, Schema} from "mongoose";

let cards_schema = new Schema({
    merchant_id:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"users"
    },
    card_num:{
        type:String,
        required:true
    },
    validity_date:{
        type:Date,
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