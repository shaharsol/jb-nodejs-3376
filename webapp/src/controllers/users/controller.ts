import { Request, Response, NextFunction } from 'express';
import { getModel } from '../../models/user-symbol/factory';
import { DTO } from '../../models/user-symbol/dto';

export function dashboard(req: Request, res: Response, next: NextFunction) {
    res.render('users/dashboard') 
}

export async function addSymbol(req: Request, res: Response, next: NextFunction) {

    const userSymbol = {
        userId: 1,
        symbol: req.body.symbol as string
    }
    const newUserSymbol = await getModel().add(userSymbol)

    // logic missing...
    console.log(newUserSymbol)
    res.send('added symbol...')
}
