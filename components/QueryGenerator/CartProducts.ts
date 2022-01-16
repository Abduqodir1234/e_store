import CartProductsCreateValidator from "../../schemas/Site/Cart/CartProducts/create";
import {ObjectId} from "mongodb";

async function CartProductQueryGenerator(query:any){
     return await CartProductsCreateValidator.validateAsync({
        cart_id:new ObjectId(query.cart_id),
        product_id:new ObjectId(query.product_id),
        size:new ObjectId(query.size),
        color:new ObjectId(query.color)
     })

}

export default CartProductQueryGenerator