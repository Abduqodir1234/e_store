import { Request, Response } from "express";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import Users from "../../../Models/Users";
import {StatusCodes} from "http-status-codes";
import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods"
let UserDelete = async(req:Request,res:Response)=>{
    let {id} = req.params
    console.log(id)
    let users = new ModelAdditionalMethods(Users,res)
    let {status,msg} = await users.deleteOne({_id:id})
    res.status(status).json(msg)
}
export default UserDelete