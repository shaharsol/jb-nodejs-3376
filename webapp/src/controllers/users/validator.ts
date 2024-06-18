import Joi from "joi";

export const addSymbolValidator = Joi.object({
    symbol: Joi.string().required().alphanum().length(3).uppercase()
})