import { NextFunction, Response, Request } from "express";
import getModel from "../../models/user-symbol/factory";
import getSymbolValueModel from "../../models/symbol-value/factory";
import config from 'config'

export async function dashboard(req: Request, res: Response, next: NextFunction) {
    const userSymbols = await getModel().getForUser(1)

    const symbolValues = await Promise.all(userSymbols.map(({ symbol }) => getSymbolValueModel().getLatest(symbol)))

    res.render('users/dashboard', {
        userSymbols,
        symbolValues,
        config
    })
}

export async function welcome(req: Request, res: Response, next: NextFunction) {
    res.render('users/welcome', {})
}

export async function addSymbol(req: Request, res: Response, next: NextFunction) {

    req.user
    const { symbol } = req.body
    
    const userSymbolData = {
        userId: 1,
        symbol
    }
    const userSymbol = await getModel().add(userSymbolData)
    res.redirect('/users/dashboard')

}
