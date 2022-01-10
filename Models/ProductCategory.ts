import {Schema,model} from "mongoose"
let product_category_schema = new Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true})

const ProductCategory = model("product_categories",product_category_schema)
export default ProductCategory