import Joi from "joi";
import { PHONE_MAX_LENGTH, PHONE_MIN_LENGTH } from "../../../components/Variables";

let user_update_validation = Joi.object({
    name:Joi.string().required().invalid("undefined","null"),
    address:Joi.string().required().invalid("undefined","null"),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    photo:Joi.string(),
    phone:Joi.string()
        .pattern(/[+][0-9]{12}/)
        .min(PHONE_MIN_LENGTH)
        .max(PHONE_MAX_LENGTH),
    province:Joi.string()
        .required()
})
export default user_update_validation;