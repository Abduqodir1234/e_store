import {Request, Response} from "express";
import Sellers from "../../../Models/SellersModel";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";
import ErrorResponse from "../../../components/Responses/ErrorResponse";

let create_register= async (req:any,res:Response)=>{
    if(await Sellers.findOne({email:req.body.email})){
        ErrorResponse(res,"email already exists")
    }
    await Sellers.create(req.body2)
    PositiveResponse(res,"Created",StatusCodes.CREATED)
}

export default create_register;