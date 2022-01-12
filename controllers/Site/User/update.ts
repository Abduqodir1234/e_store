import { Request, Response } from "express"
import ErrorResponse from "../../../components/Responses/ErrorResponse"
import PositiveResponse from "../../../components/Responses/PositiveResponse"
import Users, {UserDocument} from "../../../Models/Users"
import {StatusCodes} from "http-status-codes";
let UserUpdate =async(req:any,res:Response) =>{
       try{
           let id:UserDocument["_id"] = req.user.username._id
           let user = await Users.findOneAndUpdate({_id:id},{...req?.body},{new:true,runValidators:true})
           if(!user)
               return ErrorResponse(res,"User does not exists")
           else
               return PositiveResponse(res,"Updated",StatusCodes.OK)
       }
       catch (e:any) {
           ErrorResponse(res,e.message)
       }
}
export default UserUpdate