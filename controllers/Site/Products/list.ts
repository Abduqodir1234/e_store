import {Response} from "express";
import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";
import Products from "../../../Models/ProductsModel";
import {PRODUCTS_PAGINATION} from "../../../components/Variables";
import ResponseWithData from "../../../components/Responses/ResponseWithData";

let list = async (req:any,res:Response)=>{
    let products = new ModelAdditionalMethods(Products,res)
    let page = req.query.page || 1
    let data = await products.findWithPaginationAndSelectPopulation(
        {status:true},
        page,
        PRODUCTS_PAGINATION,
        "",
        "category colors sizes discount"
    )
    ResponseWithData(res,{data,length:data.length})
}

export default list