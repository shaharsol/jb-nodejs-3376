import { Router } from 'express'
import auth from '../middlewares/auth'

const router = Router();

router.get('/auth', auth.authenticate('github', { scope: ['user:email'] }))
router.get('/callback', auth.authenticate('github', {failureRedirect: '/users/welcome'}), (req, res) => {res.redirect('/users/dashboard')})

export default router;