import Joi from "joi"
let sellers_create_validator = Joi.object({
    name:Joi.string().required(),
    email:Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    password:Joi.string()
        .min(10)
        .required(),
    card:Joi.string()
        .required()
})

export default sellers_create_validator