import { Request, Response } from "express"
import ErrorResponse from "../../../components/Responses/ErrorResponse"
import PositiveResponse from "../../../components/Responses/PositiveResponse"
import Users, {UserDocument} from "../../../Models/Users"
import {StatusCodes} from "http-status-codes";
let UserUpdateById =async(req:any,res:Response) =>{
    try{
        let {id} = req.params
        console.log(req.body2)
        let user = await Users.findOneAndUpdate({_id:id},{...req?.body2},{new:true,runValidators:true})
        if(!user)
            return ErrorResponse(res,"No user with this id")
        else
            return PositiveResponse(res,"Updated",StatusCodes.OK)
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}
export default UserUpdateById;