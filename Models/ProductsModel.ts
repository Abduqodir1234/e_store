import {Document, model, Schema} from "mongoose";


export interface ProductDocument extends Document{
    name:string,
    price:number,
    vendor_id:string,
    category:string,
    rating:number,
    description:string,
    sizes:[],
    colors:[],
    count:number,
    photo:[],
    status:string,
    createdAt:string,
    updatedAt:string
}




let product_schema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
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