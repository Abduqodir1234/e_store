import {Response} from "express"
import Cart, {CartDocument} from "../../../Models/cartModel";
import CartProducts from "../../../Models/CartProducts";
import PositiveResponse from "../../../components/Responses/PositiveResponse";
import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";
import ProductClass from "../../../components/Services/ProductClass";
import CartProductQueryGenerator from "../../../components/QueryGenerator/CartProducts";
import ProductFilterQueryGenerator from "../../../components/QueryGenerator/Product";
import {ObjectId} from "mongodb";
let changeAmount = async (req:any,res:Response)=>{
        let user_id = req.user.username._id
        let {product_id,count} = req.body
        let cartModel = new ModelAdditionalMethods(Cart,res)
        let cart_products = new ModelAdditionalMethods(CartProducts,res)
        let products = new ProductClass()
        const product_query = await ProductFilterQueryGenerator({...req.body,_id:new ObjectId(product_id)})
        let cart:CartDocument = await cartModel.findOne2({user_id:new ObjectId(user_id)})
        let cart_id = cart._id.toString()
        let {status,msg} = await products.countCheck(res,product_query,count)
        if(!msg.errors){
                let {status,msg} = await cart_products.update_or_create(
                     await CartProductQueryGenerator({...req.body,cart_id}),
                    {count},
                    {...req.body,cart_id:cart_id}
                )
                if(!msg.errors){
                    PositiveResponse(res,"Success")
                }
                else{
                        res.status(status).json(msg)
                }

        }
        else{
                res.status(status).json(msg)
        }
}
export default changeAmount;