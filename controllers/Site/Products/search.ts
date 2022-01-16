import {Response} from "express";
import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";
import Products from "../../../Models/ProductsModel";
import ProductFilterQueryGenerator from "../../../components/QueryGenerator/Product";
import {PRODUCTS_PAGINATION} from "../../../components/Variables";
import ResponseWithData from "../../../components/Responses/ResponseWithData";

let search =async (req:any,res:Response)=>{
    let {page} = req.query
    let product = new ModelAdditionalMethods(Products,res)
    let filter_query = await ProductFilterQueryGenerator(req.query)
    let data = await product.findWithPaginationAndSelectPopulation(
        filter_query,
        page,
        PRODUCTS_PAGINATION,
        "",
        "category colors sizes discount"
    )
    ResponseWithData(res,{data,count:data.length})

}
export default search;