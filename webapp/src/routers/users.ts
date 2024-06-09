import { Router } from "express";

const router = Router()

router.get('/dashboard', (req, res, next) => {
    res.render('users/dashboard')
})

export default router;