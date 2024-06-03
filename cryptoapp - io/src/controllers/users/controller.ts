import { NextFunction, Request, Response } from "express";
import getModel from "../../models/user-symbol/factory";
import getSymbolValueModel from "../../models/symbol-value/factory";
import { DTO } from "../../models/user-symbol/dto";
import config from "config";

export async function dashboard(req: Request, res: Response, next: NextFunction) {
    try {
        const userSymbols = await getModel().getForUser(req.user.id);

        const symbolValues = await Promise.all(
            userSymbols.map(({ symbol }) => getSymbolValueModel().getLatest(symbol))
        )

        res.render('users/dashboard', {
            userSymbols,
            symbolValues,
            io: config.get('app.io'),
            user: req.user
        })
    } catch (err) {
        next(err);
    }
}

export async function addSymbol(req: Request, res: Response, next: NextFunction) {
    try {
        const userSymbol = req.body as DTO;
        userSymbol.userId = req.user.id;
        const newUserSymbol = await getModel().add(userSymbol);
        console.log(`added a new user_symbol with id ${newUserSymbol.id}`)
        res.redirect('/users/dashboard');
    } catch (err) {
        next(err)
    }
}

export function logout(req: Request, res: Response, next: NextFunction) {
    req.logOut(() => {
        res.redirect('/welcome')
    });
}