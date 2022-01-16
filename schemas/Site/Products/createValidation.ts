import Joi from "joi"

let productCreateValidation = Joi.object({
    name:Joi.string().required(),
    price:Joi.number().required(),
    category:Joi.string().required(),
    description:Joi.string().required(),
    sizes:Joi.array().required(),
    colors:Joi.array()
        .length(1)
        .required(),
    count:Joi.number().required(),
})
export default productCreateValidation