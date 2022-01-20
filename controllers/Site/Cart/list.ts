import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";
import Cart from "../../../Models/cartModel";
import CartProducts from "../../../Models/CartProducts";
import {Response} from "express"
import ResponseWithData from "../../../components/Responses/ResponseWithData";
import {ObjectId} from "mongodb";
let cartList =async (req:any,res:Response)=>{
    const user_id = req?.user?.username?._id
    let cart = new ModelAdditionalMethods(Cart,res)
    let cartProducts = new ModelAdditionalMethods(CartProducts,res)
    let {msg,status} = await cart.findOne({user_id:new ObjectId(user_id)})
    if(!msg.errors){
        let cart_data = msg.data
        let products = await cartProducts.findWithSelectAndPopulation(
            {cart_id:cart_data._id,count:{$gt:0}},
            "-cart_id",
            "color size"
        )
        console.log(products)
        return ResponseWithData(res,products)
    }
    else {
        res.status(status).json(msg)
    }
}
export default cartList