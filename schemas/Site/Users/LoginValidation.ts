import Joi from "joi";
import { PASSWORD_MIN_LENGTH } from "../../../components/Variables";

let LoginValidation = Joi.object({
    email:Joi.string()
        .required()
        .invalid("undefined","null")
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password:Joi.string()
        .min(PASSWORD_MIN_LENGTH)
        .required()
        .invalid("undefined","null")
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),


})
export default LoginValidation