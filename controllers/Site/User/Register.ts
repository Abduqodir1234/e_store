import {Request,Response,NextFunction} from "express"
import Users from "../../../Models/Users";
import {StatusCodes} from "http-status-codes";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import CustomError from "../../../components/middlewares/CustomError";
import Cart from "../../../Models/cartModel";
import Wishlist from "../../../Models/wishlist";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
const Register = async (req:Request,res:Response,next:NextFunction)=>{
        try{
            if(await Users.findOne({email:req.body.email})){
                return PositiveResponse(res,"User with this email already exists",StatusCodes.BAD_REQUEST)
            }
            else{
                let data = await Users.create(req.body)
                await Cart.create({user_id:data._id})
                await Wishlist.create({user_id:data._id,product_ids:[]})
                return PositiveResponse(res,"Created",StatusCodes.CREATED)
            }
        }
        catch (e:any){
            ErrorResponse(res,e.message)
        }
}
export default Register