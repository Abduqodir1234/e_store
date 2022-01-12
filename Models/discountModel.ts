import {model, Schema} from "mongoose";

let discountModel = new Schema({
    productId:{
        type:Schema.Types.ObjectId,
        required:[true,"Product Id must be provided"],
    },
    percentage:{
        type:Number,
        required:[true,"Percentage must be provided"]
    },
    start_date:{
        type:String,
        required:[true,"Beginning Date must be provided"]
    },
    end_date:{
        type:String,
        required:[true,"End Date must be provided"]
    },
    always:{
        type:Boolean
    }
},{timestamps:true})

let Discount = model("discounts",discountModel)

export default Discount