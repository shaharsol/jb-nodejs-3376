import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const validation = (validator: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) {
    try {
        req.body = validator.validateAsync(req.body);
        next()
    } catch (err) {
        next(err)
    }
}

export default validation;