import Joi from "joi";

let CartProductsCreateValidator = Joi.object({
    cart_id:Joi.string(),
    product_id:Joi.string(),
    size:Joi.string(),
    color:Joi.string(),
    count:Joi.number()
})

export default CartProductsCreateValidator