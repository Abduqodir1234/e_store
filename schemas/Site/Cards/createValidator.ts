import Joi from "joi";

let CardCreateValidator = Joi.object({
    card_num:Joi.string()
        .trim()
        .required()
        .regex(/^[0-9]{16}$/),
    validity_date:Joi.string()
        .regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)
        .required(),
    phone:Joi.string()
        .regex(/[+][0-9]{12}/)
        .required(),
    name:Joi.string()
        .required()
})

export default CardCreateValidator