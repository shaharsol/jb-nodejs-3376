import { NextFunction, Request, Response } from "express";
import getModel from "../../models/symbol-value/factory";

export async function getLatestSymbolValue(req: Request, res: Response, next: NextFunction) {
    try {
        const latest = await getModel().getLatest(req.params.symbol)
        res.json(latest);
    } catch (err) {
        next(err)
    }
}