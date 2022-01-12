import Joi from "joi";

let discount_create_validator = Joi.object({
    productId:Joi.string().required(),
    percentage:Joi.number().required(),
    start_date:Joi.date()
        .required()
        .greater("now"),
    end_date:Joi.date()
        .greater(Joi.ref("start_date")),
    always:Joi.boolean()
})
export default discount_create_validator;