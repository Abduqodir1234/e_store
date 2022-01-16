import {Response} from "express"
import Cart, {CartDocument} from "../../../Models/cartModel";
import CartProducts from "../../../Models/CartProducts";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";
import ProductClass from "../../../components/Services/ProductClass";
import CartProductQueryGenerator from "../../../components/QueryGenerator/CartProducts";
import ProductFilterQueryGenerator from "../../../components/QueryGenerator/Product";
let changeAmount = async (req:any,res:Response)=>{
        let user_id = req.user.username._id
        let {product_id,count} = req.body
        let cartModel = new ModelAdditionalMethods(Cart,res)
        let cart_products = new ModelAdditionalMethods(CartProducts,res)
        let products = new ProductClass()
        const product_query = await ProductFilterQueryGenerator({...req.body,_id:product_id})
        let cart:CartDocument = await cartModel.findOne2({user_id})
        let cart_id = cart._id
        await products.countCheck(res,product_query,count)
        await cart_products.update_or_create(
            CartProductQueryGenerator({...req.body,cart_id}),
            {count},
            {cart_id,...req.body}
        )
        PositiveResponse(res,"Success")
}
export default changeAmount;