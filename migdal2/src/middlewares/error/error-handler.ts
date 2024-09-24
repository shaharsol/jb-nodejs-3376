import { NextFunction, Response, Request } from "express";

export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    res.render('error', {
        status: err.status || err.statusCode || 500,
        message: err.message || 'something went wrong...'
    })
}
