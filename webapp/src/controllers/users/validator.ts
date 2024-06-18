import Joi from "joi";

export const addSymbolValidator = Joi.object({
    symbol: Joi.string().alphanum().length(3).uppercase().required()
})