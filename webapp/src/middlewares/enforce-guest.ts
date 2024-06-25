import { Request, Response, NextFunction } from "express";

export default function enforceGuest (req: Request, res: Response, next: NextFunction) {
    if(req.user) {
        return res.redirect('/users/dashboard')
    }
    next()
}