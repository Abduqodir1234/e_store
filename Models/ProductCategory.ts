import {Schema, model, Document} from "mongoose"

export interface ProductCategoryDocument extends Document{
    name:string,
    createdAt:string,
    updatedAt:string
}


let product_category_schema = new Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true})

const ProductCategory = model("product_categories",product_category_schema)
export default ProductCategory