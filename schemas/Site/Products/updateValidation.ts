import Joi from "joi"

let productUpdateValidation = Joi.object({
    name:Joi.string().required(),
    price:Joi.number().positive().required(),
    category:Joi.string().required(),
    description:Joi.string().required(),
    sizes:Joi.array().required(),
    colors:Joi.array()
        .length(1)
        .required(),
    count:Joi.number().positive().required(),
})
export default productUpdateValidation