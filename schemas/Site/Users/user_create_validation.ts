import Joi from "joi";
import { PASSWORD_MIN_LENGTH, PHONE_MAX_LENGTH, PHONE_MIN_LENGTH } from "../../../components/Variables";

let user_create_validation = Joi.object({
    name:Joi.string()
        .required()
        .invalid("undefined","null"),
    address:Joi.string().required(),
    email:Joi.string()
            .required()
            .invalid("undefined","null")
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password:Joi.string()
            .min(PASSWORD_MIN_LENGTH)
            .required()
            .invalid("undefined","null")
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    confirm_password:Joi.ref("password"),
    photo:Joi.object(),
    phone:Joi.string()
            .invalid("undefined","null")
            .pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
            .min(PHONE_MIN_LENGTH).max(PHONE_MAX_LENGTH),
    
}) 
export default user_create_validation