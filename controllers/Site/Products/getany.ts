import {Response} from "express";
import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";
import Products from "../../../Models/ProductsModel";
import ResponseWithData from "../../../components/Responses/ResponseWithData";

let getAny = async (req:any,res:Response)=>{
    let {id} = req.params
    let {_id} = req.user.username
    let products =new ModelAdditionalMethods(Products,res)
    let data = await products.findOneWithPopulationAndSelect({_id:id},"category sizes colors","vendor_id")
    ResponseWithData(res,data)

}
export default getAny

