import { Router, Request, Response, NextFunction } from 'express';
import someMiddleware from '../middlewares/some-middleware';
import someOtherMiddleware from '../middlewares/some-other-middleware';
import aThirdMiddleware from '../middlewares/a-third-middleware';

const router = Router();

// this will apply in the router level...
router.use(someMiddleware);

router.get('/healthcheck', (req: Request, res: Response, next: NextFunction) => {
    res.send('I\'m healthy')
})

// this will apply from here onward...
router.use(someOtherMiddleware);

// this will apply from here onward on all PUTs
router.put('*', aThirdMiddleware);

router.get('/say-hi', (req: Request, res: Response, next: NextFunction) => {
    res.send('hi')
})

export default router;
