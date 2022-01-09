import { Request, Response } from "express";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import Users from "../../../Models/Users";
import {StatusCodes} from "http-status-codes";

let UserDelete = async(req:Request,res:Response)=>{
    try{
        let {id} = req.params
        let user = await Users.findOneAndDelete({_id:id})
        if(!user){
            ErrorResponse(res,"No user with this id")
        }
        PositiveResponse(res,"Deleted",StatusCodes.OK)
    }
    catch(e:any){
        ErrorResponse(res,e.message)

    }
}
export default UserDelete