import { Request, Response, NextFunction } from 'express';

export function dashboard(req: Request, res: Response, next: NextFunction) {
    res.render('users/dashboard') 
}

export function addSymbol(req: Request, res: Response, next: NextFunction) {
    // logic missing...
    console.log(req.body)
    res.send('added symbol...')
}
