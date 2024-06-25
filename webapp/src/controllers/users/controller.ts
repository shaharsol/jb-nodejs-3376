import { Request, Response, NextFunction } from 'express';
import { getModel as getUserSymbolModel } from '../../models/user-symbol/factory';
import { getModel as getSymbolValueModel } from '../../models/symbol-value/factory';
import { DTO } from '../../models/user-symbol/dto';
import { formatCurrency } from '../../utils/currency';
    

export async function addSymbol(req: Request, res: Response, next: NextFunction) {

    try {
        const userSymbol = {
            userId: req.user.id, // req.user.id // if(req.user)
            symbol: req.body.symbol as string
        }
        const newUserSymbol = await getUserSymbolModel().add(userSymbol)
    
        res.redirect('/users/dashboard')
    } catch (err) {
        next(err)
    }
    
}

export async function dashboard(req: Request, res: Response, next: NextFunction) {
    try {
        const userSymbols = await getUserSymbolModel().getForUser(req.user.id);

        const symbolValues = await Promise.all(userSymbols.map(({symbol}) => getSymbolValueModel().getLatest(symbol)))

        console.log(symbolValues)

        res.render('users/dashboard', {
            userSymbols,
            symbolValues,
            formatCurrency
        }) 
    } catch (err) {
        next(err)
    }
    
}
