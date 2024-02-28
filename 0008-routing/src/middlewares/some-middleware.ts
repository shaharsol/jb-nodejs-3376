import { Router, Request, Response, NextFunction } from 'express';

export default function someMiddleware (req: Request, res: Response, next: NextFunction) {
    res.send('Hello I\'m a middleware');
}