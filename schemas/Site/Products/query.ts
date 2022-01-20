import Joi from "joi";

let productQueryValidator = Joi.object({
    _id:Joi.any(),
    name:Joi.string(),
    price:Joi.number().integer(),
    price_from:Joi.number().integer(),
    price_to:Joi.number().integer().min(Joi.ref("price_from")),
    vendor_id:Joi.string(),
    category:Joi.string(),
    rating:Joi.number().integer(),
    rating_from:Joi.number().integer(),
    rating_to:Joi.number().integer().min(Joi.ref("rating_from")),
    description:Joi.string(),
    size:Joi.string(),
    color:Joi.string(),

})
export default productQueryValidator