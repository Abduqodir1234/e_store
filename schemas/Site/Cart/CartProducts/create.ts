import Joi from "joi";

let CartProductsCreateValidator = Joi.object({
    cart_id:Joi.any(),
    product_id:Joi.any(),
    size:Joi.any(),
    color:Joi.any(),
    count:Joi.number()
})

export default CartProductsCreateValidator