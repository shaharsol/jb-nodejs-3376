import { Router, Request, Response, NextFunction } from 'express';
import someMiddleware from '../middlewares/some-middleware';
import someOtherMiddleware from '../middlewares/some-other-middleware';
import aThirdMiddleware from '../middlewares/a-third-middleware';

const router = Router();

// this will apply in the router level...
router.use(someMiddleware);

// someOtherMiddleware applies here
router.get('/healthcheck', someOtherMiddleware, (req: Request, res: Response, next: NextFunction) => {
    res.send('I\'m healthy')
})

// someOtherMiddleware and aThirdMiddleware applies here
router.get('/say-hi', someOtherMiddleware, aThirdMiddleware, (req: Request, res: Response, next: NextFunction) => {
    res.send('hi')
})

export default router;
