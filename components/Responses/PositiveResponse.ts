import { Response } from "express";
import {StatusCodes} from "http-status-codes";

let PositiveResponse = (res:Response,msg:any,statusCode=StatusCodes.OK)=>{
    return res.status(statusCode).json({errors:false,msg:msg})
}
export default PositiveResponse;