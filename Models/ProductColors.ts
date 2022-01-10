import {model, Schema} from "mongoose";

let product_colors_schema = new Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true})


const ProductColors = model("product_colors",product_colors_schema)


export default ProductColors