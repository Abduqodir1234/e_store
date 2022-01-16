import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";
import Products from "../../../Models/ProductsModel";
import {Response} from "express"
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";

let create = async (req:any,res:Response)=>{
    let product = new ModelAdditionalMethods(Products,res)
    await product.create(req.body2)
    PositiveResponse(res,"Created",StatusCodes.CREATED)
}

export default create;