import Joi from "joi";

let create_validation = Joi.object({
    start_date:Joi.date()
        .greater("now")
        .required(),
    product_id:Joi.string()
        .required(),
    duration:Joi.number()
        .greater(0)
        .required(),
    discount:Joi.number()
        .greater(0),
    description:Joi.string()
        .required()
})

export default create_validation