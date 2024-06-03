import getModel from "../../models/user-symbol/factory";
import { NextFunction, Request, Response } from "express";

export async function getUnqiueSymbols(req: Request, res: Response, next: NextFunction) {
    const uniqueSymbols = await getModel().getUniqueSymbols();
    res.json(uniqueSymbols)
}
