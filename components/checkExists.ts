import {Response} from "express";
import ErrorResponse from "./Responses/ErrorResponse";



let checkExists = async (model:any,query:object)=>{
    let data:boolean = await model.exists(query)
    return data
}
export default checkExists