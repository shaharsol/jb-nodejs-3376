import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/healthcheck', (req: Request, res: Response, next: NextFunction) => {
    res.send('I\'m healthy')
})

export default router;