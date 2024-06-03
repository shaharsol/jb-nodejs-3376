import { Request, Response, NextFunction } from "express"

export default function (req: Request, res: Response, next: NextFunction) {
    next({
        status: 404,
        message: 'not found'
    })
}