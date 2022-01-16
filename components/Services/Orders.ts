import {Schema} from "mongoose";
import Cart, {CartDocument} from "../../Models/cartModel";
import Orders from "../../Models/Orders"
import CartProducts from "../../Models/CartProducts";
class Orders{
    constructor() {
    }

    async create(user_id:Schema.Types.ObjectId){
        let cart:CartDocument = await Cart.findOne({user_id})
        let cartProducts = await CartProducts.find({cart_id:cart._id}).select("-_id -createdAt -updatedAt -__v ")
        // cartProducts.map(one=>)
        // let data = await Orders.create()
    }

}

export default Orders