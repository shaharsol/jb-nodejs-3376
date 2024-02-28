import { Router, Request, Response, NextFunction } from 'express';

export default function someOtherMiddleware (req: Request, res: Response, next: NextFunction) {
    res.send('Hello I\'m some other middleware');
}