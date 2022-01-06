import { Response} from "express";
import Sessions from "../../../Models/Session";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import {StatusCodes} from "http-status-codes";

let Logout = async(req:any,res:Response)=>{
    let sessionId = req.user.session
    await Sessions.findOneAndUpdate({_id:sessionId},{valid:false})
    PositiveResponse(res,"Success",StatusCodes.OK)
}
export default Logout;