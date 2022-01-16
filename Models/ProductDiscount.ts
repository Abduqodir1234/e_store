import {Document, model, Schema} from "mongoose";
import {addSeconds} from "date-fns"
import {MAX_LIMIT_CHANGES_COUNT_DB} from "../components/Variables";


export interface ProductColorDocument extends Document{
    start_date:string,
    duration:string,
    percentage:number,
    description:string,
    product_id:string,
    createdAt:string,
    updatedAt:string,
}


let product_discount_schema = new Schema({
    start_date:{
        type:Date,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    percentage:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    product_id:{
        type:Schema.Types.ObjectId,
        ref:"product_discounts"
    }
},{timestamps:true})


const ProductDiscount = model("product_discounts",product_discount_schema)



// ProductDiscount.watch().on("change",async ()=>{
//     let data = await ProductDiscount.find()
//     let array:any=[];
//     data.map((one:any)=>{
//         if(addSeconds(one.start_date,one.duration).getTime() < new Date().getTime()){
//                 array.push(one._id)
//         }
//     })
//     for (let i=0;i < array.length/MAX_LIMIT_CHANGES_COUNT_DB;i++){
//         await ProductDiscount.deleteMany({_id:{$in:[...array.slice(i*MAX_LIMIT_CHANGES_COUNT_DB,(i+1)*MAX_LIMIT_CHANGES_COUNT_DB)]}})
//     }
// })


export default ProductDiscount