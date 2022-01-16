import ModelAdditionalMethods from "../../../components/Services/ModelAdditionalMethods";
import CartProducts from "../../../Models/CartProducts";

let orders = (req:any,res:Response)=>{
    let cart = ModelAdditionalMethods(Cart,res)
    let cartProducts = ModelAdditionalMethods(CartProducts)

}
export default orders