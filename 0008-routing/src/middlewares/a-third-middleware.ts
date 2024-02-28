import { Router, Request, Response, NextFunction } from 'express';

export default function aThirdMiddleware (req: Request, res: Response, next: NextFunction) {
    res.send('Hello I\'m a 3rd middleware');
}