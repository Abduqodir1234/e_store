import {NextFunction, Response} from "express";
import ErrorResponse from "../../../../Responses/ErrorResponse";
import order_create_validator from "../../../../../schemas/Site/Orders/create";
import checkExists from "../../../../checkExists";
import Cards from "../../../../../Models/cards";
import {ObjectId} from "mongodb";
import CheckExists from "../../../../checkExists";
import Provinces from "../../../../../Models/provinces"
let createValidator = async (req:any,res:Response,next:NextFunction)=>{
    try{
        await order_create_validator.validateAsync(req.body)
        if(await checkExists(Cards,{_id:new ObjectId(req.body.cardNumber),user_id:req.user.username._id})&& await CheckExists(Provinces,{_id:req.body.province})){
            next()
        }
        else{
            ErrorResponse(res,"No card or no province with this id")
        }

    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}

export default createValidator;