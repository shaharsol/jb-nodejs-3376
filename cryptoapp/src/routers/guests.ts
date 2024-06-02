import { Router } from 'express';
import enforceGuest from '../middlewares/enforce-guest';

const router = Router();

router.use(enforceGuest)

router.get('/welcome', (req, res) => { res.render('guests/welcome') });

export default router;