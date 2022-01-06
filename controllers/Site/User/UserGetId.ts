import { Request, Response } from "express";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import Users, {UserDocument} from "../../../Models/Users";
import {StatusCodes} from "http-status-codes";

let UserGetId = async(req:any,res:Response) =>{
    try{
        let {id} = req.params;
        let user = await Users.findOne({_id:id}).select(["-password"])
        if(!user)
            return ErrorResponse(res,"User does not exists with this id")
    }
    catch(e:any){
        ErrorResponse(res,e)
    }

}
export default UserGetId;