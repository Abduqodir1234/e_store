import { Request, Response } from "express";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import Users, {UserDocument} from "../../../Models/Users";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";

let GetUser = async(req:any,res:Response) =>{
    try{
        let id:UserDocument["_id"] = req.user.username._id
        let user = await Users.findOne({_id:id}).select(["-password"])
        if(!user)
            ErrorResponse(res,"user does not exists")
        user.photo =`${req.protocol }://${req.get('host')}/${user.photo}`
        ResponseWithData(res,user)

    }
    catch(e:any){
        ErrorResponse(res,e)
    }
   
}
export default GetUser;