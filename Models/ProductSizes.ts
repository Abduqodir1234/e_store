import {model, Schema} from "mongoose";

let product_sizes_schema = new Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true})


const ProductSizes = model("product_sizes",product_sizes_schema)
export default ProductSizes