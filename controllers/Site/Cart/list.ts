import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";
import Cart from "../../../Models/cartModel";
import CartProducts from "../../../Models/CartProducts";
import {Response} from "express"
import ResponseWithData from "../../../components/Responses/ResponseWithData";
let cartList =async (req:any,res:Response)=>{
    const user_id = req?.user?.username?._id
    let cart = new ModelAdditionalMethods(Cart,res)
    let cartProducts = new ModelAdditionalMethods(CartProducts,res)
    let Cartdata = await cart.findOne({user_id})
    let products = await cartProducts.findWithSelectAndPopulation(
        {cart_id:Cartdata._id,count:{$gte:1}},
        "-cart_id",
        "color size"
    )
    return ResponseWithData(res,products)
}
export default cartList