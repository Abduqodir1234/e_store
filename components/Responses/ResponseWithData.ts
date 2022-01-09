import {Response} from "express"
import {StatusCodes} from "http-status-codes";

let ResponseWithData = (res:Response,data:any)=>{
    return res.status(StatusCodes.OK).json({errors:false,data:data})
}
export default ResponseWithData;