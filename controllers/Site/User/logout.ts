import { Response} from "express";
import Sessions from "../../../Models/Session";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";
import ErrorResponse from "../../../components/Responses/ErrorResponse";

let Logout = async(req:any,res:Response)=>{
    try{
        let sessionId = req.user.session
        await Sessions.findOneAndUpdate({_id:sessionId},{valid:false})
        PositiveResponse(res,"Success",StatusCodes.OK)
    }
    catch (e:any) {
        ErrorResponse(res,e.message)
    }
}
export default Logout;