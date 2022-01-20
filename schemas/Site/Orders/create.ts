import Joi from "joi";

let order_create_validator = Joi.object({
    cash_card:Joi.string()
        .valid("1","2")
        .required(),
    cardNumber:Joi.string()
        .required(),
    coordinate:Joi.array()
        .length(2),
    address:Joi.string()
        .required(),
    province:Joi.string()
        .required()
})
.when(Joi.object({coordinate:Joi.exist()}).unknown(),{
    then:Joi.object({
        destination:Joi.string().default(""),
    }),
    otherwise:Joi.object({
        destination:Joi.string().required()
    })
})

export default order_create_validator