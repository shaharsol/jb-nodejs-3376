import { NextFunction, Response, Request } from "express";

export default function errorLogger(err: any, req: Request, res: Response, next: NextFunction) {
    console.log(err.message || err)
    next(err)
}
