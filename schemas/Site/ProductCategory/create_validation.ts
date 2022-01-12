import Joi from "joi";

let Create_validation = Joi.object({
    name:Joi.string().required()
})
export default Create_validation