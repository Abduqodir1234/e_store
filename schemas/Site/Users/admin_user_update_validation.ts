import Joi from "joi";
import {PASSWORD_MIN_LENGTH, PHONE_MAX_LENGTH, PHONE_MIN_LENGTH} from "../../../components/Variables";

let admin_user_update_validation = Joi.object({
    name:Joi.string()
        .required()
        .invalid("undefined","null"),
    address:Joi.string()
        .required()
        .invalid("undefined","null"),
    password:Joi.string()
        .min(PASSWORD_MIN_LENGTH)
        .invalid("undefined","null")
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    confirm_password:Joi.ref("password"),
    email:Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    photo:Joi.string(),
    phone:Joi.string()
        .pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
        .min(PHONE_MIN_LENGTH)
        .max(PHONE_MAX_LENGTH),
    role:Joi.string()
        .valid("1","2")
})
export default admin_user_update_validation;