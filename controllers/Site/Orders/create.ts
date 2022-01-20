import OrdersClass from "../../../components/Services/Orders";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {Response} from "express"
import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";
import {ObjectId} from "mongodb";
import Provinces from "../../../Models/provinces"
let create =async (req:any,res:Response)=>{
    let _id = req.body.province
    let orders =new OrdersClass()
    let province = new ModelAdditionalMethods(Provinces,res)
    /*
        * Payment must be addedd here
    */
    // Payment Things
    /*
        * Payment must be addedd here
    */
    let {msg,status} =await province.findOne({_id:new ObjectId(_id)})
    if(!msg.errors){
        let data:any = await orders.create(req,msg.data.price,false)
        res.status(data.status).json(data.msg)
    }else{
        res.status(status).json(msg)
    }

}
export default create