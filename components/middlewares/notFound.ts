import {Request,Response} from "express"
import {StatusCodes} from "http-status-codes";
let notFound = (req:Request,res:Response)=>{
    res.status(StatusCodes.NOT_FOUND).json({errors:true,message:"Route not found"})
}
export default notFound;