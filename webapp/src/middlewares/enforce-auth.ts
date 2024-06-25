import { Request, Response, NextFunction } from "express";

export default function enforceAuth (req: Request, res: Response, next: NextFunction) {
    if(!req.user) {
        return next({
            status: 401,
            message: 'get away you hacker'
        })
    }
    next()
}