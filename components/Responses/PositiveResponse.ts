import { Response } from "express";

let PositiveResponse = (res:Response,msg:any,statusCode:any)=>{
    return res.status(statusCode).json({errors:false,msg:msg})
}
export default PositiveResponse;