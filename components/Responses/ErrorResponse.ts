import { Response } from "express"
import {StatusCodes} from "http-status-codes";

let ErrorResponse = (res:Response,msg:string,status=StatusCodes.BAD_REQUEST)=>{
    return res.status(status).json({errors:true,msg:msg})
}
export default ErrorResponse