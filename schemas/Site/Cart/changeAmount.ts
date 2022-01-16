import Joi from "joi";

let changeAmount = Joi.object({
    product_id:Joi.string().required(),
    count:Joi.number().required(),
    size:Joi.string().required(),
    color:Joi.string().required()
})
export default changeAmount