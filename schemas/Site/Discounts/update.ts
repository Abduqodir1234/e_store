import Joi from "joi";

let update_validation = Joi.object({
    start_date:Joi.date()
        .greater("now")
        .required(),
    duration:Joi.number()
        .greater(0)
        .required(),
    percentage:Joi.number()
        .greater(0),
    description:Joi.string()
        .required()
})

export default update_validation