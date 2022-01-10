import {model, Schema} from "mongoose";


let ProductCategorySchema = new Schema({
    name:{type:String,required:true}
})


let ProductCategory = model("Category",ProductCategorySchema)
export default ProductCategory