import {Response} from "express";
import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";
import Products, {ProductDocument} from "../../../Models/ProductsModel";
import PositiveResponse from "../../../components/Responses/PositiveResponse";

let update = async (req:any,res:Response)=>{
    let product = new ModelAdditionalMethods(Products,res)
    let _id = req.params.id
    let data_for_filter = {_id,vendor_id:req.user.username._id}
    let {msg,status} = await product.findOne(data_for_filter)
    if(!msg.errors){
        let {data} = msg
        req.body2.photo = [...data?.photo||[],...req?.body2?.photo||[]]
        await product.findOneAndUpdate(data_for_filter,req.body2)
        PositiveResponse(res,"Updated")
    }
    else
        res.status(status).json(msg)

}
export default update