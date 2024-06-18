import { Request, Response, NextFunction } from "express";

export function notFound (req: Request, res: Response, next: NextFunction) {
    next({
        status: 404,
        message: 'what you were looking for was not found'
    })
}