import {model, Schema} from "mongoose";

let CategorySchema = new Schema({
    name:{type:String,required:true}
})
let Category = model("Category",CategorySchema)
export default Category