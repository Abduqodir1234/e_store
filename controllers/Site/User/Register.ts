import {Request,Response} from "express"
import Users from "../../../Models/Users";
import {StatusCodes} from "http-status-codes";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import Cart from "../../../Models/cartModel";
import Wishlist from "../../../Models/wishlist";
import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";
import ErrorResponse from "../../../components/Responses/ErrorResponse";
const Register = async (req:Request,res:Response)=>{
            let user = new ModelAdditionalMethods(Users,res)
            let cart = new ModelAdditionalMethods(Cart,res)
            let wishlist = new ModelAdditionalMethods(Wishlist,res)
            let {status,msg} = await user.exists_or_create({email:req.body.email},{...req.body})
            if(!msg.errors){
                let {data} = msg
                await cart.create({user_id:data?._id})
                await wishlist.create({user_id:data?._id,product_ids:[]})
                return PositiveResponse(res,"Created",StatusCodes.CREATED)
            }
            else{
                res.status(status).json(msg)
            }
}
export default Register