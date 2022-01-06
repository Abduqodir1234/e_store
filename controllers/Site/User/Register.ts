import {Request,Response,NextFunction} from "express"
import Users from "../../../Models/Users";
import {StatusCodes} from "http-status-codes";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import CustomError from "../../../components/middlewares/CustomError";
const Register = async (req:Request,res:Response,next:NextFunction)=>{
        if(await Users.findOne({email:req.body.email})){
            return PositiveResponse(res,"User with this email already exists    ",StatusCodes.BAD_REQUEST)
        }
        await Users.create(req.body)
        return PositiveResponse(res,"Created",StatusCodes.CREATED)
}
export default Register