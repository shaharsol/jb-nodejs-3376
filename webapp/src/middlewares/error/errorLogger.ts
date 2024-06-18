import { Request, Response, NextFunction } from "express";

export function errorLogger (err: any, req: Request, res: Response, next: NextFunction) {
    console.log('an error occured', err)
    next(err)
}
