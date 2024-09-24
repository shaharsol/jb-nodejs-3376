import { NextFunction, Response, Request } from "express";
import getModel from "../../models/user-symbol/factory";

export async function dashboard(req: Request, res: Response, next: NextFunction) {
    const userSymbols = await getModel().getForUser(1)
    res.render('users/dashboard', {
        userSymbols
    })
}

export async function addSymbol(req: Request, res: Response, next: NextFunction) {
    const { symbol } = req.body
    
    const userSymbolData = {
        userId: 1,
        symbol
    }
    const userSymbol = await getModel().add(userSymbolData)
    res.redirect('/users/dashboard')

}
