import { NextFunction, Response, Request } from "express";

export default function notFound(req: Request, res: Response, next: NextFunction) {
    next({
        status: 404,
        message: 'the page u requested was not found on this server'
    })
}
