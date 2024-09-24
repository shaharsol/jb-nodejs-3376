import { NextFunction, Response, Request } from "express";

export function dashboard(req: Request, res: Response, next: NextFunction) {
    res.render('users/dashboard')
}

export function addSymbol(req: Request, res: Response, next: NextFunction) {
    console.log(req.body.symbol)
}
