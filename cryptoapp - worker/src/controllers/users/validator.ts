import Joi from "joi";

export const addSymbolValidator = Joi.object({
    symbol: Joi.string().min(3).max(4).alphanum().uppercase().required()
})