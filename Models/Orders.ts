import {model, Schema,Document} from "mongoose";
import {ORDER_STATUSES} from "../components/Variables";

export interface OrderDocument extends Document{
    user_id:string,
    cash_card:number,
    paid:string,
    coordinate:[],
    address:string,
    destination:string,
    status:string,
    product_price:string,
    delivery_price:string,
    cardNumber:string,
    product_ids:[],
    createdAt:string,
    updatedAt:string
}


let order_schema = new Schema({
        user_id: {
            type: Schema.Types.ObjectId,
            required: true
        },
        cash_card: {
            type:Number,
            enum:{
                values:[1,2], //1=>Naqd,2=>plastik
                message:"{VALUE} not supported"
            }
        },
        paid:{
            type:Boolean,
            default:false
        },
        coordinate:[
            {type:Number}
        ],
        address:{
            type:String,
        },
        destination:{
            type:String,
        },
        status:{
            type:String,
            enum:{
                values:ORDER_STATUSES,
                message:'{VALUE} not supported'
            }
        },
        productPrice:{
            type:String,
            required:true
        },
        deliveryPrice:{
            type:String,
            required:true
        },
        cardNumber:{
            type:Schema.Types.ObjectId,
            ref:"cards",
            required:true
        },
        product_ids:[
            {
                type:String,
            }
        ],

    },{timestamps:true})


const Orders = model("orders",order_schema)

export default Orders