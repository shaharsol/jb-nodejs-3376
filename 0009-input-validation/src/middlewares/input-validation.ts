import { NextFunction, Request, Response } from "express";
import createHttpError, { BadRequest, InternalServerError } from "http-errors";
import Joi from "joi";

const validate = (validator: Joi.ObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
    // the sync way to use joi:
    // const [error, data] = validator.validate
    // if(error) blah blah blah
    try {
        const validated = await validator.validateAsync(req.body, {
            abortEarly: false
        })
        req.body = validated;
        return next();
    } catch (err) {
        if(err.isJoi) { // isJoi is a boolean value set to true that joi adds
            return next(createHttpError(BadRequest(err.message)))
        }
        return next(createHttpError(InternalServerError(err)))
    }
}

export default validate;
