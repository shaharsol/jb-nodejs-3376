import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export default function validate(validator: ObjectSchema) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            req.body = await validator.validateAsync(req.body);
            next()
        } catch (err) {
            next({
                status: 400,
                message: err.message || err
            })
        }
    }
}
