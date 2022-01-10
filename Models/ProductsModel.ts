import {model, Schema} from "mongoose";

let product_schema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    vendor_id:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"product_categories",
        required:true
    },
    rating:{
        type:Number,
        enum:[0,1,2,3,4,5],
        default:0
    },
    description:{
        type:String,
        required:true,
    },
    sizes:[{
        type:Schema.Types.ObjectId,
        ref:"product_sizes",

    }],
    colors:[{
        type:Schema.Types.ObjectId,
        ref:"product_colors",

    }],
    count:{
        type:Number,
        required:true
    },
    discount:{
        type:Schema.Types.ObjectId,
        ref:"product_discounts",
        required:true
    },
    photo:[
        {
            type:String
        }
    ],
    status:{
        type:Boolean,
        default:true
    }
},{timestamps:true})


const Products = model("products",product_schema)

export default Products