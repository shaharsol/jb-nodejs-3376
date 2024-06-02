import { Router } from 'express';

const router = Router();

router.get('/welcome', (req, res) => { res.render('guests/welcome') });

export default router;