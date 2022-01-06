import { Request, Response } from "express"
import ErrorResponse from "../../../components/Responses/ErrorResponse"
import PositiveResponse from "../../../components/Responses/PositiveResponse"
import Users, {UserDocument} from "../../../Models/Users"
import {StatusCodes} from "http-status-codes";
let UserUpdateById =async(req:any,res:Response) =>{
    let {id} = req.params
    let photo:any = req.file
    let user = await Users.findOneAndUpdate({_id:id},{...req?.body,photo:photo?.path},{new:true,runValidators:true})
    if(!user)
        return ErrorResponse(res,"No user with this id")
    return PositiveResponse(res,"Updated",StatusCodes.OK)
}
export default UserUpdateById;